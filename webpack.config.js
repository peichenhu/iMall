var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var CopyWebpackPlugin = require('copy-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
module.exports = {
  entry: './src/main.js',
  output: {
    // path: path.resolve(__dirname, '../../laragon/www/iMall'), // 部署到Laragon
    path: path.resolve(__dirname, '../iHexo/source/demo/iMall'), // 部署到iHexo
    publicPath: '/demo/iMall/',// 部署到iHexo
    // path: path.resolve(__dirname, './dist'),// 部署到 nodejs
    // publicPath: '/',// 部署到 nodejs 
    filename: 'build.js?[hash]',
    chunkFilename: '[id].[hash].js'
  },
  
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      
    }
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './images/[name].[ext]?[hash]' // 源文件
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './media/[name].[ext]?[hash]' // 源文件
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './fonts/[name].[ext]?[hash]' // 源文件
        }
      },
    ],
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      inject: true,
      hash: true,
      favicon: false,
      minify: false,
      title: 'shopping',
    }),
    // copy custom static assets
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, './static'),
    //   to: path.resolve(__dirname, './dist'),
    //   to: path.resolve(__dirname, '../iHexo/source/demo/imall'),
    // //   to: path.resolve(__dirname, '../../laragon/www/imall'),
    //   ignore: ['.*']
    // }]),

    new FriendlyErrorsPlugin(),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port:5050
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
