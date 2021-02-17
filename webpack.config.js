var path = require('path')
var webpack = require('webpack')
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: ['./node_modules/regenerator-runtime/runtime.js', './lofig.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'lofig.min.js',
  },
  resolve: {
    alias: {
      modules: path.join(__dirname, 'node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: './example'
  },
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    usedExports: true,
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'inline-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}