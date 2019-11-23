FROM trufflesuite/ganache-cli:latest

RUN npm install --unsafe-perm=true -g ganache-cli
RUN mkdir -p /var/ganache

ENV DOCKER true
ENV DATADIR /var/ganache
ENV MNEMONIC pillows andymori al tomoyuki spitz abc quruli whoops fukurouz air bluehearts highlows
ENV NETWORKID 5777

EXPOSE 8545

CMD ["ganache-cli", "-h", "0.0.0.0"]
