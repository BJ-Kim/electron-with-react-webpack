var path = require("path");

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
      }
    ]
  }
};
