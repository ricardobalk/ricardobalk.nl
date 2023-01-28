FROM node:16.0-buster-slim

USER node
RUN mkdir -p /home/node/.npm-global \
             /home/node/app \
             /home/node/app/src/.vuepress/.cache \
             /home/node/app/src/.vuepress/.temp
RUN ls -la /home/node/app/src/.vuepress/
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s, yarn version %s\n\n" "$(node -v)" "$(npm -v)" "$(yarn -v)"

WORKDIR /home/node/app/
COPY package*.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY ./src/ ./src/

# Fetch all dependencies and install them
RUN yarn

# Run an initial build
RUN yarn run build

EXPOSE 8080

# After the inital build, it is up to you. Serve the files that came with the image,
# mount files from the host and run a 'dev' server, mount the dist/ and 'build' the site again, whatever.

ENTRYPOINT ["yarn", "run"]

# The default is to run a development version of the website. People can do `docker run --rm -p 8080:8080 -it ricardobalk/website`.
# (equals to `docker run --rm -p 8080:8080 -it ricardobalk/website "start"`) and see the website on http://localhost:8080.

CMD ["dev"] # start | dev | build | serve | build:serve ... see package.json ;-)
