[![Codacy Badge](https://api.codacy.com/project/badge/Grade/57a0cccc1cdf4086817954a123034043)](https://www.codacy.com/manual/ricardobalk/www?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ricardobalk/www&amp;utm_campaign=Badge_Grade) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fricardobalk%2Fwww.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fricardobalk%2Fwww?ref=badge_shield)

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
docker build -t ricardobalk/www .
docker run --rm \
--mount type=bind,source="$(pwd)"/src/,target=/home/node/www/src/,readonly \
-p 8080:8080 \
ricardobalk/www "dev"
```

This will launch a dev server which you could use to tinker and try things. After a while, visit http://localhost:8080/. You're good to go.

**BUILD**

```sh
mkdir -p ./dist/
docker build -t ricardobalk/www .
docker run --rm \
--mount type=bind,source="$(pwd)"/src/,target=/home/node/www/src/,readonly \
--mount type=bind,source="$(pwd)"/dist/,target=/home/node/www/dist/ \
ricardobalk/www "build"
```

This will build the website and place the result in `dist/`. You can use your own server to serve this directory.

**DEPLOY**

Build the website using the instructions above. After that, use `rsync` to push the contents of `dist/` to your server.

```sh
rsync -ru dist/. ricardobalk.nl:/var/www/ricardobalk.nl --delete
```

**REMOVAL**

```sh
docker image rm ricardobalk/www && docker image prune
```

This will remove the image. Removal of the containers is not necessary because the `--rm` flag was used.

**WITHOUT DOCKER**

Don't want to use Docker and prefer to use local installation? Read the [Slowstart Guide](./SLOWSTART.md).

---

# License

This website including all blog articles are licenced under the GPL 3.0+ license.

Please note that this product includes software and libraries from 3rd parties which could have a different license. See the below image for more information.

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fricardobalk%2Fwww.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fricardobalk%2Fwww?ref=badge_large)