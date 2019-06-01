FROM centos:7

RUN yum update -y && yum install epel-release -y && yum install nodejs npm -y

RUN mkdir -p /usr/src/script
WORKDIR /usr/src/script
COPY ./node-script/package.json /usr/src/script
RUN npm install
COPY ./node-script /usr/src/script

EXPOSE 8080

CMD ["node", "index.js"]