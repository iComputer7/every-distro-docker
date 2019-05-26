/**
 * Not all distros have apache starting pages so here's a node script that gets distro information
 * I'm planning on having this behind a central reverse proxy container so we can do HTTPS and so we don't take up a bunch of ports on the host
 * - iComputer7
 */

const getos = require("getos");
const http = require("http");
 
getos((e,os) => {
    if (e) return console.log(e);
    console.log("Your OS is:" + JSON.stringify(os));
});