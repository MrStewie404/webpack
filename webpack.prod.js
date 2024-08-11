const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.html',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
      inject: 'body',
    }),
  ],
  output: {
    filename: 'main.js', 
  },
  module: {
    rules: [
      {
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
        test: /\.css$/,
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};