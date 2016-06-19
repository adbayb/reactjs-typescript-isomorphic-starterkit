import * as webpack from "webpack";
import {Configuration} from "webpack";
import * as path from "path";
import {APP_DIR, BUILD_DIR} from "./webpack.constants";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackProdConfig: Configuration = {
	entry: [
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
				test: /\.tsx?$/, loader: "ts-loader"
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
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
		new ExtractTextPlugin("all.bundle.css")
	]
};

export = webpackProdConfig;
