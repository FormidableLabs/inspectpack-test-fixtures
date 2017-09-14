'use strict';

const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    "bad-bundle": './src/bad-bundle.js'
  },
  output: {
    path: path.join(__dirname, "dist"),
    pathinfo: true,
    filename: '[name].js'
  },
  plugins:[
    // Empty (webpack boilerplate only) manifest file per
    // https://webpack.js.org/plugins/commons-chunk-plugin/#manifest-file
    new webpack.optimize.CommonsChunkPlugin({
      names: ["empty-manifest"],
      filename: "[name].js",
      minChunks: Infinity
    })
  ]
};
