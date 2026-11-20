#!/bin/sh
set -eu

endpoint=${DOCKER_HOST:-}
if [ -z "$endpoint" ]; then
    printf 'DOCKER_HOST is empty. Using the default Linux Docker socket.\n' >&2
    endpoint=unix:///var/run/docker.sock
fi
case "$endpoint" in
    unix:///*) printf '%s\n' "${endpoint#unix://}" ;;
    *) echo "Expected a local unix:// socket in DOCKER_HOST" >&2; exit 1 ;;
esac
