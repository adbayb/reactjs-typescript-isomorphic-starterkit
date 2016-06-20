var webpack = require("webpack");
var config = require("../../config/webpack.dev.server.js");

var options = {
	chunk: false,
	chunkModules: false,
	modules: false,
	source: false,
	chunkOrigins: false
};

var compiler = webpack(config);

compiler.run(function(err, stats) {
	if(err)
		return console.error(err.message);

	console.log(stats.toString(options));
});
