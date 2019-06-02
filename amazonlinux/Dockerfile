FROM amazonlinux:2

RUN yum update -y && amazon-linux-extras install epel && yum install nodejs npm -y

RUN mkdir -p /usr/src/script
WORKDIR /usr/src/script
COPY ./node-script/package.json /usr/src/script
RUN npm install
COPY ./node-script /usr/src/script

EXPOSE 8080

CMD ["node", "index.js"]