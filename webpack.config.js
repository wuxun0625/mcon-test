var webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/web",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
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
      },
    ]
  },
  devServer: {
    contentBase: "./web",
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ]
}