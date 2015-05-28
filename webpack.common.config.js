var webpack = require("webpack");
var path = require('path');
module.exports = {
  devtool: "#source-map",

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  entry: {
    'standalone-runtime/index': ['./standalone-runtime/index.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        loader: 'babel'
      }
    ]
  }
};
