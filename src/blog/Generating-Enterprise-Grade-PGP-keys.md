---
date: 2018-10-02 08:00:00 +00:00
excerpt: "In this article, I will guide through the generation of Enterprise-grade PGP keys."
category: "devops"
tags: ["pgp", "gpg", "encryption"]
images:
  featured:
     filename: "blog/terminal-lockpad.png"
     description: "A lockpad shown on a terminal-style computer background"
  hero:
     filename: "blog/terminal-lockpad.png"
     description: "A lockpad shown on a terminal-style computer background"
---

# Generating Enterprise-grade PGP Keys

In this article, I will guide through the generation of Enterprise-grade PGP keys.


Since companies within the European Union are obliged to conform to the General Data Protection Regulation (GDPR), I am getting messages from many people and companies about the best way to create enterprise grade PGP-keys.

### What is PGP?

For those that are not familiar with PGP yet, I’ll explain in short what PGP is.

PGP is an abbreviation of ‘Pretty Good Privacy’, a piece of encryption software originally written by Phil Zimmerman in 1991\. It is used to encrypt/sign files and e-mail messages, and is used extensively by software developers and (*nix) system administrators.

### Keys, subkeys and their usage flags

An enterprise-grade PGP key generally consists of a master key pair with different subkeys.

Below, you’ll see my PGP key, with usage flags:

`cv3% gpg -k 'BE7C4481E0566291B494D2A16FB4A124C63718C6'`

```
pub   ed25519 2018-01-01 [C] [expires: 2050-01-01]
      BE7C4481E0566291B494D2A16FB4A124C63718C6
uid           [ultimate] ellipticcurv3 (Modern)
sub   ed25519 2018-01-01 [S] [expires: 2023-01-01]
sub   ed25519 2018-01-01 [A] [expires: 2023-01-01]
sub   cv25519 2018-01-01 [E] [expires: 2023-01-01]
```

With PGP it is possible to generate subkeys with specific capabilities, indicated by their _usage flags_. The usage flags are indicated by C, S, E and A.

<span class="graf-dropCap">C</span>ertify

The C means certify and allows a particular key, usually the master key, to _certify_ other keys to be part of the key. It ‘signs’ subkeys that are added to the key ring.

<span class="graf-dropCap">S</span>ign

The S stands for sign, and is used to create a key capable of signing arbitrary data.

<span class="graf-dropCap">E</span>ncrypt

The E means encrypt, and is used by keys that are capable of decryption of encrypted data.

<span class="graf-dropCap">A</span>uthenticate

The A means authenticate, and is used to function as authentication on systems, like using it to log on to a server, the same way as an SSH key would do.

I personally like to refer to a key with such subkeys as _a full-featured ‘CSEA-key’_.


### Guide

Before you follow this textual guide, be sure to have some basic knowledge for using the command line.

So, how do you create such a key?

### Step 1: Installing the prerequisites

During this guide, you might want to freeze the system clock to a certain date and time, so that the exact moment of key generation is hidden. A frozen system clock could be obtained by using a small application called _faketime_.

On Ubuntu, it is possible to install _faketime_ using apt.

`sudo apt install faketime`

(on macOS, you should use `brew install libfaketime` 😉)

### Step 2: Starting a fake bash shell with frozen time

Now you have the package _faketime_ installed, it is time to start a Bash shell with a frozen system clock.

`faketime -f 2018-08-01 12:00:00 bash`

That was easy. Now let’s be sure that bash calculates time in UTC.

`export TZ='UTC'`

And finally check if the time is frozen correctly…

`date`

It should output something like:

`Wed Aug 1 12:00:00 UTC 2018`

… assuming that you followed the exact steps as written.

### Step 3: Creating a PGP master key

The next step is to create a master key pair using the expert mode.

`gpg2 --expert --full-gen-key`

We’re going to generate a master key pair first, which could only **C**ertify subkeys.

```
gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
(1) RSA and RSA (default)
(2) DSA and Elgamal
(3) DSA (sign only)
(4) RSA (sign only)
(7) DSA (set your own capabilities)
(8) RSA (set your own capabilities)
(9) ECC and ECC
(10) ECC (sign only)
**(11) ECC (set your own capabilities)**
(13) Existing key
Your selection? **11**
```

Choose `11` for the master key pair, which will generate a modern, elliptic curve key pair. You will be able to set your own capabilities (that means, choosing the usage flags).

```
Possible actions for a ECDSA/EdDSA key: Sign Certify Authenticate 
**Current allowed actions: Sign Certify** 

   (S) Toggle the sign capability
   (A) Toggle the authenticate capability
   (Q) Finished
```

Now, gnupg _suggests_ you to use both **Sign** and **Certify** capabilities for the master key pair but at this point, you actually want to generate a master key pair with the **Certify** flag _only._ We’ll generate a subkey with signing capabilities later on in this guide.

Toggle the Signature flag off by hitting the letter **S** and **return**. Now, gnupg should come up with a new overview.

```
Possible actions for a ECDSA/EdDSA key: Sign Certify Authenticate 
**Current allowed actions: Certify** 

   (S) Toggle the sign capability
   (A) Toggle the authenticate capability
   **(Q) Finished**
```

That looks good. Press `**Q**` and hit **return**.

The next thing that is going to be asked is which curve you would like to choose for this newly generated master key pair.

```
Please select which elliptic curve you want:
 **(1) Curve 25519**
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
**Your selection? 1**
```

The best option is Curve 25519 but keep in mind that this is available only on modern implementations of gnupg.

After choosing a curve type, gnupg will ask you how long your master key should be valid. 50 years would be a reasonable time for a master key pair, as the subkeys usually have a shorter time.

```
Please specify how long the key should be valid.
         0 = key does not expire
        = key expires in n days
      w = key expires in n weeks
      m = key expires in n months
      y = key expires in n years
Key is valid for? (0) **50y**
```

Just give **50y**, gnupg will show you the date of expiration.

```
Key expires at Thu Jul 19 12:00:00 2068 UTC
Is this correct? (y/N) **y**
```

If it’s correct, just hit y and return. The next step will be adding a user ID.

```
GnuPG needs to construct a user ID to identify your key.

Real name: John Doe
Email address: 
Comment: example.com/john-doe
You selected this USER-ID:
    "John Doe (example.com/john-doe)"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? **O**
```

Fill in your name. It is possible to fill in an email address as well, but it is not recommended because you will receive a lot of spam email messages when a key containing an email address gets published on a public key server.

A better option is adding a comment, e.g. containing a web address pointing to your personal website. But it is not required at all.

After filling in the user id details, gpg will ask you to provide a passphrase to protect your new master key.

It is recommended to do this, but an empty passphrase will also be accepted.

After choosing a password, the actual master key will be created…

```
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
gpg: key B1981EAEF087FC6A marked as ultimately trusted
gpg: revocation certificate stored as '/home/john/.gnupg/openpgp-revocs.d/28EBEE34E12997B7DD57F811B1981EAEF087FC6A.rev'
public and secret key created and signed.

pub   ed25519 2018-08-01 [C] [expires: 2068-07-19]
      28EBEE34E12997B7DD57F811B1981EAEF087FC6A
uid                      John Doe (example.com/john-doe)
```

That’s it. Great. You’ve just created a bare master key, which can do nothing by itself. The next step is to edit this PGP key and add subkeys with specific capabilities.

### Step 4: Adding subkeys to a master key

We are going to add subkeys. That is possible by using the key ID. In the example above, it is represented by the string `28EBEE34E12997B7DD57F811B1981EAEF087FC6A`

`gpg --expert --edit-key <key id>`

gpg should come up and tell you that the secret key is available. Cool.

```
gpg (GnuPG) 2.2.4; Copyright (C) 2017 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  ed25519/B1981EAEF087FC6A
     created: 2018-08-01  expires: 2068-07-19  usage: C   
     trust: ultimate      validity: ultimate
[ultimate] (1). John Doe (example.com/john-doe)
```

To add a new subkey, we’d use the command `addkey`.

```
gpg> **addkey** 
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
  (10) ECC (sign only)
  (11) ECC (set your own capabilities)
  (12) ECC (encrypt only)
  (13) Existing key
Your selection?
```

Let’s add a signing key. It would be an elliptic curve key, cv25519 algorithm, with an expiry time of 5 years.

```
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
 **(10) ECC (sign only)**
  (11) ECC (set your own capabilities)
  (12) ECC (encrypt only)
  (13) Existing key
Your selection? **10**
```

```
Please select which elliptic curve you want:
 **(1) Curve 25519**
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
Your selection? **1**
```

```
Please specify how long the key should be valid.
         0 = key does not expire
        = key expires in n days
      w = key expires in n weeks
      m = key expires in n months
      y = key expires in n years
Key is valid for? (0) **5y** 
Key expires at Mon Jul 31 12:00:00 2023 UTC
Is this correct? (y/N) **y**
Really create? (y/N) **y**
```

This is done by choosing **10**, **1**, filling in **5y** and confirming it.

Note: It is possible to set up an additional different passphrase for each subkey, it is recommended but not required.

gnupg should now display the key with the new subkey:

```
sec  ed25519/B1981EAEF087FC6A
     created: 2018-08-01  expires: 2068-07-19  usage: C   
     trust: ultimate      validity: ultimate
**ssb  ed25519/8E72B8A9808EFF52
     created: 2018-08-01  expires: 2023-07-31  usage: S** [ultimate] (1). John Doe (example.com/john-doe)
```

Good! Let’s add an encryption key! The same way, except you’ll need to choose **12**, ECC (encrypt only), this time.

```
gpg> **addkey**
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
  (10) ECC (sign only)
  (11) ECC (set your own capabilities)
 **(12) ECC (encrypt only)**
  (13) Existing key
Your selection? **12**
Please select which elliptic curve you want:
 **(1) Curve 25519**
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
Your selection? **1**
Please specify how long the key should be valid.
         0 = key does not expire
        = key expires in n days
      w = key expires in n weeks
      m = key expires in n months
      y = key expires in n years
Key is valid for? (0) **5y**
Key expires at Mon Jul 31 12:00:00 2023 UTC
Is this correct? (y/N) **y**
Really create? (y/N) **y**
```

When that’s done, gpg should show you a key with an encryption subkey as well… Bam!

```
sec  ed25519/B1981EAEF087FC6A
     created: 2018-08-01  expires: 2068-07-19  usage: C   
     trust: ultimate      validity: ultimate
ssb  ed25519/8E72B8A9808EFF52
     created: 2018-08-01  expires: 2023-07-31  usage: S   
**ssb  cv25519/2073A0C9CB78B17B
     created: 2018-08-01  expires: 2023-07-31  usage: E**   
[ultimate] (1). John Doe (example.com/john-doe)
```

Now the last (but not mandatory) subkey: An authentication subkey.

```
gpg> **addkey**
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
   (7) DSA (set your own capabilities)
   (8) RSA (set your own capabilities)
  (10) ECC (sign only)
 **(11) ECC (set your own capabilities)**
  (12) ECC (encrypt only)
  (13) Existing key
Your selection? **11**
```

… turn **off** the **Sign** flag for this key

```
Possible actions for a ECDSA/EdDSA key: Sign Authenticate 
Current allowed actions: **Sign** 

   **(S) Toggle the sign capability**
   (A) Toggle the authenticate capability
   (Q) Finished

Your selection? **S**
```

… and turn **on** the **Authentication** flag instead

```
Possible actions for a ECDSA/EdDSA key: Sign Authenticate 
Current allowed actions: 

   (S) Toggle the sign capability
   **(A) Toggle the authenticate capability**
   (Q) Finished

Your selection? **A**

Possible actions for a ECDSA/EdDSA key: Sign Authenticate 
Current allowed actions: **Authenticate**

   (S) Toggle the sign capability
   (A) Toggle the authenticate capability
   **(Q) Finished**

Your selection? **Q**
```

and… as usual…

```
Please select which elliptic curve you want:
 **(1) Curve 25519**
   (3) NIST P-256
   (4) NIST P-384
   (5) NIST P-521
   (6) Brainpool P-256
   (7) Brainpool P-384
   (8) Brainpool P-512
   (9) secp256k1
Your selection? **1**
Please specify how long the key should be valid.
         0 = key does not expire
        = key expires in n days
      w = key expires in n weeks
      m = key expires in n months
      y = key expires in n years
Key is valid for? (0) **5y**
Key expires at Mon Jul 31 12:00:00 2023 UTC
Is this correct? (y/N) **y**
Really create? (y/N) **y**
```

When this is done, your key should look like this:

```
sec  ed25519/B1981EAEF087FC6A
     created: 2018-08-01  expires: 2068-07-19  usage: C
     trust: ultimate      validity: ultimate
**ssb  ed25519/8E72B8A9808EFF52
     created: 2018-08-01  expires: 2023-07-31  usage: S
ssb  cv25519/2073A0C9CB78B17B
     created: 2018-08-01  expires: 2023-07-31  usage: E
ssb  ed25519/A59C74CF220EF16D
     created: 2018-08-01  expires: 2023-07-31  usage: A** 
[ultimate] (1). John Doe (example.com/john-doe)

gpg> **save**
```

Save it and you’re done! Congratulations with your new PGP key!

_Note: Don’t forget to exit the shell to unfreeze the time and to make a backup of your awesome PGP key!_
