---
layout: post
title: Running OpenProject Community Edition in Docker
excerpt: OpenProject is a freeware project management tool that comes with a Docker image. Learn how to set it up...
category: linux
tags: [linux, docker, openproject, freeware]
date: 2018-11-03 09:00:00 +00:00
---



OpenProject is an open source web-based project administration tool and Docker is a tool for downloading software *images* for running them inside *containers*. Those containers could be set up very quickly without the hassle that comes with the installation of regular, native applications (e.g. setting the right permissions, bloat the file system with lots of files everywhere, messing up your configuration).

Docker also makes it straightforward to completely remove images and containers, leaving no garbage on your system after removal. And, as an extra, Docker also allows to run multiple instances of the same image(s) simultaneously.

This article guides you through installing OpenProject in Docker in an easy and professional way, so that you could set it up quickly without headaches and take your next project(s) to a new level.

This guide is tested on {{ page.environment }}.

## Step 1: Setting up Docker.io

First thing you'll need to do is to install Docker

````sh
sudo apt install docker.io
````

Then, add your current user to the `docker` group

```sh
sudo gpasswd -a $USER docker && newgrp docker
```

After that, try to run the `hello-world` docker-image to test if all permissions are set up correctly and your Docker installation works

````sh
docker run hello-world
````

Docker should begin downloading the `hello-world` image and run it immediately, and shows the following output:

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

(...)
```

Nice, it works.

## Step 2: The installation of OpenProject

### Creating directories and setting the correct permissions

```sh
sudo mkdir -p /var/lib/openproject/{pgdata,logs,static}
```

Under *nix systems, permissions are king.

For a safe environment, it is recommended to change the permissions to make sure that only privileged users and applications have access to the files. The following commands will lock down access to your current user and users that are part of the `docker` group.

```sh
sudo chown -R $USER:docker /var/lib/openproject/ && sudo chmod -R 770 /var/lib/openproject/
```

To check the permissions of a directory, one would use the following command:

```sh
ls /var/lib/openproject/ -la
```

It should output something like this:

```
drwxrwx---  5 geekyb docker 4096 aug 16 15:01 .
drwxr-xr-x 73 root   root   4096 aug 16 15:01 ..
drwxrwx---  2 geekyb docker 4096 aug 16 15:01 logs
drwxrwx---  2 geekyb docker 4096 aug 16 15:01 pgdata
drwxrwx---  2 geekyb docker 4096 aug 16 15:01 static
```

Where it shows with that the directory`/var/lib/openproject` and the underlying ones are owned by you (user `geekyb` in this example) and the `docker` group and all permissions are set up correctly (`rwxrwx---`). 

The parent directory `..` is owned by the `root` user.

### Setting up the environment variables

Now that the directories are created with the correct permissions, it is time to set up environment variables. These tell the container which configuration state is to be used.

The first environmental variable is a secret key base. That could be chosen by hand, but is much more secure to generate one programmatically by using openssl.

````sh
printf 'SECRET_KEY_BASE=%16s\n' $(openssl rand -hex 16) >> /var/lib/openproject/.env
````

That's all you need to do to get it working.

### Setting up outgoing e-mail (optional)

If you want to send outgoing e-mail from your OpenProject installation, you should open the environment variables file and add some additional variables.

Open the `.env` file, for example, by using nano...

````sh
nano /var/lib/openproject/.env
````

Add the following lines after `SECRET_KEY_BASE`...

```sh
EMAIL_DELIVERY_METHOD=smtp
SMTP_ADDRESS=smtp.sendgrid.net
SMTP_PORT=587
SMTP_DOMAIN=your-domain-name-here.example.com
SMTP_AUTHENTICATION=login
SMTP_ENABLE_STARTTLS_AUTO=true
SMTP_USER_NAME="apikey"
SMTP_PASSWORD="SG.XXXXXXXXXXXXX-XXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
```

Where you would replace the values with ones from your own SMTP provider. The example above is based on SendGrid.

## Step 3: Running OpenProject

```sh
sudo docker run -d -p 8080:80 --name openproject \
  -v /var/lib/openproject/pgdata:/var/lib/postgresql/9.6/main \
  -v /var/lib/openproject/logs:/var/log/supervisor \
  -v /var/lib/openproject/static:/var/db/openproject \
  --env-file /var/lib/openproject/.env --restart=unless-stopped \
  openproject/community:8
```

The next step is to open up a browser, pointing to `http://localhost:8080/`. The default username is `admin` and password `admin`, OpenProject will ask you to change these upon the first login.

## Step 4: Automatically starting OpenProject

The next step is to automatically start OpenProject

```sh
sudo nano /etc/systemd/system/openproject.service
```

```
[Unit]
Description=Start OpenProject Docker Container on boot

[Service]
Type=oneshot
ExecStart=/usr/bin/docker start openproject
ExecStop=/usr/bin/docker stop openproject
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

```sh
sudo systemctl enable openproject.service
```



## Next Steps...

The next step is to improve your installation.

- Create a reverse proxy (nginx is easier than Apache, but both will work)
- Change name of the sender (e.g. to `Company X Project Management`)
- Change the URL `http://localhost:3000` in the settings (and don't choose HTTPS, it will break your configuration)

Note: If you have set up outgoing e-mail, the recipients will receive emails containing `http://localhost:3000`

# Removal

Not happy with OpenProject? Removal is easy.

1. `docker container stop openproject`
2. `docker container rm openproject`
3. `sudo rm -r /var/lib/openproject/`