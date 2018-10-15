'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: './bundle.js',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
