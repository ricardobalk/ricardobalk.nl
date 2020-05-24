FROM node:12

USER node
RUN mkdir -p /home/node/.npm-global \
             /home/node/www
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s\n\n" "$(node -v)" "$(npm -v)"

WORKDIR /home/node/www
COPY package*.json ./
RUN npm i

EXPOSE 8080
ENTRYPOINT ["npm", "run"]
CMD ["build"]
