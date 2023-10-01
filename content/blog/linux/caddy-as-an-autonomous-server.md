---
title: "Caddy: A Modern, Hassle-Free HTTPS Server"
description: Learn how to effortlessly host your static sites with Caddy
date: 2023-09-23 15:00:00 +02:00
category: "web-development"
type: "article"
author: 1
---

# Caddy: A Modern, Hassle-Free HTTPS Server

In my quest for the perfect web server to meet my hosting needs, I've explored some of the industry giants: Apache, Nginx, and now, Caddy. This article delves into my recent experiences with Caddy and how it has revolutionized the way I host my static websites.

## Background: Apache, Nginx and Docker

::MoleculeWarningBanner{type="info"}
[Click here](#setting-up-caddy-a-step-by-step-guide) to skip the background and jump straight to the step-by-step guide.
::

Like many others, I began my web hosting journey with Apache, known for its robustness and extensive feature set. However, I quickly grew frustrated with the complexity of its configuration files. The lines of seemingly cryptic text meant to define my server settings felt anything but intuitive. The solution? I made the switch to Nginx.

Nginx brought a breath of fresh air – simplicity, elegance, and ease of setup, configuration, and maintenance. It swiftly earned a permanent place in my web hosting toolkit.

Recognizing the advantages of containerization, I adopted Docker for my Nginx setup, managed efficiently with Ansible. This allowed me to effortlessly spin up new server instances on various cloud providers such as DigitalOcean, Linode, Vultr, Hetzner, and more.

In essence, harnessing Docker in conjunction with Ansible allowed me to rapidly expand my server infrastructure to accommodate the requirements of my projects.

### Overcoming Let's Encrypt Challenges

However, it was the integration with Let's Encrypt, a free and open Certificate Authority service, that presented its fair share of challenges.

Nginx, despite its strengths, didn't seamlessly integrate with Let's Encrypt out of the box. To obtain the crucial TLS certificates, Nginx required an initial boot in HTTP-only mode. This was because Nginx needed a certificate to start in HTTPS mode, and Let's Encrypt needed to verify domain ownership by reaching the server. It felt like jumping through hoops – first, fire up an Nginx container with HTTP, apply for certificates using the webroot method, and then restart the server(s) in HTTPS mode.

While this process was primarily necessary for entirely new servers, it remained a hassle. I had to remember to follow these steps each time I set up a new server, and automating the process was far from straightforward.

## Embracing Caddy: An Automated Solution

A while ago, some of my online acquaintances introduced me to Caddy, a web server that automates TLS certificate provisioning and renewal for your sites. It almost sounded too good to be true, but I decided to take the plunge.

Caddy is conveniently available as a [Docker image][Caddy Docker image], making it a seamless addition to my existing setup.

## Setting Up Caddy: A Step-By-Step Guide

::MoleculeWarningBanner{type="warning"}
### Prerequisites for Caddy

Before diving into Caddy's setup, let's ensure you have the necessary prerequisites:

- A domain name pointing to your server's IP address(es), as DNS propagation can take some time.
- **Docker CE** and not the Docker version that comes with your Linux distribution's package manager, as these can be outdated. Remove the old Docker version if necessary (you can find instructions for Debian [here](https://docs.docker.com/engine/install/debian/)).
::

::MoleculeWarningBanner{type="green"}
### Extra Recommendations
In addition to the prerequisites above, I recommend the following:
- A separate user on your server for Docker. I typically name it `docker`.
- Confirming that the user for your Docker containers is part of the 'docker' group. If unsure, run `groups [username]` to verify group membership.
- Testing your Docker setup by running `docker run hello-world`. A successful test will display a message saying 'Hello from Docker!'.
- Rebooting your server after installing Docker to ensure that the Docker daemon starts automatically.
::

> Tip: If you find yourself frequently typing `docker-compose` instead of `docker compose`, you can create an alias by adding `alias docker-compose="docker compose"` to your `.bashrc` file.

### Installation and Configuration

Now that you've confirmed that Docker is up and running, let's install Caddy and configure it to serve your static sites.

**Directory Structure**

Here's an overview of my Caddy & Docker Compose setup's directory structure for reference:

```sh
docker@server:~/caddy$ tree
.
|-- config                       # Configuration files
|   `-- Caddyfile                # Caddy configuration file
|-- docker-compose.yml           # Docker Compose configuration
`-- sites                        # Sites to serve
    `-- ams1-web-01.example.com  # Root domain name
        `-- index.html           # Basic HTML file

3 directories, 3 files
```

I've developed a habit of using a different root domain name for each of my servers. Typically, I prefix it with the data center location and the server's purpose. For instance, `ams1-web-01.example.com` denotes a web server in Amsterdam, while `nyc1-db-01.example.com` signifies a database server in New York. This approach makes it easy to identify a server's purpose and location and facilitates service migration between servers.

As you can see, there's a 'sites' directory housing the static sites I intend to serve. The 'Caddyfile' holds the Caddy configuration, and 'docker-compose.yml' manages the Docker Compose configuration.

**docker-compose.yml**

```yaml
version: '3'

name: caddy

services:
  caddy:
    image: caddy:2.7.4-alpine
    container_name: caddy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./config/Caddyfile:/etc/caddy/Caddyfile
      - ./sites:/var/www/html
      - caddy_data:/data
      - caddy_config:/config
    networks:
      - caddy_network
    restart: unless-stopped

networks:
  caddy_network:
    driver: bridge

volumes:
  caddy_data:
    external: true
  caddy_config:
```

Key points to note in this `docker-compose.yml` file:

- While the `name` property is optional, I find it helpful to provide a name to my services for easy identification when running `docker ps`, `docker logs`, and similar commands.
- I specify the Docker image to use, opting for the official Caddy Docker image based on Alpine Linux. Pinning the image to version `2.7.4-alpine` ensures compatibility and avoids breaking the setup with future, potentially incompatible image versions.
- The `./sites/` directory contains the static sites I plan to serve.
- The `./config/Caddyfile` file holds the configuration for Caddy.
- The `networks` section establishes a Docker network, connecting the Caddy container with others on the same network ('caddy_network' in this case) for inter-container communication.
- `caddy_data` and `caddy_config` volumes persist Caddy's data and configuration across container restarts.
  - Note that `caddy_data` is an external volume, safeguarding certificates from being lost when (accidentally) removing the container (e.g., via `docker compose down`)

**Caddyfile**

Let's explore the 'Caddyfile.' This file serves as the hub of Caddy's configuration, where you define the sites to serve, TLS certificates, logging, and more.

Here's an initial version of a basic 'Caddyfile' I use:

```hcl [Caddyfile]
{
    email john.doe@example.com # Replace with your email for Let's Encrypt notifications
    acme_ca https://acme-staging-v02.api.letsencrypt.org/directory
    admin off # Disables the admin endpoint
    http_port 80
    https_port 443
}
```

Now, let's incorporate the root domain name into the 'Caddyfile':

```hcl
{
    email john.doe@example.com # Replace with your email for Let's Encrypt notifications
    admin off # Disables the admin endpoint
    http_port 80
    https_port 443
}

ams1-web-01.example.com {
    root * /var/www/html/ams1-web-01.example.com
    file_server
    encode gzip

    log {
        output file /var/log/caddy/error.log
    }

    tls {
        key_type p384
        ciphers TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
        protocols tls1.3
    }

    header {
        # Disable Server header
        -Server

        # Enable HSTS (Strict Transport Security)
        Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"

        # Disable X-Powered-By header
        -X-Powered-By
    }
}
```

This configuration instructs Caddy to serve files from the `./sites/ams1-web-01.example.com` directory while enabling gzip compression, logging to `/var/log/caddy/error.log`, and setting various security headers.

**Adding a Site to the 'sites' Directory**

Now, let's add a site to the 'sites' directory. I'll demonstrate using `ams1-web-01.example.com` as an example:

```sh
docker@server:~/caddy$ echo << EOF > sites/ams1-web-01.example.com/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ams1-web-01.example.com</title>
</head>

<body>
    <h1>Hello, world!</h1>
    <p>This is ams1-web-01.example.com</p>
</body>

</html>
EOF
```

> Note: Seasoned developers often use 'Vim' to edit files, but for this purpose, I prefer the simplicity of 'echo' and a [heredoc](https://linuxize.com/post/bash-heredoc).

**Starting the Caddy Container**

If this is the first time you're running the container, create the volumes:

```sh
docker@server:~/caddy$ docker volume create caddy_data
docker@server:~/caddy$ docker volume create caddy_config
```

Now, start the container:

```sh
docker@server:~/caddy$ docker-compose up -d
```

If all goes smoothly, you should be able to access your site at the root domain name (e.g. `https://ams1-web-01.example.com/`).

## Conclusion

With this article, you can now confidently set up Caddy to host your static sites. I hope you find it as useful as I have! Caddy has proven to be a game-changer in simplifying the process of hosting static websites while effortlessly managing TLS certificates. Its automation features have brought ease and convenience to my web hosting endeavors, eliminating the manual steps and frustrations that often accompany server setup and maintenance.


## The Next Step: Reverse Proxying

In my next article, I'll delve into how I leverage Caddy as a reverse proxy for my web applications. I'll demonstrate the addition of an extra domain to the 'Caddyfile' and the configuration of the reverse proxy. Stay tuned for an exciting exploration of Caddy's versatile capabilities!

[Caddy Docker image]: https://hub.docker.com/_/caddy