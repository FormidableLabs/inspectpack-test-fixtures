'use strict';

const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    "bad-bundle": './bad-bundle.js'
  },
  output: {
    path: path.join(__dirname, "dist"),
    pathinfo: true,
    filename: '[name].js'
  }
};
