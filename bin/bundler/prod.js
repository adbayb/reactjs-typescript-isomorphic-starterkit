var webpack = require("webpack");
var ProgressPlugin = require("webpack/lib/ProgressPlugin");
var config = require("../../config/webpack.prod.js");

var compiler = webpack(config);

compiler.apply(new ProgressPlugin(function(percentage, log) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(Math.floor(percentage * 100) + "% " + log);
}));

compiler.run(function(err, stats) {
	if(err)
		return console.error(err.message);

	console.log(stats.toString({
		colors: true
	}));
});
