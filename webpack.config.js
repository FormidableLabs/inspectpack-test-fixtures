'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    badBundle: './index.js'
  },
  output: {
    pathinfo: true,
    filename: '[name].js'
  }
};
