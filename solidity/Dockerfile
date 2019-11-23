FROM node:12

WORKDIR /app

RUN npm install --unsafe-perm=true && npm install --unsafe-perm=true -g truffle

CMD ["truffle", "test", "--network", "test"]
