const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/scripts/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|eof|otf|woff|woff2)$/i,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: ['ts-loader' ,'eslint-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  }
};
