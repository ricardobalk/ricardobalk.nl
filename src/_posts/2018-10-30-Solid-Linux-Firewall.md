---
layout: post
title: Solid Firewall Configuration with iptables
excerpt: By default, Linux passes all network traffic (with some exceptions). Learn how to set-up a secure firewall with iptables.
category: devops
image: "fire.png"
hero-image: "fire.png"
---

By default, Linux uses an empty firewall which means that all traffic will pass (with some exceptions). As long as you don't have server applications running and are using a router with a firewall, that would not be an issue.

But most developers use Linux mainly to install server applications and work with them. Wouldn't it be great to have a rock solid firewall setup to prevent leaking data to the local network or, in case of a public server, the outside world?

This article gives a few examples of solid firewall setups which could help devops to secure networking setup.

# Client-side examples

## Basic Solid Client Firewall

The following example shows a basic client side setup which...

* Allows incoming local loop-back (`lo`) traffic (e.g. connections to `localhost`)
* Allows outgoing traffic.
* Allows incoming traffic of which is a response to outgoing traffic.
* Drops all other, unspecified traffic.

> **WARNING: Do not use the following set-up on a server.**
>
> It drops incoming connections by default (`iptables -P INPUT DROP`), so after closing a connection, you won't be able to connect again!

```sh
# Reset standard policies and clear the firewall rules
iptables -P INPUT ACCEPT
iptables -F

# Accept local loopback connections and incoming connections from established and related connection (e.g. to receive things back from outgoing traffic)
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set standard policies (Drop all other, unspecified connections)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Save this setup
iptables-save > /etc/iptables/basic.v4
```

> **NOTE: iptables commands should be used as superuser.**
>
> So when you're a non-root user, you need to write `sudo iptables ` instead of `iptables`.

To restore the configuration, use `iptables-restore < /etc/iptables/basic.v4`.

# Server-side examples

## Basic HTTP(S) Server

You might want to run an HTTP/HTTP(S) server, visible to the outside world.

The following example shows a basic server side setup which...

* Allows incoming local loop-back (`lo`) traffic (e.g. connections to `localhost`)
* Allows outgoing traffic.
* Allows incoming traffic of which is a response to outgoing traffic.
* **Allows incoming traffic to ports `80` and `443`.**
* Drops all other, unspecified traffic.

```sh
# Reset standard policies and clear the firewall rules
iptables -P INPUT ACCEPT
iptables -F

# Accept local loopback connections and incoming connections from established and related connection (e.g. to receive things back from outgoing traffic)
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Accept those connections to ports 80 and 443 that haven't been rejected
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Set standard policies (Drop all other, unspecified connections)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Save this setup
iptables-save > /etc/iptables/basic-server.v4
```

---

## Advanced HTTP(S) Server

You might want to make things a little more advanced.

The following example shows a bit more advanced server side setup which...

- Allows incoming local loop-back (`lo`) traffic (e.g. connections to `localhost`)
- Allows outgoing traffic.
- Allows incoming traffic of which is a response to outgoing traffic.
- Allows incoming traffic to ports `80` and `443`.
- **Limits the number of concurrent connections to ports `80` and `443` to a maximum of `20` connections per client.**
- **Rejects connections when that limit is reached.**
- Drops all other, unspecified traffic.

```sh
# Reset standard policies and clear the firewall rules
iptables -P INPUT ACCEPT
iptables -F

# Accept local loopback connections and incoming connections from established and related connection (e.g. to receive things back from outgoing traffic)
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set a maximum number of connections to ports 80 and 443, reject connections when they exceed the maximum number of connections
iptables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 20 -j REJECT --reject-with tcp-reset
iptables -A INPUT -p tcp --syn --dport 443 -m connlimit --connlimit-above 20 -j REJECT --reject-with tcp-reset

# Accept those connections to ports 80 and 443 that haven't been rejected
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Set standard policies (Drop all other, unspecified connections)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Save this setup
iptables-save > /etc/iptables/advanced-server.v4
```

---

## Advanced HTTP(S) Server with (restricted) SSH access

The following example shows an even more advanced server side setup which...

- Allows incoming local loop-back (`lo`) traffic (e.g. connections to `localhost`)
- Allows outgoing traffic.
- Allows incoming traffic of which is a response to outgoing traffic.
- Allows incoming traffic to ports `80` and `443`.
- Limits the number of concurrent connections to ports `80` and `443` to a maximum of `20` connections per client.
- Rejects connections when that limit is reached.
- **Allows SSH connections from `123.456.789.123`.**
- Drops all other, unspecified traffic.

```sh
# Reset standard policies and clear the firewall rules
iptables -P INPUT ACCEPT
iptables -F

# Accept local loopback connections and incoming connections from established and related connection (e.g. to receive things back from outgoing traffic)
iptables -A INPUT -i lo -j ACCEPT
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Set a maximum number of connections to ports 80 and 443, reject connections when they exceed the maximum number of connections
iptables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 20 -j REJECT --reject-with tcp-reset
iptables -A INPUT -p tcp --syn --dport 443 -m connlimit --connlimit-above 20 -j REJECT --reject-with tcp-reset

# Accept those connections to ports 80 and 443 that haven't been rejected
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Accept connections to SSH from a specific IP subnet
iptables -A INPUT -p tcp -s 123.456.789.123 --dport 22 -j ACCEPT

# Set standard policies (Drop all other, unspecified connections)
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Save this setup
iptables-save > /etc/iptables/advanced-server-ssh.v4
```
