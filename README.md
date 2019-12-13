# Ricardo's Personal Website

This repository contains my personal website. It's made with VuePress, ZURB Foundation and Docker.

- VuePress provides a way to transform Markdown files to HTML.
- Zurb Foundation is used for its 12 column grid layout.

Under the hood, VuePress uses things like Webpack and the Vue Router, which made it possible to split my website into several Vue components working with each other.

## Running inside Docker

To build and serve my website, I recommend using Docker and Docker Compose - as this prevents you from having to install and configure a lot of things.

**BUILD**

```sh
docker-compose up --build
```

This will initiate a full build of my website and place the output in `dist/`. Serve this directory with your server of choice.

**DEV SERVER**

```sh
docker-compose -f docker-compose-dev.yml up --build
```

This will launch a dev server which you could use to tinker and try things. After a while, visit http://localhost:8080/. You're good to go.

**REMOVAL**

```sh
docker-compose down
docker-compose -f docker-compose-dev.yml down    # If you used the dev server
```

---

## Running without Docker

Don't want to use Docker and prefer to use local installation? Here are the instructions.

**INSTALL**

Make sure that you cloned this repository to a directory of choice and you have already installed npm. Then, open a console and start it.

```sh
npm install
```

Then, you could either start the development server or build the complete site.

**DEV**

- Builds the website and spins up a web server at `localhost:8080`

```sh
npm run dev
```

**BUILD**

- Builds the website and outputs it to `dist/`, where you can point an own server.

```sh
npm run build
```


**BUILD &amp; CLEAN**

- Builds the website and cleans up `node_modules/`, so that you can focus on serving `dist/`.

```sh
npm run cleanbuild
```

**RESET**

- Use this when everything breaks, it deletes `node_modules/`, deletes `dist/` and runs `npm install`.

```sh
npm run reset
```
