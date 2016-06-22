var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var shared = require("./webpack.shared.js");

var loaders = [{
	/*
	Difference between include for loaders and entry:
	Simply put, entry config will specify all the  entry files. But among these files, only a few of them need to be transformed.
	That is why "loader" introduces "include" and "exclude".

	Vu que n'importe quel ts rencontré à partir de l'entry point, tsx doit être transformé par ts-loader, il est inutile
	de spécifier un include sur un dossier dans le loader ts:
	*/
	test: /\.ts[x]?$/,
	loader: "ts-loader"
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

var client = {
	name: "prod.client",
	target: "web",
	entry: {
		"client.bundle": shared.APP_DIR + "/client"
	},
	output: {
		filename: "[name].js",
		path: shared.CLIENT_BUILD_DIR,
		publicPath: "/"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),

		new ExtractTextPlugin("[name].css")
	]
};

var server = {
	name: "prod.server",
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
		publicPath: "/",
		libraryTarget: "commonjs2"
	},
	module: {
		loaders: loaders
	},
	resolve: {
		extensions: ["", ".js", ".jsx", ".ts", ".tsx"]
	},
	plugins: [
		//Prod optimizations:
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),

		new ExtractTextPlugin("[name].css")
	]
};

module.exports = [client, server];
