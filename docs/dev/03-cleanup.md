# Cleanup guide

## Remove the devcontainer and its data

Closing VS Code stops the services and keeps their data for the next session. To remove the environment, close its VS Code window and run these commands **on the host, from the repository root**. Copy anything you need from the Node container’s `/home/node/app/.data` directory before closing it.

```sh
docker compose -f .devcontainer/docker-compose.yml images
docker compose -f .devcontainer/docker-compose.yml down --volumes --rmi local
```

The first command lists the images while the containers still exist. The second removes the editor and Nuxt containers, their unused network, the local Compose images and all five declared volumes (`node_modules`, `nuxt`, `data`, `nuxt_cache` and `vscode_extensions`). If VS Code built a separate `vsc-…` editor image, remove its exact tag from the first command with `docker image rm REPOSITORY:TAG`. [Compose teardown options](https://docs.docker.com/reference/cli/docker/compose/down/)

Older setups may also have project volumes such as `pnpm_store` and `node_cache`. List the leftovers below, then remove any you recognize with `docker volume rm VOLUME_NAME`.

```sh
docker volume ls --filter label=com.docker.compose.project=ricardobalk-website
```

Older checkouts may have `DOCKER_SOCKET_PATH` and `DOCKER_SOCKET_GID` in `.devcontainer/.env`. You can remove those two settings.

The separate `vscode` volume holds server files shared across Dev Containers. Use `docker volume rm vscode` only to clear that shared installation once all containers using it have been removed.

**Optional build cache cleanup.** The pnpm build cache lives in the builder. Choose the command for your engine. It also affects other projects using the same builder or Podman store.

- **Docker Buildx** — `docker buildx prune --all` clears reclaimable cache on the selected builder. [Docker Buildx prune](https://docs.docker.com/reference/cli/docker/buildx/prune/)
- **Podman** — `podman image prune --build-cache` clears persistent build-cache mounts and dangling images. [Podman image prune](https://docs.podman.io/en/latest/markdown/podman-image-prune.1.html)

To start again, open the checkout in VS Code and run **Dev Containers: Reopen in Container**.
