---
type: guide
date: 2018-10-20 09:00:00 +00:00
lang: en-GB
excerpt: Learn how to to create an RTMP Multiplexer with nginx so that you're able to stream video content to different servers simultaneously...
category: "Multimedia"
tags: ["linux", "nginx", "rtmp", "livestreaming", "multiplexer"]
references:
  - https://www.vultr.com/docs/setup-nginx-rtmp-on-ubuntu-14-04
  - https://obsproject.com/forum/resources/how-to-set-up-your-own-private-rtmp-server-using-nginx.50/
images:
  featured:
    filename: "live.webp"
    description: "Sign showing that a (broadcast) transmission went live"
  hero:
    path: "/assets/img/content/blog/live.webp"
    description: "Sign showing that a (broadcast) transmission went live"
permalink: /guides/rtmp-multiplexer-nginx/
---

# Setting up an RTMP Multiplexer with Nginx

Live streaming your video content is well-known among gamers, journalists, education entities and the entertainment industry.

You might already even been streaming to a particular platform (e.g. YouTube, Twitch, IBM Video). Did you know that you could stream your content to multiple platforms simultaneously? This is called multiplexing.

With multiplexing, you send your stream to one device, which, in turn, will send the stream to multiple destinations (live streaming platforms) simultaneously. It only takes an online device with Linux, e.g. a VPS at DigitalOcean or a Raspberry Pi.

Install some stuff, configure some stuff, go live. Here's how to do it.

## Step 1: Create a working directory

```sh
mkdir ~/nginx-rtmp-multiplexer && cd $_
```

## Step 2: Install required packages

```sh
sudo apt-get install -y build-essential libpcre3 libpcre3-dev libssl-dev unzip
```

## Step 3: Download nginx and RTMP module

```sh
wget http://nginx.org/download/nginx-1.7.5.tar.gz https://github.com/arut/nginx-rtmp-module/archive/master.zip
```

## Step 4: Extract the files

```sh
tar -zxvf nginx-1.7.5.tar.gz
unzip master.zip
```

## Step 5: Configuring nginx to include the RTMP module

```sh
cd nginx-1.7.5
./configure --with-http_ssl_module --add-module=../nginx-rtmp-module-master
```

### Quickfix for implicit fallthrough error

In `objs/Makefile`...

Change

```sh
CFLAGS =  -pipe  -O -W -Wall -Wpointer-arith -Wno-unused -Werror -g  -I../nginx-rtmp-module-master
```

to

```sh
CFLAGS =  -pipe  -O -W -Wall -Wpointer-arith -Wno-unused -Wno-implicit-fallthrough -Werror -g  -I../nginx-rtmp-module-master
```

## Step 6: Compile nginx with RTMP module

```sh
make
```

## Step 7: Install nginx

```sh
sudo make install
```

## Step 8: Start nginx at boot

```sh
sudo wget https://raw.github.com/JasonGiedymin/nginx-init-ubuntu/master/nginx -O /etc/init.d/nginx
sudo chmod +x /etc/init.d/nginx
sudo update-rc.d nginx defaults
```

## Step 7: Testing if nginx works

```sh
sudo service nginx start
```

Use `hostname -I` to figure out the server's IP address. Check if the server is available by navigating to `http://<server ip>/`

```sh
sudo service nginx stop
```

## Step 8: Configure RTMP settings

```sh
sudo nano /usr/local/nginx/conf/nginx.conf
```

```
rtmp {
        server {
                listen 1935;
                chunk_size 4096;

                application live {
                        live on;
                        record off;
                }
        }
}
```

## Step 9: Testing

- Send RTMP data to `rtmp://<your server ip>/live`, stream key `test`, e.g. with OBS or Wirecast.

- Use a RTMP capable player like VLC to connect to `rtmp://<your server ip>/live`, stream key is `test`
- It should work.

## Step 10: Pushing incoming RTMP to other servers (e.g. Twitch, YouTube, ...)

You add `push rtmp://<other streaming service rtmp url>/<stream key>` and it should work, like this:

```
rtmp {
        server {
                listen 1935;
                chunk_size 4096;

                application live {
                        live on;
                        record off;
                        push rtmp://<other streaming service rtmp url>/<stream key>;
                }
        }
}
```

## Step 11: Pushing incoming RTMP stream to multiple servers simultaneously (multiplexing)

Just add an additional line (e.g. YouTube). And another one (e.g. Twitch). And another one (e.g. Facebook). And another one (e.g. UStream), quite simple.

```
rtmp {
        server {
                listen 1935;
                chunk_size 4096;

                application live {
                        live on;
                        record off;
                        push rtmp://<other streaming service rtmp url>/<stream key>;
                        push rtmp://<other streaming service rtmp url>/<stream key>;
                }
        }
}
```

## Step 12: Add a firewall

Be sure that you configure your firewall correctly, not allowing anyone else to send an RTMP stream to your server, because they will be able to send that stream to all of your configured servers as well.
