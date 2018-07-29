var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: ["./js/utils.js", "./js/scripts.js"],
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
    rules: [
      {
        test: /.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      }
    ]
  },
  mode: 'development',
  devServer: {publicPath: '/public', port: 8080},
  watch: true
};