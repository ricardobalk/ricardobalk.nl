---
type: guide
date: 2018-10-31 06:00:00 +00:00
lang: en-GB
excerpt: This article explains how to make Keybase automatically log out when a Linux system is powered off or restarted.
category: "Linux"
images:
  featured:
    filename: "sleeping-keybase-icon.webp"
    description: "Keybase emoticon with closed eyelids"
  hero:
    filename: "sleeping-keybase-icon.webp"
    description: "Keybase emoticon with closed eyelids"
permalink: /guides/keybase-automatic-logout/
---

# Logging out of Keybase automatically

You might want to lock Keybase when you power off or restart your (Linux) system.

It is currently not possible to lock and unlock Keybase (e.g. by using a PIN code). But it is possible to achieve this similar functionality by logging out and logging in. And on Linux, it is possible to automate that!

Let's automate logging out of Keybase before a system poweroff/reboot...

> Note: This is based on Ubuntu 18.04.1 LTS, double check the paths if you're using a different Linux distribution.

::: danger
Setting up a systemd unit is not needed anymore. You can now choose to automatically log out via the settings in Keybase.
:::

## 1 Creating a new systemd unit

Edit `/usr/lib/systemd/user/keybase-autologout.service`, e.g. with `nano`, `vim`, `gedit`, ...

```sh
sudo nano /usr/lib/systemd/user/keybase-autologout.service
```

Add the following lines to this file:

```
[Unit]
Description=Keybase Auto Logout
DefaultDependencies=no
Requires=keybase.service

[Service]
Type=oneshot
Environment="XDG_RUNTIME_DIR=/run/user/1000"
ExecStart=/bin/true
ExecStop=/usr/bin/keybase logout
RemainAfterExit=true
TimeoutSec=15

[Install]
WantedBy=default.target
```

> Note: It could be that your `XDG_RUNTIME_DIR` is different and you need to change it accordingly.
> Check it with `echo $XDG_RUNTIME_DIR`.

## 2 Enabling the new systemd unit

The next step is to enabe the new unit. sudo is not required because the unit is on the user level.

```sh
systemctl --user enable keybase-autologout
```

## 3 Check the status

Check if the new systemd unit is active.

```sh
systemctl --user status keybase-autologout
```

It should display:

```
Loaded: loaded (/usr/lib/systemd/user/keybase-autologout.service; enabled; vendor preset: enabled)
```

Reboot a few times, and check if it works. Keybase should automatically log out.

---

## Disabling and removing

### Disabling

```sh
systemctl --user disable keybase-autologout
```

### Removal

```sh
sudo rm /usr/lib/systemd/user/keybase-autologout.service
```
