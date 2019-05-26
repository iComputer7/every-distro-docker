/**
 * Not all distros have apache starting pages so here's a node script that gets distro information
 * I'm planning on having this behind a central reverse proxy container so we can do HTTPS and so we don't take up a bunch of ports on the host
 * - iComputer7
 */

const getos = require("getos");
const http = require("http");
const port = 8080 || process.env.PORT;

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    getos((e,os) => {
        if (e) return console.log(e);
        console.log("Your OS is:" + JSON.stringify(os));
        res.write(JSON.stringify(os));
        res.end();
    });
}).listen(port);
console.log(`Listening on ${port}`);

process.on("SIGINT", () => process.exit());