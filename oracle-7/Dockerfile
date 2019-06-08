FROM oraclelinux:7

RUN yum update -y && yum install -y gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash - && yum install -y nodejs

RUN mkdir -p /usr/src/script
WORKDIR /usr/src/script
COPY ./node-script/package.json /usr/src/script
RUN npm install
COPY ./node-script /usr/src/script

EXPOSE 8080

CMD ["node", "index.js"]