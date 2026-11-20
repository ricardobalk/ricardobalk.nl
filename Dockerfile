FROM node:26.13.1-alpine AS node-base
# docker build --no-cache --progress plain -t ricardobalk/website:latest --target <target> -f Dockerfile .

ENV NODE_USE_ENV_PROXY=1
ENV NUXT_TELEMETRY_DISABLED=1 \
    DO_NOT_TRACK=1

RUN apk add --no-cache git

RUN npm install --global corepack@0.36.0 \
    && corepack enable \
    && corepack prepare pnpm@12.21.0 --activate

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm
ENV PATH=$PATH:/home/node/.npm/bin


RUN mkdir -p  "${HOME}/app" \
              "${NPM_CONFIG_PREFIX}/bin" \
    && printf 'telemetry.enabled=false\ntelemetry.consent=0\n' > "${HOME}/.nuxtrc"

RUN printf  "Node version %s, npm version %s, pnpm version %s\n\n" \
            "$(node -v)" "$(npm -v)" "$(pnpm -v)"

LABEL org.opencontainers.image.title="r4.do Node.js" \
      org.opencontainers.image.description="Node.js environment for Ricardo Balk's personal website" \
      org.opencontainers.image.source="https://github.com/ricardobalk/personal-website" \
      org.opencontainers.image.url="https://r4.do" \
      org.opencontainers.image.authors="Ricardo Balk" \
      org.opencontainers.image.licenses="ISC"

FROM node-base AS dependencies
USER node
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN pnpm install --frozen-lockfile
ENTRYPOINT ["pnpm", "run"]

FROM dependencies AS development
USER node
EXPOSE 3000
CMD ["dev", "--host"]
# && docker run -it -p 3000:3000 -v "$(pwd):/home/node/app:cached" ricardobalk/website:latest

FROM dependencies AS build
USER node
RUN ["pnpm", "run", "generate"]

FROM nginx:1.31.8-alpine3.24-slim AS production
COPY --from=build /home/node/app/.output/public /usr/share/nginx/html
LABEL org.opencontainers.image.title="r4.do" \
      org.opencontainers.image.description="Ricardo Balk's personal website served by Nginx" \
      org.opencontainers.image.source="https://github.com/ricardobalk/personal-website" \
      org.opencontainers.image.url="https://r4.do" \
      org.opencontainers.image.authors="Ricardo Balk" \
      org.opencontainers.image.licenses="ISC"
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
# && docker run -it -p 80:80 -p 443:443 -v "$(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf:cached" ricardobalk/website:latest
