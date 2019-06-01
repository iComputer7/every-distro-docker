FROM gentoo/stage3-amd64
#Because portage takes an annoyingly long time to sync, I'm going to separate these into their own layers
RUN emerge --sync && emerge --oneshot portage
RUN emerge --autounmask-write =net-libs/nodejs-12*

RUN mkdir -p /usr/src/script
WORKDIR /usr/src/script
COPY ./node-script/package.json /usr/src/script
RUN npm install
COPY ./node-script /usr/src/script

EXPOSE 8080

CMD ["node", "index.js"]