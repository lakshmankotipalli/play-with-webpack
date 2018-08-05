var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./js/scripts.js",
  //entry: ["./js/utils.js", "./js/scripts.js"], // you can add multiple entry points like this
  output: {
    path: __dirname + "/js",
    filename: "scripts.min.js"
  },
  module: {
    rules: [
      // {
      //   test: /.js/,
      //   enforce: 'pre',
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: 'jshint-loader'
      //     }
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS Strings
          },{
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'sass-loader' // Compiles Sass to CSS, using Node Sass by default
          }
        ]
      },
      {
        test: /.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false
            }
          }
        ]
      }
    ]
  },
  mode: 'development',
  devServer: {publicPath: '/public', port: 8080},
  watch: true
};