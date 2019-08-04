FROM node:latest
RUN apt update
RUN apt install -y ruby-dev rubygems
RUN gem install bundler jekyll && gem update --system
RUN mkdir -p /home/node/.npm-global /home/node/.gems /home/node/www /home/node/www/.bundle && chown -R node:node /home/node/
RUN npm install n -g && n stable
USER node
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV GEM_HOME="$HOME/.gems"
ENV PATH=$NPM_CONFIG_PREFIX/bin:$GEM_HOME:$PATH
WORKDIR /home/node/www
RUN npm -g config set user $USER
EXPOSE 4000
CMD GEM_HOME="$HOME/.gems" bundle install && \
    printf "npm v%s, node %s\n" "$(npm -v)" "$(node -v)" && \
    npm i && npm run build:serve
