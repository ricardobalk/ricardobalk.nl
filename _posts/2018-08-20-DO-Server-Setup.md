---
layout: post
title: Setting up a Digital Ocean VPS Server from scratch
excerpt: How to create a modern and secure Ubuntu server on Digital Ocean with Apache, MariaDB, PHP 7.2, SSL, ModSecurity and HTTP/2.
category: linux
tags: [sysadmin, linux, server, servers, digital ocean]
---

In this tutorial, you'll learn how to set up a VPS server from scratch on DigitalOcean's platform, which is equipped with Apache, HTTP/2 support, PHP 7.2, MariaDB, SSL certificates and ModSecurity (OWASP rules).



This tutorial has been last revised on {{page.date}}.

# Step 1: Creating a new DO droplet

The first thing you should do is creating a new Digital Ocean droplet.

<!-- TODO: Add images that explain how to create a new droplet. -->

# Step 2: Changing the root password

> NOTE: You could skip this step if you already have added a Public SSH key to your DO account

After you created a new DO droplet, connect to it using SSH. You'll be asked to change it upon your first login.

Change the root password to something secure and write it down somewhere.

# Step 3: Configuring SSH to make it more secure

To make your server more secure, it is advised to change a few things.

Edit the file `/etc/ssh/sshd_config`, e.g. by using nano: `nano /etc/ssh/sshd_config`. 

## 3.1 Default Listening Port

The default listening port for SSH is `22`. It is advised to change this, because it is a well known port that gets scanned by malicious parties, which will try to log in to your system.

* In `/etc/sshd/sshd_config`, change the following lines:

```
Port 22
```

to something like

```
Port 60022
```

> NOTE: Any port between 1023-65535 will work, as long as it is not in use by another application. Remember this port. Write it down somewhere.

* Save the configuration file (`Control-X` followed by `Y` if you're using `nano`).

* Restart the SSH daemon: `service sshd restart`.

* Open an extra console and try to connect to your server, using the new port.

  > Under Linux, `ssh root@[server ip] -p [port number]`

## 3.2 Public Key Authentication

The next step is to configure SSH to only accept Public Key Authentication.

Public Key Authentication is preferred for the following reasons:

* It is easier than remembering a password. You're only using a "certificate file" to authenticate and log in.
* Certificates are cryptographically more secure. E.g. a 40 bit human made pass phrase would be guessed within minutes, while a 2048 bit certificate would take far more time.
* You could create and add as many public keys as you want. One for your home computer, one for the computer at work, one for your notebook, and a backup key. No more password sharing, no more password leaking.
* You could make keys unusable (by removing a single line from your droplet). Notebook got stolen? Public key removed from your DO droplet and rendered unusable. No problem.

### Generating SSH key pairs

#### Windows

Windows users could use PuTTYgen to generate a new key pair.

<!--- TODO: Write this -->

#### Unix (Linux / macOS)

With Linux, you could generate a new SSH key the following way:

* Open a new terminal.
* Use `ssh-keygen -t rsa -b 4096 -C 'Name of the new key'` to generate a new key pair.
* `ssh-keygen` saves the public key to `~/.ssh/id_rsa.pub`, execute `cat ~/.ssh/id_rsa.pub` and copy the output to the clipboard.

> NOTE: `~/` is Unix-slang for `/home/your-username/`

### Adding keys to DO droplet

To add the key, log in to the server, edit `~/.ssh/authorized_keys` and paste the public key.

### Change the authentication method

In `/etc/sshd/sshd_config`, you'll need to change the following lines:

```
#PubkeyAuthentication yes
```

to

```
PubkeyAuthentication yes
```

and

```
#PasswordAuthentication yes
```

to

```
PasswordAuthentication no
```

# 4 User Accounts

Digital Ocean servers make use of the root account by default. That's not quite secure by design, because it does not conform to the principles of 'least privilege'.

So, the best thing to do is to create an additional user which does not have root privileges by default but could gather those privileges by issuing the `sudo` command.

## 4.1 Adding an additional user

While being logged in to your droplet as root user, issue the following commands.

`useradd sysadmin`, which will create the new user `sysadmin`.

`passwd sysadmin`, which will set up a password. This password is asked when the `sysuser` invokes a `sudo` command. Use a strong password and write it down somewhere.

`usermod -a -G sudo sysadmin`, which will grant `sysadmin` the rights to issue `sudo` commands.

`mkdir /home/sysadmin`, which will make a new home directory.

`chown -R sysadmin /home/sysadmin`, which will set the correct permissions in the new directory.

> NOTE: Change `sysadmin` to something else if you have a different name in mind, e.g. `devteam` or `coconut`. 

## 4.2 Adding another public key

Previously, you enabled Public Key Authentication (section 3.2). And it's the only way to log in to your server. This means that you should add a public key to the newly created user as well.

Depending on your needs, you could choose to

- Generate a new private / public key pair for this new user. This is recommended, because you still have your `root` key pair as backup.
- Move the `root` key pair to this new user. This is less recommended, because you could lock yourself out unintentionally.
- Use the same key as for `root`. This is **not** recommended.
  `mkdir /home/sysadmin/.ssh/`
  `cp ~/.ssh/authorized_keys /home/sysadmin/.ssh/authorized_keys`
  `chown sysadmin /home/sysadmin/.ssh/authorized_keys`

## 4.3 Test the new user account

Try to log in to your new user, using the new key, e.g. in a separate terminal.

`ssh sysadmin@[server ip] -p 60022`

Try to issue a sudo command.

`sudo echo "It works" || echo "It doesn't work"`

# Firewall

For the firewall, you have two options

- The quick and easy way, via the DO configuration panel
- The slow and difficult way, which provides you with more advanced features

## Quick & Easy Firewall

In your DO panel, you could go to the networking tab and set up a firewall.

## Advanced Firewall

<!-- TODO: Refer to /articles/Solid-Linux-Firewall instead -->

```sh
#!/bin/sh
# Reset standard policies and clear the firewall rules
iptables -P INPUT ACCEPT
iptables -F

# Accept local loopback connections and incoming connections from established and related connection (e.g. to receive things back from outgoing traffic)
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set a maximum number of connections to ports 80 and 443, reject connections when they exceed the maximum number of connections
iptables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 4 -j REJECT --reject-with tcp-reset
iptables -A INPUT -p tcp --syn --dport 443 -m connlimit --connlimit-above 10 -j REJECT --reject-with tcp-reset

# Accept those connections to ports 80 and 443 that haven't been rejected
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Accept connections to SSH from a specific IP subnet
iptables -A INPUT -p tcp -s 123.456.789.0/24 --dport 60022 -j ACCEPT

# Set standard policies (Drop all other, unspecified connections)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT
```

`sudo mkdir /etc/iptables`

`sudo iptables-save | sudo tee /etc/iptables/rules.v4`

Create the following script `/etc/init.d/restore-firewall`

```bash
#!/bin/bash
#
### BEGIN INIT INFO
# Provides:          restore-firewall
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Required-Start:  
# Required-Stop:   
# Short-Description: Restores firewall at startup
# Description:       Restores firewall at startup, after 60 seconds, using iptables-restore
### END INIT INFO

#
# main()
#
case "${1:-''}" in
  'start')
   logger "Firewall: Restoring iptables in 60 seconds..."
   sleep 60
   logger "Firewall: Restoring iptables now..."
   iptables-restore /etc/iptables/rules.v4 && {
     logger "Firewall: ipv4 rules applied sucessfully"
   } || {
     logger "Firewall: Failed to apply ipv4 rules"
   }
   iptables-restore /etc/iptables/rules.v6 && {
     logger "Firewall: ipv6 rules applied sucessfully"
   } || {
     logger "Firewall: Failed to apply ipv6 rules"
   }
   ;;
  'stop')
   ;;
  'restart')
   ;;
  'reload'|'force-reload')
   ;;
  'status')
   ;;
  *)
   echo "Usage: $SELF start"
   exit 1
   ;;
esac
```

`sudo chmod +x /etc/init.d/restore-firewall`

`sudo update-rc.d restore-firewall defaults 90 10`

<!-- TODO: Change this to a modern systemd approach, add it to /articles/Solid-Linux-Firewall -->

# 6 Installation of Apache, PHP7.1 and ModSecurity

`sudo apt update`

`sudo apt upgrade`

`sudo apt install software-properties-common python-software-properties`

## 6.1 Installation of Apache

`sudo add-apt-repository ppa:ondrej/apache2`

`sudo apt install apache2` 

Check if the server is accessible.

## 6.2 Installation of PHP7.2 (php7.2-fpm)

`sudo apt install php7.1 php7.1-fpm php7.1-curl php7.1-gd php7.1-json php7.1-mysql php7.1-xml`

`sudo apt install php7.2 php7.2-fpm php7.2-curl php7.2-gd php7.2-json php7.2-mysql php7.2-xml`

`a2enmod proxy_fcgi setenvif`

`a2enconf php7.1-fpm`

`a2enconf php7.2-fpm`

## 6.3 Checking if PHP 7.2 was installed successfully

`sudo service apache2 restart`

Make the following file `/var/www/html/index.php` and add

```php
<?
  phpinfo();
?>
```

Check if PHP 7.2 works: Go to http://\<host ip\>/index.php.

`sudo rm /var/www/html/index.php`

## Installation of ModSecurity

`sudo apt install libapache2-mod-security2 modsecurity-crs`

`sudo cp /etc/modsecurity/modsecurity.conf-recommended /etc/modsecurity/modsecurity.conf`

`sudo nano /etc/modsecurity/modsecurity.conf`

```
SecRuleEngine DetectionOnly
```

```
SecRuleEngine On
```

`sudo a2enmod security2`

### Change Server Signature

`sudo nano /etc/apache2/conf-available/Security-Change-ServerSig.conf`

```
<IfModule mod_security2.c>
    ServerTokens Full
    SecServerSignature Unix
</IfModule>
```

`sudo service apache2 restart` 

# Installation of MariaDB

<!-- TODO: Extend this part. Add images. -->

`sudo apt install mariadb-server`

`sudo mysql_secure_installation`

# Installation of SSL

## Installation of Certbot (Let's Encrypt)

`sudo apt install certbot`

For instructions how to install and use Certbot, check https://certbot.eff.org/

### Automatic renewal

`sudo crontab -e`

```
0 3 * * * certbot renew
```

## Enabling HTTP/2 support

<!-- TODO: The part below could become more understandable -->

HTTP/2 makes your website faster by pipelining all requests (to a particular server) over a single TCP connection and minimizing the overhead by talking "in binary" format directly.

All files (images, svgs, videos etc.) are served over a single connection, which means that there won't be an SSL negotiation delay for each single file. After all, more connections stay available to serve other people.

> NOTE: HTTP/2 only works with SSL.

`sudo a2enmod http2`

```
Protocols h2 http/1.1
```

```
<VirtualHost *:443>
  Protocols h2 http/1.1
  ServerAdmin you@your-awesome-site.com
  ServerName your-awesome-site.com
  ...
</VirtualHost>
```

# Tips and Enhancements

## Unattended Upgrades

For production environments, it is important that a system stays secure. This could be achieved with unattended upgrades.

On the server, execute `sudo apt install unattended-upgrades` to install this functionality.

After installing, execute `sudo crontab -e` and add the following line:

```
0 0 * * * unattended-upgrade
```

This will add a task performing automatic system updates each day at 12:00 AM.

## Periodic Backups

It is recommended to perform automatic periodic backups.

# References

Karunaratne, A. (2017, November 5). *How to enable HTTP/2 support in Apache*. Retrieved January 13, 2018, from https://http2.pro/doc/Apache

Svoboda, P. (2012, May 14). *Laptop, SSD, tmpfs and Apache*. Retrieved January 13, 2018, from https://weits.blogspot.ch/2012/03/laptop-ssd-tmpfs-and-apache.html

*Tar archiving that takes input from a list of files*. (n.d.). Retrieved January 13, 2018, from https://stackoverflow.com/questions/8033857/tar-archiving-that-takes-input-from-a-list-of-files#8033898
