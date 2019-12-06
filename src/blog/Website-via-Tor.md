---
date: 2019-06-11 06:00:00 +00:00
title: "Tor address for my website"
excerpt: "Are you a Tor user? My website is available via Tor!"
category: "personal"
tags: ["website", "development", "geeky"]
---

I am running my site on a Tor Hidden Service, commonly called the 'dark web'. Most people know Tor as software for illegal online activities. But instead of using Tor for illegal activities &mdash; it also has legitimate purposes. I am running this website on it, for those people who prefer a high level of privacy.

**My Tor address: <a href="http://tj5amvcbpzcodr63.onion/" title="My website on Tor">tj5amvcbpzcodr63.onion</a>.** You might want to add this address to your bookmarks.

Although I **never** keep access logs on my webserver, I can't prove it. Hosting a Tor Hidden Service guarantees that incoming and outgoing traffic is encrypted and anonymized. The IP addresses of both ends (server and visitor) stay unknown to each other. This guarantees that I won't keep access logs, as the information is not even available to me.

>  Note: I keep error logs on my server for non 4xx-status codes &mdash; e.g. when something went wrong internally.

---

# How to run your own Tor Hidden Service

You might want to provide access to your website via Tor too.

If you're familiar with administring servers &mdash; it's quite easy to create a Tor Hidden Service.

## Step 1: Run a local server

You should run a local server that...

- Is fairly secure: Requests from your Tor Hidden Service are handled as if they come from _localhost_, so be sure that you gave the local server appropiate security measures)
- Accepts HTTP requests (**not HTTPS**): It's recommended to listen for `localhost` connections only on a different port (e.g. `8081`). Also, Onion Routing is end-to-end encrypted, so you won't need an SSL certificate.

> Note: Instead of an HTTP server, you could also use other types of servers, as long as they use TCP connections (e.g. SSH) &mdash; and you could also choose between creating one .onion address per server application or providing multiple local server applications from a single .onion address. It's quite flexible.

## Step 2: Install Tor

```sh
sudo apt install tor
```

## Step 3: Edit configuration

```sh
sudo nano /etc/torrc
```

Add the following lines:

```
SOCKSPort 0

# Website
HiddenServiceDir /var/lib/tor/website_hidden_service/
HiddenServicePort 80 127.0.0.1:8081
```

> Note: `SOCKSPort 0` disables local proxy, as you won't need this when hosting a hidden service only.

Save with Control-X, and Y.

## Step 4: Enable service

```sh
sudo systemctl enable tor@
```

## Step 5: Run hidden service

```sh
sudo service tor start
```

## Step 6: Retrieve .onion address

To retrieve your `.onion`-address, read it from the file `hostname` in `/var/lib/tor/website_hidden_service/`.

```sh
sudo cat /var/lib/tor/website_hidden_service/hostname
```

Now visit the address and you're ready! It really is that easy.

> Note: It could be that you have to fix a few things, e.g. disabling the `Content-Security-Policy: upgrade-insecure-requests` header on the server that listens on port `8081`, etc.
