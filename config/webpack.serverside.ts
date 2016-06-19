import * as webpack from "webpack";
import {Configuration} from "webpack";
import * as path from "path";
import {APP_DIR, BUILD_DIR} from "./webpack.constants";
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackServerSideConfig: Configuration = {
  entry: [
    `${APP_DIR}/server`
  ],
  target: "node",
  externals: /^[a-z\-0-9]+$/,
  output: {
    filename: "server.bundle.js",
    path: BUILD_DIR,
    publicPath: "/",
    libraryTarget: "commonjs"
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/, loader: "ts-loader"
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
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.ico$/,
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

export = webpackServerSideConfig;
