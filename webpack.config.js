var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: "./js/scripts.js",
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  mode: 'development'
};