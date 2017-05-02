const webpack = require('webpack');

const debug = process.env.NODE_ENV == 'production';
const plugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
];


module.exports = {
  context: __dirname,
  entry: {
    'bin/public/background': './src/background.js',
    'bin/public/content': './src/content.js',
    'bin/public/popup': './src/popup.jsx',
    'bin/tests': './src/tests.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins
}