var path    = require('path')
var webpack = require('webpack')
var glob    = require('glob')

const banner = [
  `Client Side Validations - v<%= ClientSideValidations::VERSION %> (https://github.com/DavyJonesLocker/client_side_validations)`,
  `Copyright (c) ${new Date().getFullYear()} Geremia Taglialatela, Brian Cardarella`,
  `Licensed under MIT (https://opensource.org/licenses/mit-license.php)`].join("\n")

module.exports = {
  entry: {
    'rails.validations': ['rails.validations']
  },

  output: { filename: '[name].js', path: path.join('vendor', 'assets', 'javascripts') },

  module: {
    rules: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      {
        test: /\.jsx?(.erb)?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: '../config/.eslintrc.json'
        },
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin({banner: banner})
  ],

  resolve: {
    extensions: [ '.coffee' ],
    modules: [
      path.resolve('coffeescript'),
      path.resolve('node_modules')
    ]
  },

  resolveLoader: {
    modules: [ path.resolve('node_modules') ]
  }
}
