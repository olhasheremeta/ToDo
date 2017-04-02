var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './index.js',

  output: {
    path: path.join(__dirname + '/dist'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve('index.html'),
        inject: 'body'
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),

    new webpack.NoEmitOnErrorsPlugin(),
  ],

  devtool: 'source-map',
};