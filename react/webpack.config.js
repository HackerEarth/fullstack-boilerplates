const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  entry: ['@babel/polyfill', `${APP_DIR}/index.js`],
  output: {
    path: BUILD_DIR,
    filename: `bundle.js`,
    publicPath: `/${process.env.REACT_APP_HASH}/`,
  },
  mode: env,
  devtool: env === 'development' ? 'source-map' : null,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: `url-loader?limit=10000&name=img/[name].[ext]`,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
      filename: 'index.html',
      inject: 'body',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_HASH': JSON.stringify(process.env.REACT_APP_HASH),
    }),
  ],
  devServer: {
    contentBase: BUILD_DIR,
    compress: true,
    port: 5000,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  watchOptions: {
    ignored: /node_modules/
  },
};
