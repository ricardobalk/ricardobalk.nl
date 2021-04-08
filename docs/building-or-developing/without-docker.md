# Slowstart Guide

Here's the slowstart guide, for when you don't have Docker or just like to do things slowly.

**PREREQUISITES**

Make sure you have installed Node and are using a stable version.

```sh
npm install n -g && n stable  # Switches to a stable version of nodejs
npm install -g yarn # Nice to have a stable version of nodejs. Let's use yarn.
```

P.S. Also take a look at the Dockerfile, it shows how to install global npm packages without root privileges ;-)
It basically comes down to setting up the right PATH environment variables.

---

**INSTALL**

Make sure that you cloned this repository to a directory of choice and you have already installed yarn. Then, open a console and start it.

```sh
yarn
```

Then, you could either start the development server or build the complete site.

**DEV**

- Builds the website and spins up a web server at `localhost:8080`

```sh
yarn run dev
```

**BUILD**

- Builds the website and outputs it to `dist/`, where you can point an own server.

```sh
yarn run build
```


**BUILD &amp; CLEAN**

- Builds the website and cleans up `node_modules/`, so that you can focus on serving `dist/`.

```sh
yarn run cleanbuild
```

**RESET**

- Use this when everything breaks, it deletes `node_modules/`, deletes `dist/` and runs `npm install`.

```sh
yarn run reset
```
