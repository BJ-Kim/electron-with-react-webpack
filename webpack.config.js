var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, "src/index.jsx")
  ],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
    publicPath: 'http://localhost:8080/build/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass?sourceMap'
        ]
        //loader: ExtractTextPlugin.extract("style", "css!sass", "sass?sourceMap"),
        //include: [
        //  path.resolve(__dirname, 'src/css'),
        //]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app.css")
  ]
};
