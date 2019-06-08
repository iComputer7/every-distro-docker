FROM opensuse/tumbleweed

RUN zypper -n update && zypper -n install nodejs10 npm

RUN mkdir -p /usr/src/script
WORKDIR /usr/src/script
COPY ./node-script/package.json /usr/src/script
RUN npm install
COPY ./node-script /usr/src/script

EXPOSE 8080

CMD ["node", "index.js"]