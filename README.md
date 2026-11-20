# Ricardo's Personal Website

[![Sponsor via GitHub Sponsors](https://img.shields.io/badge/support%20me%20via%20GitHub%20Sponsors%20%E2%9D%A4-%2300bb00?logo=github)](https://github.com/sponsors/ricardobalk)

> :sparkles: **Powered by Nuxt 4** :sparkles:

**What is this?**

**TL;DR:** This is the source code of [my personal website][], a JAMstack website made with Nuxt 4, TypeScript, TailwindCSS and a lot of coffee. :coffee:

- **Nuxt 4** is a framework for creating modern web applications. It's built on top of Vue 3 and Vite, one of the fastest and most lightweight bundlers out there.
- **TypeScript** is used for its logic. It improves the developer experience and prevents the number of bugs in the application during development.
- **TailwindCSS** is used for styling the website. It's a utility-first CSS framework for rapidly prototyping your application.
- **Nuxt Content** is used for managing the content of the website, such as the blog posts.
- **Vercel** is used for hosting the website. It's a cloud platform for static sites and serverless functions.

---

## Getting started

For starting the dev server, you have multiple options:

**1. Using an online development environment (most easy option)**

You can use an online development environment to start developing right away. The benefits of using an online development environment is that you don't need to install anything locally on your machine. Just start hacking right away. Some of the online development environments I recommend are:

  - [Stackblitz][online-dev-env-stackblitz]
  - [GitHub Codespaces][online-dev-env-github-codespaces]
  - [VSCode on the web][online-dev-env-vscode-web] 

**2. Using a local, containerized development environment (my preferred option)**

If you're a more serious developer, you can use a local, containerized development environment. 

The benefits of using a local, containerized development environment is that you don't need to install the right versions of Node.js, pnpm, Git, etc as it's all included, configured and ready to use in the container.

There are various ways to use a local, containerized development environment with this starter kit:

**a) Using VSCode Remote Containers / Dev Containers**

You can use [VSCode][vscode] with the [Remote Containers / Dev Containers][vscode-remote-containers] extension to start developing right away. With the right extensions installed, just open the project in VSCode and it will ask you if you want to open it in a container.

VSCode connects to a dedicated Debian container built from `.devcontainer/Dockerfile.devcontainer`.
Node.js, pnpm, and Nuxt run in the separate `node` service, built from
`.devcontainer/Dockerfile.nuxt`. Both containers share the source code, installed dependencies,
and generated Nuxt types. Compose installs dependencies and starts the dev server
automatically at http://localhost:3000.

Run Node.js commands in the `node` service. From a terminal on the host:

```sh
docker compose -f docker-compose.dev.yml exec node pnpm typecheck
docker compose -f docker-compose.dev.yml logs -f node
```

To run commands through VSCode, use **Dev Containers: Attach to Running Container**
in a second window and select the `node` container. After changing the container
configuration, use **Dev Containers: Rebuild Container**.

**b) Using Docker Compose**

You can use [Docker Compose][docker-compose] to start developing right away:

```sh
docker-compose -f docker-compose.dev.yml up
```

**c) Using Docker (Method 1, building the image)**
You can use [Docker][docker] to start developing right away:

  1. Build image: `docker build --no-cache -t ricardobalk/website:latest --target development -f .devcontainer/Dockerfile.nuxt .`
  2. Run image in container: `docker run --rm -it -p 3000:3000 -v "$(pwd):/home/node/app:cached" ricardobalk/website:latest`
  
**d) Using Docker (Method 2, without building the image)**

You can even use Docker without building the image from the Dockerfile. Just run the following command:

```sh
docker run -it --rm -e NUXT_TELEMETRY_DISABLED=1 -e DO_NOT_TRACK=1 -v "$(pwd):/app" -p 3000:3000 -w /app node:26.13.1-alpine sh -c "npm install -g corepack@0.36.0 && corepack enable && pnpm install && pnpm dev"
```


> Tip: `.devcontainer/Dockerfile.devcontainer` defines the editor environment, and `.devcontainer/Dockerfile.nuxt` contains only the stages needed to run Nuxt in development. The root `Dockerfile` retains the complete multi-stage build, including static generation and the production Nginx image.

**3. Using a local Node.js installation (when your machine has Node.js)**

You can also use a local Node.js installation. 

  - `pnpm install` to install the dependencies
  - `pnpm dev` to start the development server on http://localhost:3000
  - `pnpm build` to build the application for production
  - `pnpm start` to start the production server
  - `pnpm typecheck` to type-check Vue single-file components
  - `pnpm typecheck:native` to type-check TypeScript modules with TypeScript 7
  - or `pnpm generate` to generate the application for static hosting

See the [official Nuxt deployment documentation][] for more details.

## Project structure

The app follows Nuxt's route and layout conventions. Components are grouped by
the pages they serve, with shared site and UI components alongside them:

```text
app/
  pages/              Routes for home, blog, and content pages
  layouts/            Page layouts
  components/
    home/             Home sections, including About and contact details
    blog/             Article cards, overview, and author details
    site/             Header, footer, navigation, and theme toggle
    ui/               Shared links, icons, and form controls
  data/               Author, category, and navigation data
  utils/              Author and category lookup helpers
  types/              Shared article, link, and navigation types
content/              Markdown pages and blog articles
```

Nuxt adds the directory name to component names: `home/Hero.vue` becomes
`HomeHero`, and `ui/WarningBanner.vue` becomes `UiWarningBanner`. These names
also work in Markdown components, such as `:HomeHero` and `::UiWarningBanner`.
Keep shared TypeScript types in `app/types` rather than importing Vue components
for their types.

## License

[ISC License](LICENSE)

<!-- Links used in the document -->
[docker-compose]: https://docs.docker.com/compose/
[docker]: https://www.docker.com/
[official Nuxt deployment documentation]: https://nuxt.com/docs/4.x/getting-started/deployment
[online-dev-env-github-codespaces]: http://github.dev/ricardobalk/ricardobalk.nl
[online-dev-env-stackblitz]: https://stackblitz.com/github/ricardobalk/ricardobalk.nl
[online-dev-env-vscode-web]: https://vscode.dev/github/ricardobalk/ricardobalk.nl
[TailwindCSS documentation]: https://tailwindcss.com/docs
[vscode-remote-containers]: https://code.visualstudio.com/docs/remote/containers
[vscode]: https://code.visualstudio.com/
