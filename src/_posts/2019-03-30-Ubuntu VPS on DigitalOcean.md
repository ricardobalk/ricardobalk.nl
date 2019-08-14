---
layout: post
date: 2019-03-30 10:00:00 +0100
title: Setting up an Ubuntu VPS on DigitalOcean from scratch
excerpt: How to create a modern and secure Ubuntu server on DigitalOcean with Apache, MariaDB, PHP 7.2, SSL, ModSecurity and HTTP/2.
category: devops
tags: [devops, linux, server, servers, digitalocean]
image: "ubuntu-on-digitalocean.png"
hero-image: "ubuntu-on-digitalocean.png"
---

In this guide, you'll learn how to set up a VPS server from scratch on DigitalOcean's platform, which is equipped with Apache, HTTP/2 support, PHP 7.2, MariaDB, SSL certificates and ModSecurity (OWASP rules).

<span style="color: maroon; font-weight: bold;">Beware: This is a super comprehensive guide.</span>



A while ago, my bare-metal server died. After running a backup server on a Raspberry Pi, I decided to rent a VPS at DigitalOcean and migrate my old stuff there. Therefore, I wrote this tutorial both to help myself and others to set up a new Ubuntu VPS at DigitalOcean.

Some steps in this tutorial could differ according to your particular preferences at DigitalOcean, e.g. when you are already familiar with SSH keys.

# 1 Create a new droplet

The first thing you should do is creating a new droplet on DigitalOcean. Choosing the latest LTS-release of Ubuntu Server is the best decision.

> Note: LTS is the abbreviation of **L**ong **T**erm **S**upport, which means that the server software is maintained for a longer period of time and that (future) security issues will be resolved as well.

<!-- TODO: Add images that explain how to create a new droplet. -->

# 2 Connect for the first time

After you created a new DigtalOcean droplet, connect to it using SSH. Windows users could use PuTTY for this, Linux and macOS-users should use the terminal.

You'll be asked to change the root password upon your first login. Change the password to something secure and write it down.

> Notes:
>
> 1. Don't make your life hard by choosing a password like `3uor2jofn2oi45r`. A secure password is actually called a pass**phrase** and consists of multiple, randomly chosen words. (e.g. `eastbound sibling banana survey`)
> 2. If you already have added one or multiple public SSH key(s) to your account, you won't  be asked to change your password. Proceed to the next step.

# 3 Enhance the overall server security

To make your server more secure, it is advised to change a few default things.

## Hide SSH a bit

The default listening port for SSH is `22`. It is advised to change this, because it is a well known port that gets scanned by malicious parties, which will try to log in to your system.

Edit the file `/etc/ssh/sshd_config`, e.g. by using nano: `nano /etc/ssh/sshd_config`. 

* In `/etc/sshd/sshd_config`, change the following lines:

```
Port 22
```

to something like

```
Port 60022
```

> Note: Any port between 1023-65535 will work, as long as it is not in use by another application. Remember this port. Write it down somewhere.

* Save the configuration file (`Control-X` followed by `Y` if you're using `nano`).

* Restart the SSH daemon: `service sshd restart`.

* Open an extra terminal window and try to connect to your server, using the new port.

  > Note:
  >
  > Windows-users: Open a new PuTTY window.
  >
  > Linux and macOS users: `ssh root@<server ip> -p <port number>`.

## Use Public Key Authentication

Public Key Authentication is a well-known and secure way of authentication and is preferred for the following reasons:

 1. It is easier than remembering a password. &ndash; You're only using a "certificate file" to authenticate and log in.
 2. You could create and use as many public keys as you want. &ndash; One for your computer at home, one for the computer at work, one for your notebook, one for your smart phone.
 3. Certificates are cryptographically more secure. &ndash; A computer guesses a 40 bit human made up password/-phrase within minutes, a 2048 bit certificate would take much more time.
 4. You could make keys unusable by removing a single line. &ndash; One of your devices got stolen? Remove the particular public key line from your droplet and all future access is denied.
 5. Easier sharing and collaboration. &ndash; If you want to give someone else access, add their public key. No password sharing, no password leaking.

Public key _pairs_ always consist of two parts:

 * A private key &mdash; which you should keep for yourself and never share with someone else.
 * A public key &mdash; which you could share.

### Generating new SSH key pairs

The first step is to generate a public key pair to be used for authentication purposes.

**Windows users**

Windows users could use PuTTYgen to generate a new key pair.

<!-- TODO: Add process description -->

**Linux and macOS users**

On Linux and macOS you could generate a new SSH key via terminal commands:

* Use `ssh-keygen -t ed25519 -C 'Name of the new key'` to generate a new key pair. `ssh-keygen` saves the public key to `~/.ssh/id_ed25519.pub`
* Execute `cat ~/.ssh/id_ed25519.pub`, it will show you your public key. Copy the output to the clipboard.

> Notes: 
> 
> 1. `~/` is shorthand Unix (Linux/macOS) slang for the directory `/home/your-username/`.
> 2. Adding a name is not required but recommended, it makes differentiating multiple keys a lot easier, e.g. `ssh-keygen -t ed25519 -C 'Computer-Home'`.
> 3. The _private key_ is located at `~/.ssh/id_ed25519` (without `.pub`), the _public key_ is located at `~/.ssh/id_ed25519.pub`.

### Adding keys to your DigitalOcean droplet

To add the key

  * Log in to the server
  * Edit `~/.ssh/authorized_keys` 
  * Paste the public key.

### Change the authentication method

The next step is to disable the usage of password login and move to a safer (public key based) approach.

In `/etc/sshd/sshd_config` on the server, you'll need to change the following lines:

**Enabling public key authentication:**

```
#PubkeyAuthentication yes
```

should become

```
PubkeyAuthentication yes
```

**Disabling password authentication:**

```
#PasswordAuthentication yes
```

should become

```
PasswordAuthentication no
```

### Restart the SSH daemon

`sudo service sshd restart`

Done!

> Note: Always check if logging in still works with the new settings via an additional terminal window.

# 4 Create User Accounts

DigitalOcean servers use the root account by default. That's not quite secure by design, because it does not conform to the principle of 'least privilege'.

The best thing to do is to create an additional user which does not have root privileges by default but could gather those privileges by issuing the `sudo` command.

## Adding an additional user

While still being logged in to your droplet as root user, issue the following commands.

* `useradd sysadmin`, which will create the new user `sysadmin`.
* `passwd sysadmin`, which will set up a password. This password is needed when the new user `sysadmin` invokes a `sudo` command. Use a strong password and write it down somewhere.
* `usermod -a -G sudo sysadmin`, which will grant `sysadmin` the rights to issue `sudo` commands.
* `mkdir /home/sysadmin`, which will make a new home directory.
* `chown -R sysadmin /home/sysadmin`, which will set the correct permissions in the new directory.

> NOTE: Change the username `sysadmin` to something else if you have something different in mind, e.g. `devteam` or `voldermort`. 

## Adding another public key

Previously, you enabled Public Key Authentication (section 3.2) and it's the only way to log in to your server. This means that you should add a public key to the newly created user as well.

Depending on your situation, you could choose to

- Generate a new private / public key pair to be able to log in as this new user. This is recommended, because you still have a key pair for the `root` user as backup.
- Move the `root` key pair to this new user. This is less recommended, because this could lock you out unintentionally. But it is quite secure, as it means that practically no one could log in directly as root user.
  ```
  mkdir /home/sysadmin/.ssh/
  mv ~/.ssh/authorized_keys /home/sysadmin/.ssh/authorized_keys
  chown sysadmin /home/sysadmin/.ssh/authorized_keys
  ```
- ~~Use the same key as the one for the `root` user.~~ That is a **terrible** decision.

## Test the new user account

Try to log in to your new user, using the new key, e.g. in a separate terminal.

`ssh sysadmin@<server ip> -p 60022`

Try to issue a sudo command. Quick hint: `sudo echo "It works" || echo "It doesn't work"`

# 5 Firewall

For the firewall, you have two options

- The quick and easy way, via the DO configuration panel
- The slow and difficult way, which provides you with more advanced features

## Quick & Easy Firewall

In your DigitalOcean panel, you could go to the networking tab and set up a firewall.

## Advanced Firewall

If you want a more secure and advanced approach, follow the instructions below.

### Step 1: Reset &amp; clear the current firewall

```sh
sudo iptables -P INPUT ACCEPT
sudo iptables -F
sudo ip6tables -P INPUT ACCEPT
sudo ip6tables -F
```

### Step 2: Accept outbound connections

```sh
sudo iptables -A INPUT -i lo -j ACCEPT
sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
sudo ip6tables -A INPUT -i lo -j ACCEPT
sudo ip6tables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

### Step 3: Set a maximum number of connections on specific ports

```sh
sudo iptables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 4 -j REJECT --reject-with tcp-reset
sudo iptables -A INPUT -p tcp --syn --dport 443 -m connlimit --connlimit-above 10 -j REJECT --reject-with tcp-reset
sudo ip6tables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 4 -j REJECT --reject-with tcp-reset
sudo ip6tables -A INPUT -p tcp --syn --dport 443 -m connlimit --connlimit-above 10 -j REJECT --reject-with tcp-reset
```

### Step 4: Accept the connections that not have been rejected

```sh
sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 443 -j ACCEPT
sudo ip6tables -A INPUT -p tcp --dport 80 -j ACCEPT
sudo ip6tables -A INPUT -p tcp --dport 443 -j ACCEPT
```

### Step 5: Accept connections from specific hosts

```sh
sudo iptables -A INPUT -p tcp -s 123.456.789.0/24 --dport 60022 -j ACCEPT
sudo ip6tables -A INPUT -p tcp -s 123.456.789.0/24 --dport 60022 -j ACCEPT
```

### Step 6: Set the end policy

```sh
sudo iptables -P INPUT DROP
sudo iptables -P FORWARD DROP
sudo iptables -P OUTPUT ACCEPT
sudo ip6tables -P INPUT DROP
sudo ip6tables -P FORWARD DROP
sudo ip6tables -P OUTPUT ACCEPT
```

### Step 7: Making the configuration permanent

By default, all firewall rules of `iptables` will be forgotten after a system reboot. This means that the firewall rules have to be re-initialized on each restart.

To make it easier to save and restore firewall rules, there are two tools available on Linux: `iptables-save` for IPv4 rules and `ip6tables-save` for IPv6.

#### Saving the current firewall rules

The first thing to do is to save the current firewall rules. The rules will be saved in the directory `/etc/iptables/`.

```sh
sudo mkdir /etc/iptables
sudo iptables-save | sudo tee /etc/iptables/rules.v4
sudo ip6tables-save | sudo tee /etc/iptables/rules.v6
```

> Note: `sudo tee` makes it possible to directly save the output files to a directory owned by root, that is the reason why this is used here instead of regular file redirection (`>`).

#### Automatically reloading at startup

It is cool that the current firewall rules are saved, but they still need to be restored at system startup somehow. This is done with a `systemd` unit, which will run the necessary stuff after network interfaces have been set up.

Create the following file: `/etc/systemd/system/restore-firewall-on-boot.service`

Put this inside:

```
[Unit]
  Description=Restore Firewall Rules
  After=network.target

[Service]
  Type=oneshot
  ExecStart=/sbin/iptables-restore /etc/iptables/rules.v4
  ExecStart=/sbin/ip6tables-restore /etc/iptables/rules.v6
  RemainAfterExit=yes

[Install]
  WantedBy=multi-user.target
```

Enable the new `systemd` unit...

```sh
sudo systemctl enable restore-firewall-on-boot
```

Bam! The firewall rules will be restored at boot time, after the networking devices have been initialized.

<!--
#### Old System-V approach

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

-->

# 6 Automatic upgrades

For production environments, it is important that a system stays secure. This could be achieved with unattended upgrades.

On the server, execute `sudo apt install unattended-upgrades` to install this functionality.

After installing, execute `sudo crontab -e` and add the following line:

```
0 0 * * * unattended-upgrade
```

This will add a task performing automatic system updates each day at 12:00 AM.

# 7 Installation of server applications

Now we have finally installed and configured the base server, let's take a shot on the application-side.

We're going to install Apache, PHP 7.2 and ModSecurity. But before we're going to do anything, make sure that the software repositories are up-to-date.

```sh
sudo apt update && sudo apt upgrade
```

## Installation of Apache

Installing Apache isn't that hard...

```sh
sudo apt install -y apache2
```

Check if the server is accessible.

## Installation of PHP 7.2 (php7.2-fpm)

The below command could be used to install PHP 7.2.

```sh
sudo apt install -y php7.2 php7.2-fpm php7.2-curl php7.2-gd php7.2-json php7.2-mysql php7.2-xml
sudo a2enmod proxy_fcgi setenvif
sudo a2enconf php7.2-fpm
sudo service apache2 restart
```

Create the file `/var/www/html/index.php` and add the following code:

```php
<?
  phpinfo();
?>
```

Go to `http://<host ip>/index.php`, and check if PHP 7.2 was installed successfully.

If it works, you could remove the file again.

```sh
sudo rm /var/www/html/index.php
```

## Installation of ModSecurity OWASP

ModSecurity is a Web Application Firewall that prevents malicious parties (scriptkiddies) from doing weird stuff on your server. OWASP is an abbreviation for _Open Web Application Security Project_. The OWASP-CRS (Core Rule Set) is an open source rule set for ModSecurity that has a good balance between security and usability.

Install ModSecurity with the OWASP CRS.


```sh
sudo apt install libapache2-mod-security2 modsecurity-crs
sudo cp /etc/modsecurity/modsecurity.conf-recommended /etc/modsecurity/modsecurity.conf
```

The next step is to actually enable ModSecurity.

```sh
sudo nano /etc/modsecurity/modsecurity.conf
```

Change the line
```
SecRuleEngine DetectionOnly
```

to

```
SecRuleEngine On
```

Then, restart Apache with ModSecurity

```sh
sudo a2enmod security2
sudo service apache2 restart
```

Done.

> Note: If you are working with REST-based applications, ModSecurity could fuck up some things. So if your web application is not working, temporarily disable ModSecurity with `sudo a2dismod security2`.

<!-- TODO: Provide a solution. -->

### Changing the Server Signature

A nice thing to do with ModSecurity is changing the server signature, so that it is impossible for others to see which server software and version is running on your machine.

```sh
sudo nano /etc/apache2/conf-available/Security-Change-ServerSig.conf
```

Put this inside:

```
<IfModule mod_security2.c>
    ServerTokens Full
    SecServerSignature Unix
</IfModule>
```

And restart the server...

```sh
sudo service apache2 restart
```

> Hint: If you're using Linux, you could check the response headers from a server with the following command: `curl -IL example.com`.

## Installation of MariaDB

```sh
sudo apt install -y mariadb-server
sudo mysql_secure_installation
```

<!-- TODO: Extend this part. Add images. -->

## Installation of Certbot (Let's Encrypt)

To get a free Let's Encrypt Certificate, use `certbot`. Installation is done via `apt`.

```sh
sudo apt install certbot
```

For further instructions how to use Certbot, check https://certbot.eff.org/

After Let's Encrypt is set up, it is advised to automatically renew all certificates. There are different ways to do it, but I'll use `cron`.

```sh
sudo crontab -e
```

Add the following line to automatically check all certificates at 3:00 AM each day:

```
0 3 * * * certbot renew
```

> Note: Certbot automatically renews certificates when it is needed.

## Enabling HTTP/2 support

<!-- TODO: The part below could become more understandable -->

HTTP/2 makes your website faster by pipelining all requests (to a particular server) over a single TCP connection and minimizing the overhead by talking "in binary" format directly.

All files (images, svgs, videos etc.) are served over a single connection, which means that there won't be an SSL negotiation delay for each single file. After all, more connections stay available to serve other people.

Enable the HTTP/2 module in Apache.

```sh
sudo a2enmod http2
```

Add the following line to the SSL VirtualHost(s) that need support HTTP/2:

```
Protocols h2 http/1.1
```

An example would be:

```
<VirtualHost *:443>
  Protocols h2 http/1.1
  ServerAdmin you@your-awesome-site.com
  ServerName your-awesome-site.com
  ...
</VirtualHost>
```

> Important note: HTTP/2 only works with SSL. So use them on your SSL VirtualHost(s) only, usually the ones using port `443`.

# Tips and Enhancements

## Periodic Backups

It is recommended to perform automatic periodic backups.

# References

Karunaratne, A. (2017, November 5). *How to enable HTTP/2 support in Apache*. Retrieved January 13, 2018, from https://http2.pro/doc/Apache

Svoboda, P. (2012, May 14). *Laptop, SSD, tmpfs and Apache*. Retrieved January 13, 2018, from https://weits.blogspot.ch/2012/03/laptop-ssd-tmpfs-and-apache.html

*Tar archiving that takes input from a list of files*. (n.d.). Retrieved January 13, 2018, from https://stackoverflow.com/questions/8033857/tar-archiving-that-takes-input-from-a-list-of-files#8033898
