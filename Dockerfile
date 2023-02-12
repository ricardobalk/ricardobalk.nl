FROM node:16.0-alpine3.13 AS node

USER node
RUN mkdir -p /home/node/.npm-global \
             /home/node/app \
             /home/node/app/src/.vuepress/.cache \
             /home/node/app/src/.vuepress/.temp
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf  "Node version %s, npm version %s, yarn version %s\n\n" \
            "$(node -v)" "$(npm -v)" "$(yarn -v)"

FROM node AS dependencies
WORKDIR /home/node/app/
COPY package.json ./
COPY yarn.lock ./
COPY tsconfig*.json ./
COPY ./src/ ./src/
RUN ["yarn", "install", "--frozen-lockfile"]

FROM dependencies as dev
USER node
ENTRYPOINT ["yarn", "run"]
CMD ["dev"]

FROM dependencies AS build
USER node
RUN ["yarn", "run", "build"]
RUN ["yarn", "cache", "clean"]
RUN ["rm", "-rf", "node_modules"]

FROM alpine:3.17 AS release-base
COPY --from=build /home/node/app/dist /usr/share/nginx/html

FROM release-base AS release
RUN apk add --no-cache nginx
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# development build: docker build --target dev -t ricardobalk/website:dev . && docker run -it --rm -p 8080:8080 -v "$(pwd)/src:/home/node/app/src" ricardobalk/website:dev "dev"
# production build:  docker build --no-cache -t ricardobalk/website:latest . && docker run -it --rm -p 8080:8080 ricardobalk/website:latest