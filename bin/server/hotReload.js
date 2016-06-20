var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var configClient = require("../../config/webpack.dev.client.js");
var configServer = require("../../config/webpack.dev.server.js");

var options = {
	chunk: false,
	chunkModules: false,
	modules: false,
	source: false,
	chunkOrigins: false
};

new WebpackDevServer(webpack(configClient), {
	hot: true,
	historyApiFallback: true,
	stats: options
}).listen(8081, "localhost", function(err) {
	if(err)
		console.log(err);

	console.log("Webpack Server launched with at localhost:8081 (Hot Module Replacement [HMR] enabled)");
});

webpack(configServer).watch({}, function(err, stats) {
	if(err)
		return console.error(err.message);

	console.log(stats.toString(options));
});
