/* eslint strict:0 */

'use strict';

const path = require('path');

const entry = {
  'standalone-runtime/index': path.join(__dirname, './index.js')
};

module.exports = {
  entry: entry,

  devtool: '#source-map',

  module: {
    rules: [
      {
        test: /\.xtpl$/,
        exclude: /node_modules/,
        loader: require.resolve('xtpl-loader'),
        query: {
          Compiler:require('xtemplate-compiler').default,
        }
      }]
  },

  output: {
    path: __dirname,
    filename: '[name].js',
  },
};
