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

**b) Using Docker Compose**

You can use [Docker Compose][docker-compose] to start developing right away:

```sh
docker-compose -f docker-compose.dev.yml up
```

**c) Using Docker (Method 1, building the image)**
You can use [Docker][docker] to start developing right away:

  1. Build image: `docker build --no-cache -t ricardobalk/website:latest --target development -f Dockerfile .`
  2. Run image in container: `docker run --rm -it -p 3000:3000 -v "$(pwd):/home/node/app:cached" ricardobalk/website:latest`
  
**d) Using Docker (Method 2, without building the image)**

You can even use Docker without building the image from the Dockerfile. Just run the following command:

```sh
docker run -it --rm -v "$(pwd):/app" -p 3000:3000 -w /app node:24.22.3-alpine sh -c "npm install -g corepack@0.36.0 && corepack enable && pnpm install && pnpm dev"
```


> Tip: Take a look at the `Dockerfile` and `docker-compose.*.yml` to see how the containers are set up. The dockerfile has a multi-stage build, to keep the final image as small as possible.

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

## Dependency maintenance

Use Node.js 24.22.3 LTS, Corepack 0.36.0, and the pnpm version pinned in
`package.json`. Enable Corepack before running `pnpm install --frozen-lockfile`.
The TypeScript aliases are intentional: native TypeScript 7 checks TypeScript
modules, while TypeScript 6 provides the compiler API used by `vue-tsc`.

GitHub Actions runs both typechecks, the production build, static generation,
and the production Docker build.

Dependabot checks npm/pnpm, Docker, and GitHub Actions weekly. Minor and patch
updates are grouped per ecosystem; major updates remain separate. See the
[November 2026 dependency review](docs/dependency-review-2026-11.md) for the
older PR inventory and outstanding upstream security advisories.

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
