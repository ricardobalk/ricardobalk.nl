#!/bin/sh
set -eu

cd "$(dirname "$0")"
if [ -e .env ]; then
    printf 'Reusing .devcontainer/.env and skipping Docker socket detection.\n'
    exit 0
fi

socket=${DOCKER_SOCKET_PATH:-$(sh ./retrieve-docker-socket-path.sh)}
printf 'Checking the container-side group for Docker socket %s ...\n' "$socket"
# Rootless engines can map the socket's group to a different ID inside the container.
gid=$(docker run --rm --network none --mount "type=bind,src=$socket,dst=/socket,readonly" \
    debian:bookworm-slim stat -c %g /socket)

set -C
printf 'DOCKER_SOCKET_PATH=%s\nDOCKER_SOCKET_GID=%s\n' "$socket" "$gid" > .env
printf 'Saved the socket path and group ID %s in .devcontainer/.env.\n' "$gid"
