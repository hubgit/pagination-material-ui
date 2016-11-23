var path = require('path');
var webpack = require('webpack');

var isDev = (process.env.NODE_ENV === 'development');
var assetDir = './javascripts/';

var defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev
});

var entryScripts = [assetDir + 'app.js'];
var output = {
  path: path.join(__dirname, 'javascripts'),
  filename: 'main.js'
};

var plugins = [
  defineEnvPlugin,
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
  })
];

var moduleLoaders = [
  {
    test: /\.js$/,
    loaders: [ 'babel' ],
    include: __dirname,
    // exclude: /node_modules/,
  }
];

module.exports = {
  devtool: isDev ? 'eval': '',
  entry: entryScripts,
  output: output,
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: moduleLoaders
  }
};
