const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: '@ngtools/webpack' },
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new NgCompilerPlugin.AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: './main.ts'
    }),
    new UglifyJsPlugin(),
    new CompressionPlugin(),
  ],
  mode: 'production',
};
