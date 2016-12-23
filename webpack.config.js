var path = require('path');
var webpack = require('webpack');

var isDev = (process.env.NODE_ENV === 'development');

var defineEnvPlugin = new webpack.DefinePlugin({
  __DEV__: isDev,
    'process.env': {
      NODE_ENV: isDev ? 'development' : 'production'
    }
});

var entryScripts = ['./src.js'];
var output = {
  path: __dirname,
  filename: 'index.js'
};

var plugins = [
    defineEnvPlugin,
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.DedupePlugin()
];

var moduleLoaders = [
  {
    test: /\.js$/,
    loaders: [ 'babel' ],
    exclude: /node_modules/,
    include: __dirname
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
