const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: ['./lofig.js'],
    output: {
        path: path.resolve('./dist'),
        filename: 'lofig.min.js'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules'),
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'Promise': 'bluebird',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
    ]
};