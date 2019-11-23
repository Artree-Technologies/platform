FROM node:12

WORKDIR /app

COPY ./package.json .

RUN npm install --unsafe-perm=true && npm install --unsafe-perm=true -g truffle
