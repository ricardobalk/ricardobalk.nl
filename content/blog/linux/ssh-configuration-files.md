---
type: "article"
date: 2023-10-20 20:00:00 +00:00
author: 1
excerpt: "Effectively managing SSH configuration files on Linux, by using the `Include` directive."
category: "Linux"
tags: ["linux", "ssh", "configuration", "servers", "devops"]
---

# Effectively managing SSH configuration files

SSH, or Secure Shell, is a crucial tool for remote server management and secure data transfer. If you're a Linux user, you're likely familiar with the `~/.ssh` directory, where your SSH configuration files are stored. However, as you accumulate more SSH connections and keys, managing these configurations can become unwieldy. Fortunately, there's a powerful feature in SSH that can help you maintain order and security: the `Include` directive.

## Structuring Your SSH Configuration

Your `~/.ssh` directory can quickly become cluttered with various configuration files and keys. To keep everything organized, you can structure it like this:

```
.ssh
├── config
├── config.d
│   ├── github
│   ├── gitlab
|   |   ├── gitlab.com
|   |   └── gitlab.example.com
│   └── servers
|       ├── amsterdam
│       ├── berlin
│       ├── ...
│       ├── yerevan
│       └── zurich
├── id_ed25519
├── id_ed25519.pub
├── id_rsa
├── id_rsa.pub
└── known_hosts
```

The main SSH configuration file, `config`, plays a central role in managing your connections. It allows you to include other configuration files using the `Include` directive. This organization can help you better handle your SSH connections, making them more manageable and secure.

## Using the `Include` Directive

The `config` file is where you declare the `Include` directives, which specify the directories and files containing additional SSH configurations. For example:

```
IdentityFile ~/.ssh/id_ed25519
IdentityFile ~/.ssh/id_rsa
Include config.d/*
Include config.d/**/*
```

In this snippet, you include all configuration files found in `config.d` and its subdirectories. This means you can segment your SSH configurations into separate files, making it easier to find and manage settings for specific hosts.

## Configuring Host-Specific Settings

Each server you connect to can have its own configuration file. For instance, the `config.d/servers/amsterdam` file may look like this:

```
Host amsterdam
    HostName amsterdam-01.example.com ams-01.example.com ams-01
    User john
    IdentityFile ~/.ssh/id_ed25519
    IdentityFile ~/.ssh/id_rsa
```

With such individualized configuration files, you can tailor your SSH settings for each server to your exact needs.

## Connecting to Git Hosting Services

If you regularly connect to Git hosting services like GitHub and GitLab, you can streamline your SSH connections. Here's an example of a `config.d/github` configuration file:

```
Host github.com github gh
  User git
  HostName github.com
  Port 22
  Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com
```

When configuring SSH connections to Git hosting services like GitHub, it's important that these services do not provide shell access. Attempting to use a simple command like `ssh github` will result in a message like the following:

```
PTY allocation request failed on channel 0
Hi [username]! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```

However, it's worth mentioning that using `ssh github` or similar commands can serve as an effective way to test whether your SSH alias or configuration is set up correctly. While it won't grant you shell access, it can be a quick way to verify that your SSH configuration is working as expected.

For GitLab, which may involve multiple instances, you can create distinct configuration files. For instance, `config.d/gitlab/gitlab.com` could look like this:

```
Host gitlab.com gl gl-primary
  User git
  HostName gitlab.com
  Port 22
```

While `config.d/gitlab/gitlab.example.com` might look like this:

```
Host gitlab.example.com gl-secondary
  User git
  HostName gitlab.example.com
  Port 22
```

This allows you to connect to different GitLab instances using commands like `git clone gl-primary:group/project.git` and `git clone gl-secondary:group/project.git`.

## Using Wildcards for Server Clusters

Wildcards in your SSH configuration can significantly simplify managing server clusters with similar characteristics. Consider a scenario where you are responsible for a cluster of servers in the same datacenter, and all these servers share a common naming convention, beginning with "cluster-ams-" and ending with ".example.com." In this situation, you can make your life easier by employing wildcards in your SSH configuration.

Assuming you have multiple servers like "cluster-ams-01.example.com," "cluster-ams-02.example.com," and "cluster-ams-03.example.com," you can use a wildcard configuration like this in your `config` file:

```
Host cluster-ams-*.example.com
    User john
    IdentityFile ~/.ssh/id_ed25519
    IdentityFile ~/.ssh/id_rsa
```

With this configuration, all servers whose names match the pattern "cluster-ams-*.example.com" will share the specified SSH settings. This approach simplifies the management of a server cluster by allowing you to collectively configure servers with hostnames that follow the specified pattern. It eliminates the need to specify individual settings for each one.

This wildcard usage can be particularly beneficial when you have numerous servers that follow a consistent naming pattern, helping you streamline your SSH configuration and making it more efficient to manage a group of related servers.

## Leveraging Multiple Keys for Different Servers

Sometimes, you may need to use different SSH keys for various servers, enhancing security and access control. You can achieve this by changing the `IdentityFile`. For example, to connect to the "amsterdam" server using a different key, you can configure it like this:

```
Host amsterdam
    HostName secure-amsterdam-01.example.com secure-ams-01.example.com secure-ams-01
    User john
    IdentityFile ~/.ssh/ams-01/id_ed25519
    IdentityFile ~/.ssh/ams-01/id_rsa
    IdentitiesOnly yes
```

This setup ensures that the keys in `~/.ssh/ams-01` are used when connecting to the "amsterdam" server. It provides an extra layer of security, as these keys take precedence over the default keys. If you want even more control over key usage, you can use the `IdentitiesOnly` directive. This directive restricts SSH to using only the specified authentication identity files, ignoring those offered by `ssh-agent` or a `PKCS11Provider`.

## Conclusion

Managing SSH configuration files effectively not only makes your life easier but also enhances the security of your connections. By structuring your configuration files, using the `Include` directive, and leveraging individualized settings for each server, you can streamline your SSH workflow and maintain a higher level of control and security. Experiment with these techniques to find the setup that works best for you and your specific needs.