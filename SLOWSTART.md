# Slowstart Guide

Here's the slowstart guide, for when you don't have Docker or just like to do things slowly.

**PREREQUISITES**

Make sure you have installed Node and are using a stable version.

```sh
npm install n -g && n stable  # Switches to a stable version of nodejs
```

---

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