# Building / Developing

To build or develop my website, I recommend using Docker, as this prevents you from installing and configuring many things. I just like to get shit done in a fast and effective way. Don't blame me for that. :man_shrugging:

## Development

To start developing, run the following commands:

1) Build the Docker image

```sh
docker build --target dev -t ricardobalk/website:dev . && docker run -it --rm -p 8080:8080 -v "$(pwd)/src:/home/node/app/src" ricardobalk/website:dev "dev"
```

2) Run the image as a container

```sh
docker run -it --rm -p 8080:8080 -v "$(pwd)/src:/home/node/app/src" ricardobalk/website:dev "dev"
```

This will start a container that will run the website on port 8080. You can now open the website in your browser by going to `http://localhost:8080`. You can now start developing. :tada:

3) Remove the image

```sh
docker image rm ricardobalk/website:dev
```

This will remove the image. Removal of the containers is not necessary because the `--rm` flag was used. However, if there still are containers that depend on the image, Docker will notify you :wink:

### Development with Docker Compose

Docker Compose:

```sh
docker-compose -f docker-compose.dev.yml up --build
```

## Production build

To run a production build, run the following commands:

1) Build the Docker image

```sh
docker build --no-cache -t ricardobalk/website:latest .
```

`--no-cache` is used to ensure that the latest version of the image is used. This is not necessary, but it's a good practice.

2) Run the image as a container

```sh
docker run -it --rm -p 8080:8080 ricardobalk/website:latest
```

This will start a container that will run the website on port 8080. You can now open the website in your browser by going to `http://localhost:8080`. You can now set up a reverse proxy to make it available publicly, e.g. with Apache, nginx or Caddy :tada:

3) Remove the image

```sh
docker image rm ricardobalk/website:latest
```

This will remove the image. Removal of the containers is not necessary because the `--rm` flag was used. However, if there still are containers that depend on the image, Docker will notify you :wink:

### Production build with Docker Compose

Docker Compose:

```sh
docker-compose -f docker-compose.prod.yml up --build
```

## Bare production build

The Dockerfile is a multi-stage build, which means that the final image is very small. It is also possible to use the `release-base` stage to build a production build without nginx. This is useful if you want to use a different web server or if you want to extract the static files to use them in another way. Please take a look at the [Dockerfile](../../Dockerfile) to see how it works.

## Doing the same without Docker...

Don't want to use Docker and prefer to use a local installation? Read the [Slowstart Guide](./without-docker.md). But be careful, zombies might come after you.