#!/bin/sh

# This script checks whether the local directory is up-to-date with
# the remote Git repository, and issues an `npm build` if necessary.

git fetch;

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
    printf "Everything is up-to-date - No need to do anything\n";
    exit 0;
elif [ $LOCAL = $BASE ]; then
    printf "Need to pull - There are new changes\n";
    git pull --rebase;
    printf "Building site...\n";
    npm run build
    exit 0;
elif [ $REMOTE = $BASE ]; then
    printf "Need to push - There are commits that need to be pushed to the Git remote\n";
    exit 1;
else
    printf "Diverged - The local directory and the Git remote are diverged\n";
    exit 1;
fi
