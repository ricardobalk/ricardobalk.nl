---
type: guide
date: 2020-11-07 09:00:00 +00:00
excerpt: "Ever wondered how to run Keybase on Tails? I got you covered."
category: "Linux"
tags: ["linux", "tails", "keybase"]
contributors: ["jms1", "ricardobalk", "mrmarkdmurray"]
permalink: /guides/keybase-on-tails
---

# Keybase on Tails

[Tails ("The Amnesic Incognito Live System")][Tails] is an operating system with a strong focus on privacy, security and anonymity. It aims to protect its users from surveillance and censorship. That being said, it starts from a USB stick, runs in memory and the default behaviour is to forget everything once you restart your computer.

The idea is: what you don't have (on the hard drive of your computer), can't be stolen and can't be leaked. However, having a completely empty system on each start is not always practical nor desirable, so it is also possible to let Tails remember some settings, keep documents and other files. Those files are saved on an encrypted volume, secured with a passphrase.

Besides configuration settings, docs and other files it is also possible to keep some software packages. Most software packages installed the regular way (via `apt` or the Synaptic Package Manager), work out of the box &mdash; but Keybase does not, as they use their own software repositories and Tails does not know which files to keep.

This article guides you through the procedure of installing and configuring Keybase on Tails. It was tested on Tails 4.12.

# Procedure

## 1 Enable Persistence

### 1.1 Set up Persistent Volume

Set up a persistent volume with the following settings turned on:

- **Personal Data** - this creates a `~/Persistent/` directory whose contents are persistent across reboots.

- **Additional Software** - this sets up a mechanism to have `.deb` files automatically install when Tails boots.

- **Dotfiles** - this sets up a mechanism to have any files you may need, automatically symlink into the `amnesia` user's home directory. Typically, this would be used for "dot files", such as `.bashrc`.

Other options can be enabled if you need them.

### 1.2 Reboot with Persistent Volume

After *creating* the persistent volume, you need to reboot Tails and unlock the volume in order to use it.

The Tails greeter should have a section in the middle which allows you to unlock the persistent volume. **Enter the persistent volume's password** and click the "Unlock" button on the right. It will verify the password and then say "Your persistent storage is unlocked".

You will also need to **set an administration password**, in order to have permission to make some changes below. Click the "+" button at the bottom left of the greeter, click "Administration Password", enter a password twice, and click "Add" at the top right of the password entry window.

After unlocking the volume and setting an administration password, you can start Tails.

## 2 Set up the system

Now that persistence is active, we can start thinking of Tails as a "system" which can be configured in a "permanent" manner, although because only certain parts of the system are persistent across reboots, the configuration process is somewhat different from what you may be used to. The biggest difference is that, instead of directly configuring the system the way you want it, you also need to tell Tails _which parts_ of the system (directories and/or files) need to be persistent across reboots.

### 2.1 Persistent `/etc/apt/sources.list.d/` files

The Tails "Configure persistent volume" app doesn't offer the list of APT repositories as an option, so we need to add it by hand.

**NOTE:** Be VERY careful with the `persistence.conf` file. If you make a typo, you can break the entire Persistence feature of Tails. (This is why we're making a backup copy of the file before we change anything.)

```sh
cd /live/persistence/TailsData_unlocked         # Tails' persistent data is stored here
sudo cp persistence.conf persistence.conf.bak   # This makes a backup copy
sudo mkdir -m 0755 sources.list.d               # Makes a directory for external apt repos

# Finally, let Tails make a symbolic link during boot,
# that points from /live/persistence/TailsData_unlocked/sources.list.d/
#          to   /etc/apt/sources.list.d/
echo '/etc/apt/sources.list.d source=sources.list.d,link' | sudo tee -a persistence.conf
```

When Tails boots, all *files* in the `/live/persistence/TailsData_unlocked/sources.list.d/` directory will be symlinked into the `/etc/apt/sources.list.d/` directory. Doing it this way allows us to *add to* the list of repositories that the `apt` utilities use.

### 2.2 Configure Keybase deb repo

```sh
cd /live/persistence/TailsData_unlocked/sources.list.d
echo 'deb tor+http://prerelease.keybase.io/deb stable main' | sudo tee keybase.list
sudo chmod 0644 keybase.list

# Let's create a symlink by hand the first time, so we don't need to reboot
cd /etc/apt/sources.list.d
sudo ln -s /live/persistence/TailsData_unlocked/sources.list.d/keybase.list .
```

This creates a *slightly modified* copy of what's in the regular `keybase.list` file. The difference is that this one uses `tor+http://` in the URL, rather than just `http://`.

It then manually creates the same symlink that the Persistence software will create when Tails boots, so that the repo is available without having to reboot.

The Keybase developers sign their software packages with PGP. This key needs to be imported before apt can successfully download the new package. The following command imports the PGP key to the local keyring.

```sh
torsocks curl -s http://keybase5wmilwokqirssclfnsqrjdsi7jdir5wy7y7iu3tanwmtp6oid.onion/docs/server_security/code_signing_key.asc | sudo apt-key add -
# or: torsocks curl -s https://keybase.io/docs/server_security/code_signing_key.asc | sudo apt-key add -
```

Let's do an apt update. This reads and caches the repo index files from all apt sources, including the one we just created.

```sh
sudo apt update
```

### 2.3 Persistent `/etc/default/` files

If the file `/etc/default/keybase` exists when the `.deb` package is installed, the package will *not* create the APT source list file. However, Tails installs the package before the user has a chance to create this file, *and* if the user doesn't enter an Administration password in the Tails greeter, they won't have permission to create the file. So we're going to make the Persistence software create the file for us.

```sh
cd /live/persistence/TailsData_unlocked
sudo mkdir -p etc/default
sudo touch etc/default/keybase
sudo chmod -R go=u-w etc
echo '/etc/default source=etc/default,link' | sudo tee -a persistence.conf

cd /etc/default
sudo ln -s /live/persistence/TailsData_unlocked/etc/default/keybase .
```

### 2.4 Install Keybase

At this point we should be able to install the Keybase package.

```sh
sudo apt install keybase
```

Remember that the package is being downloaded through the Tor network, so it's going to take a bit longer than you may be used to. When the installation is complete, a window will "slide down" from the top of the screen, asking if you want to install Keybase every time Tails boots. You should say yes, obviously.

### 2.5 Set up persistent Keybase directories

The Keybase stores files in three different directories, whose contents need to be kept across reboots. We're going to make these directories persistent.

First create the three directories:

```sh
cd /live/persistence/TailsData_unlocked
sudo mkdir -p keybase/{cache,config,localshare}
sudo chown -R amnesia: keybase
```

Then edit the `persistence.conf` file, and add the following lines to the end of the file:

```sh
sudo tee -a persistence.conf << EOF
/home/amnesia/.cache/keybase        source=keybase/cache
/home/amnesia/.config/keybase       source=keybase/config
/home/amnesia/.local/share/keybase  source=keybase/localshare
EOF
```

### 2.6 Reboot

At this point, we should reboot the system and make sure Tails starts up the way we expect it to.

```sh
sudo reboot
```

## 3 Using the client

When booting Tails, when you get to the Tails greeter, be sure to unlock your Persistent Volume, and (for now) set an Administration Password.

When the desktop appears, watch the messages in the boxes which "slide down" from the top of the screen. They will normally report the following:

* Installing your additional software from persistent storage

* Synchronizing the system's clock

* Tor is ready

* Additional software installed successfully

### 3.1 Post-setup checklist

If you've just finished setting things up and is this is the first time you've rebooted Tails, you should check the following items to be sure that Tails is configuring things correctly:

* **`ls -l /etc/apt/sources.list.d/`**

    * `keybase.list` should exist as a symlink pointing to `/lib/live/mount/persistence/TailsData_unlocked/sources.list.d/keybase.list`
    
* **`ls -l /etc/default/`**

    * `keybase` should exist as a symlink pointing to `/lib/live/mount/persistence/TailsData_unlocked/etc/default/keybase`

* **`mount | grep keybase`**
* You should see three lines, starting with "`/dev/maper/TailsData_unlocked on`", mounted on each of these directories:
        * `/home/amnesia/.cache/keybase`
        * `/home/amnesia/.config/keybase`
        * `/home/amnesia/.local/share/keybase`
    
* **`apt show keybase`**

    * Should show information about the installed Keybase client.
    * This information should contain the following lines:
        * `Package: keybase`
        * `Version:` with something newer than `4.3.0-20190812143918.f8de90a10f`
        * `APT-Sources: tor+http://prrelease.keybase.io/deb stable/main amd64 Packages`

* The "Applications -> Internet" menu should have an entry for the Keybase app.

### 3.2 Configure "tor mode"

By default, the Keybase client expects to be able to connect directly to the Keybase servers. Tails configures the system so that all traffic *not* going through Tor is blocked, so this won't work.

To fix this, we need to configure the Keybase client to send all of its network traffic through Tor.

```sh
keybase config set proxy :9050
keybase config set proxy-type socks
keybase config set tor.mode leaky
```

Note that the three persistent directories *must* be active in order for this setting to be remembered, which is why we've waited until now to do this. [Documentation about Tor mode](https://keybase.io/docs/command_line/tor)

### 3.3 Start Keybase

The moment we've all been waiting for...

```sh
run_keybase
```

Assuming all goes well, this will take a few seconds to start things up, and then you'll see the "Crypto Squirrel" message. Then, a few seconds later, the Keybase GUI should pop up, and a Keybase widget should appear in the menu bar at the top of the screen.


> Note: Be **very sure** that your Persistent Volume is set up and working correctly before signing into Keybase, *especially* if you're creating a new Keybase user for this. Remember that Keybase usernames cannot be re-used.

---

Originally written by [John Simpson][] (10-AUG-2019)

Edited for modern Tails 4.12 by [Ricardo Balk][] (07-NOV-2020)

[Tails]: https://tails.boum.org "Website of Tails, The Amnesic Incognito Live System"
[John Simpson]: https://keybase.io/jms1 "Keybase profile of John Simpson"
[Ricardo Balk]: https://keybase.io/ricardobalk "Keybase profile of Ricardo Balk"