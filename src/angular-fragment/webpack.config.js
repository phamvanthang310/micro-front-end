const path = require('path');
const NgCompilerPlugin = require('@ngtools/webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: '/node_modules/',
        loader: '@ngtools/webpack'
      },
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
      tsConfigPath: path.join(__dirname, 'tsconfig.json'),
      mainPath: path.join(__dirname, 'src/main.ts')
    }),
    new UglifyJsPlugin(),
  ],
  mode: 'production',
};
