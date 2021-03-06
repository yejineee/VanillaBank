const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './client/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devtool: 'cheap-module-eval-source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)|(dist)/,
        include: path.resolve(__dirname, 'client'),
      },
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      hash: true,
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    ...(process.env.NODE_ENV === 'production'
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
    new webpack.DefinePlugin({
      LOGIN_DEV_DEFAULT: JSON.stringify({
        name: 'yejin',
        password: 'mypwd',
      }),
      LOGIN_PROD_DEFAULT: JSON.stringify({
        name: '',
        password: '',
      }),
    }),
  ],
  resolve: {
    alias: {
      Config: path.resolve(__dirname, 'client/src/config/'),
      Libs: path.resolve(__dirname, 'client/src/libs/'),
      Stylesheet: path.resolve(__dirname, 'client/src/stylesheet'),
    },
  },
};
