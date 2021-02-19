FROM node:12

USER node
RUN mkdir -p /home/node/.npm-global \
             /home/node/app
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
RUN npm -g config set user "$USER" && \
    printf "Node version %s, npm version %s, yarn version %s\n\n" "$(node -v)" "$(npm -v)" "$(yarn -v)"

WORKDIR /home/node/app/
RUN yarn

EXPOSE 8080

ENTRYPOINT ["/bin/bash"]