[![Codacy Code Quality Badge](https://api.codacy.com/project/badge/Grade/b10397298a3d443783985c67631ec597)](https://www.codacy.com/manual/ellipticcurv3/www?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ellipticcurv3/www&amp;utm_campaign=Badge_Grade) [![Travis CI Build Status](https://travis-ci.com/ellipticcurv3/www.svg?branch=develop)](https://travis-ci.com/ellipticcurv3/www)

# Ricardo's Personal Website

This repository contains my personal website. It's made with VuePress, ZURB Foundation and Docker.

- VuePress provides a way to transform Markdown files to HTML.
- Zurb Foundation is used for its 12 column grid layout.

Under the hood, VuePress uses things like Webpack and the Vue Router, which makes it possible to split the website into several components, enhancing overall maintainability.

---

## Building / Developing

To build or develop my website, I recommend using Docker, as this prevents you from installing and configuring many things.

**DEV SERVER**

```sh
docker build -t ellipticcurv3/www .
docker run --rm \
--mount type=bind,source="$(pwd)"/src/,target=/home/node/www/src/,readonly \
-p 8080:8080 ellipticcurv3/www \
"dev"
```

This will launch a dev server which you could use to tinker and try things. After a while, visit http://localhost:8080/. You're good to go.

**BUILD**

```sh
mkdir -p ./dist/
docker build -t ellipticcurv3/www .
docker run --rm \
--mount type=bind,source="$(pwd)"/src/,target=/home/node/www/src/,readonly \
--mount type=bind,source="$(pwd)"/dist/,target=/home/node/www/dist/ \
ellipticcurv3/www
```

This will build the website and place the result in `dist/`. You can use your own server to serve this directory.

**REMOVAL**

```sh
docker image rm ellipticcurv3/www
```

This will remove the image. Removal of the containers is not necessary because the `--rm` flag was used.

---

## Running without Docker

Don't want to use Docker and prefer to use local installation? Read the [Slowstart Guide](./SLOWSTART.md).
