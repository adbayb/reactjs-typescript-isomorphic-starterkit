import * as webpack from "webpack";
import {Configuration} from "webpack";
import * as path from "path";
import {APP_DIR, BUILD_DIR} from "./webpack.constants";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackDevConfig: Configuration = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		`${APP_DIR}/client`
	],
	output: {
		filename: "client.bundle.js",
		path: BUILD_DIR,
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				include: APP_DIR,
				loaders: [
					"react-hot",
					"ts-loader"
				]
			},
			{
				test: /\.s?css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
			{
				test: /\.(jp[e]?g|png|gif|svg)$/i,
				loader: "file-loader?name=img/[name].[ext]"
			},
			{
				test: /\.(html|ico)$/,
				loader: "file-loader?name=[name].[ext]"
			}
		]
	},
	resolve: {
		extensions: ["", ".ts", ".tsx", ".js", ".jsx"]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("all.bundle.css")
	]
};

export = webpackDevConfig;
