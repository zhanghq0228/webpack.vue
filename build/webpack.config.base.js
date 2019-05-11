const path = require('path')
const vueLoaderOptions = require('./vue-loader.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'


const config = {
  mode: process.env.NODE_EN || 'production',
  target: 'web',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dist.[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.(vue|js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_model/,
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: vueLoaderOptions(isDev)
        }
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name]-[hash].[ext]',
            outputPath: 'images/'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HTMLPlugin({
      filename: 'index.html',
      template: 'index.html', //传入自己传入的模板html
      inject: 'body',
      minify: {
        removeComments: true, //压缩html文件
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    })
  ]
}

module.exports = config
