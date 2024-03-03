const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: "development",
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './src',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[hash][ext][query]',
    clean: true,
  },
};