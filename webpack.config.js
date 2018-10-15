'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './index.js',
//   output: './bundle.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}
