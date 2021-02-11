# Ricardo's Personal Website

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/57a0cccc1cdf4086817954a123034043)](https://www.codacy.com/manual/ricardobalk/www?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ricardobalk/www&amp;utm_campaign=Badge_Grade) [![StyleCI](https://github.styleci.io/repos/200295886/shield?branch=develop&style=flat)](https://github.styleci.io/repos/200295886) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fricardobalk%2Fwww.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fricardobalk%2Fwww?ref=badge_shield)

This repository contains my personal website. It's made with VuePress, ZURB Foundation and Docker.

- VuePress provides a way to transform Markdown files to HTML.
- Zurb Foundation is used for its 12 column grid layout.

Under the hood, VuePress uses things like Webpack and the Vue Router, which makes it possible to split the website into several components, enhancing overall maintainability.

---

## Building / Developing

To build or develop my website, I recommend using Docker, as this prevents you from installing and configuring many things.

## 1) BUILD DOCKER IMAGE

The first step is to build the _Docker image_ according to the _Dockerfile_ recipe found in the root directory of this repository.

## 2) Run Docker image in a container.

The second step is to run the freshly created _image_ in a _container_. You could choose to run a dev server for development purposes, or to build my website.

**DEV SERVER**

```sh
docker build -t ricardobalk/website .
```

```sh
docker run --rm \
  --mount type=bind,source="$(pwd)"/src/,target=/home/node/app/src/,readonly \
  -p 8080:8080 \
  ricardobalk/website "dev"
```

This will launch a dev server which you could use to tinker and try things. After a while, visit http://localhost:8080/. You're good to go.

**BUILD**

```sh
mkdir -p ./dist/
```

```sh
docker build -t ricardobalk/website .
```

```sh
docker run --rm \
  --mount type=bind,source="$(pwd)"/src/,target=/home/node/app/src/,readonly \
  --mount type=bind,source="$(pwd)"/dist/,target=/home/node/app/dist/ \
  ricardobalk/website "build"
```

This will build the website and place the result in `dist/`. You can use your own server to serve this directory.


## 3) Deploy

Although I don't expect **you** to deploy **my** website, here are the instructions given as a reference.

**DEPLOY**

Build the website using the instructions above. After that, use `rsync` to push the contents of `dist/` to your server.

```sh
rsync -ru dist/. ricardobalk.nl:/var/www/ricardobalk.nl --delete
```

That was easy! Build and upload. No need for heavy back-ends and complex databases. This is possible because we're working with a JAMstack website. :tada:

P.S. If you're not using Linux, macOS or WSL, you could also upload the contents of `dist/` via (S)FTP. I'll just stick with the `rsync` approach, because I like to get shit done and save time. :+1:

**REMOVAL**

```sh
docker image rm ricardobalk/website && docker image prune
```

This will remove the image. Removal of the containers is not necessary because the `--rm` flag was used.

## Doing the same without Docker...

Don't want to use Docker and prefer to use a local installation? Read the [Slowstart Guide](./SLOWSTART.md).

---

# License

This website including all blog articles are licenced under the GPL 3.0+ license.

Please note that this product includes software and libraries from 3rd parties which could have a different license. See the below image for more information.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fricardobalk%2Fwww.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fricardobalk%2Fwww?ref=badge_large)
