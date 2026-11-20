# Getting started and contributing

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

VSCode connects to a dedicated Debian container built from `.devcontainer/Dockerfile.devcontainer`. Node.js, pnpm, and Nuxt run in the separate `node` service, built from `.devcontainer/Dockerfile.nuxt`. Both containers share the source code, installed dependencies, and generated Nuxt types. Compose installs dependencies and starts the dev server automatically at http://localhost:3000.

The image build downloads the locked packages through the build proxy when configured. Docker caches the pnpm store across builds and includes it with the registry metadata in the development image. Source edits reuse the dependency layer. On startup, pnpm checks the mounted lockfile and installs from the image cache. Named volumes keep `node_modules` and Nuxt's compilation cache across restarts.

VS Code keeps installed extensions in the `vscode_extensions` volume across editor container rebuilds.

Run Node.js commands in the `node` service. From a terminal on the host:

```sh
docker compose -f docker-compose.dev.yml exec node pnpm typecheck
docker compose -f docker-compose.dev.yml logs -f node
```

To run commands through VSCode, use **Dev Containers: Attach to Running Container** in a second window and select the `node` container. After changing the container configuration, use **Dev Containers: Rebuild Container**.

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

## Contributing

Create a branch from `main`. For code changes, run `pnpm typecheck` and `pnpm typecheck:native`. Open a pull request against `main` describing the change and how you checked it.

[docker-compose]: https://docs.docker.com/compose/
[docker]: https://www.docker.com/
[official Nuxt deployment documentation]: https://nuxt.com/docs/4.x/getting-started/deployment
[online-dev-env-github-codespaces]: https://codespaces.new/ricardobalk/personal-website
[online-dev-env-stackblitz]: https://stackblitz.com/github/ricardobalk/personal-website
[online-dev-env-vscode-web]: https://vscode.dev/github/ricardobalk/personal-website
[vscode-remote-containers]: https://code.visualstudio.com/docs/remote/containers
[vscode]: https://code.visualstudio.com/
