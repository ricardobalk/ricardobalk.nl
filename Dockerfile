FROM node:latest
RUN apt update
RUN mkdir -p /home/node/.npm-global \
             /home/node/www \
             /home/node/www/src \
             && chown -R node:node /home/node/
RUN npm install n -g && n stable

USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH
WORKDIR /home/node/www
COPY package*.json ./
RUN npm -g config set user $USER && npm i

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
