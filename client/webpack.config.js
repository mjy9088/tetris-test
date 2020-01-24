/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputPath = './client/build';

const mainConfig = {
  entry: './client/src/index.tsx',
  output: {
    filename: 'script.js',
    chunkFilename: 'libs.js',
    path: path.resolve(outputPath),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(outputPath),
    index: 'index.html',
    host: '0.0.0.0',
    port: 55555,
  },
  resolve: {
    alias: {
      _: path.resolve('./client/src/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: './.babel_cache',
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: 'libs.css',
    }),
    new CleanWebpackPlugin(),
  ],
};

module.exports = [mainConfig];
