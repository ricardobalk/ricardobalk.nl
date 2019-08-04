# Installing Docker

These are additional instructions on how to install Docker.

- Make sure you're running Linux or macOS
- Make sure you have `sudo`

>  Note: Some of the commands may differ across different Linux distros (e.g. `yum` instead of `apt`, etc.)

## Step 1: Setting up Docker

First thing to do is to install Docker and Compose

```sh
sudo apt install docker.io docker-compose
```

## Step 2: Add current user to the Docker group

Then, add your current user to the `docker` group

```sh
sudo gpasswd -a $USER docker && newgrp docker
```

## Step 3: Try to run hello-world

After that, try to run the `hello-world` docker-image to test if all permissions are set up correctly and your Docker installation works

```sh
docker run hello-world
```

```
Hello from Docker!
This message shows that your installation appears to be working correctly.

(...)
```

Done. That's it.