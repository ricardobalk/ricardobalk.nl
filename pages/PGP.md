---
layout: post
title: "PGP Signatures"
excerpt: "Information about my PGP signatures"
category: "information"
tags: ["pgp", "email"]
date: 2019-01-01 08:00:00 +00:00
permalink: /about/pgp/
stylesheet: posts
---

I sign all my e-mail messages and code commits on GitHub with PGP.

# Usage dependent keys

I use different key pairs depending on usage. I am using the following keys:

- General &mdash; `C637 18C6`. Key used for general things and SSH connections. Also used to sign my other keys.
- Email messages &mdash; Two keys, both could be used to send me encrypted emails.
  - `4ACF 7879` for those supporting modern Curve 25519.
  - `29E8 C4FD`, the 4096 bit RSA equivalent for those who don't support Curve 25519.
- Code Signing &mdash; `2E85 E909`. This key is used for my Git commits. (`git log --show-signatures` will show it)

# How to import my keys

This depends on the operating system you're using.

## Windows

On Windows, use gpg4win.

## macOS

On macOS, you could use the GPGTools for Mac package to verify my messages.

## Linux

On Linux, you could use the following commands:

```sh
gpg --keyserver 'hkps://hkps.pool.sks-keyservers.net' --recv-keys \
'BE7C4481E0566291B494D2A16FB4A124C63718C6' '0B470785C770F61620D80482049F02554ACF7879' \
'743032F24DF7783172CB469628A74F0729E8C4FD' 'D494FBB8A982455D4D04A38BE1B805352E85E909'
gpg --list-sigs 'Ricardo Balk'
```

Alternatively,

```sh
curl -so- 'https://keybase.io/ellipticcurv3/pgp_keys.asc' | gpg --import
gpg --list-sigs 'Ricardo Balk'
```

> Note: This will skip importing the (RSA) key `29E8 C4FD` as I don't have that one on my Keybase profile.

## SSH connections

I use my GPG key `C637 18C6` for SSH connections as well. To convert my public key to an SSH compatible key, issue the following command:

```sh
gpg --export-ssh-key 'BE7C4481E0566291B494D2A16FB4A124C63718C6'
```

This public key could then be added to the authorized hosts and used to connect to your server(s).

# How to verify received content (e.g. e-mail messages)

My e-mail has either an attachment containing a signature (signature.asc) or you could check the e-mail headers.

## Windows

gpg4win could be used to check my signature.

## macOS

GPG Tools for Mac automatically shows the signature in Apple Mail.

## Linux

In Linux, one would use the `gpg -d` command.

Either with a file:

```sh
gpg -d /path/to/signature.asc
```

or by just using `gpg -d`, pasting the signature, and issuing Ctrl-D.

# Extra things you could do

## Signing my keys with yours

If you know me in person, I'd appreciate if you'd sign my key with yours. Please sign my general key (`C637 18C6`). This is sufficient &mdash; as I used my general key to sign my other keys.

```sh
gpg --ask-cert-level --sign-key BE7C4481E0566291B494D2A16FB4A124C63718C6 --sign-with <Your Key ID>
```

