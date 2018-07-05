var webpack = require('webpack')
var path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/spec/viewListSpec.js'),
  output: {
    path: path.join(__dirname, '/spec'),
    filename: 'bundleUT.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: [
          'raw-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)\w*/,
        loader: 'url-loader?limit=1000000'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
}
