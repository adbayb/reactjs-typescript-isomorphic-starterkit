var express = require("express");
var compress = require("compression");
var path = require("path");
var serverSideRendering = require("../../dist/server/server.bundle.js");

var server = express();
const port = process.env.PORT || 8080;

server.use(compress({ threshold: 0 }));
server.use(express.static(path.resolve(__dirname, "..", "..", "dist", "client")));
server.use(function(req, res) {
	serverSideRendering.default(req, res);
});

server.listen(port, function() {
	var host = this.address().address;
	console.log("Server launched at http://%s:%s", host, port);
});
