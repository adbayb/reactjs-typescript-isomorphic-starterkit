var ExtractTextPlugin = require("extract-text-webpack-plugin");
var shared = require("./webpack.shared.js");

var loaders = [{
	test: /\.ts[x]?$/,
	loaders: [
		"react-hot-loader",
		"ts-loader"
	]
}, {
	test: /\.css$/,
	loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&localIdentName=[path]-[name]_[local]-[hash:base64:5]")
}, {
	test: /\.scss$/,
	loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&localIdentName=[path]-[name]_[local]-[hash:base64:5]!sass-loader")
}, {
	test: /\.(jp[e]?g|png|gif|svg)$/i,
	loader: "file-loader?name=img/[name].[ext]"
}, {
	test: /\.html$/,
	loader: "file-loader?name=[name].[ext]"
}, {
	test: /\.ico$/,
	loader: "file-loader?name=[name].[ext]"
}];

var server = {
	name: "dev.server",
	target: "node",
	externals: [
		/^[a-z\-0-9]+$/, {
			"react-dom/server": true
		}
	],
	entry: {
		"server.bundle": shared.APP_DIR + "/server"
	},
	output: {
		filename: "[name].js",
		path: shared.SERVER_BUILD_DIR,
		publicPath: "http://localhost:8081/",
		libraryTarget: "commonjs2"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
};

module.exports = server;
