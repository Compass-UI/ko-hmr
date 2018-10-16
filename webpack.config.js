'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack')

const path = require('path')

module.exports = {
  context: __dirname,
  entry: './index.js',
//   output: './bundle.js',
  devServer: {
      hot: true
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin()
  ]
}
