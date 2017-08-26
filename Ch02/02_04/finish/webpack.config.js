const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index'),
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    devServer: {
        inline: true,
        contentBase: path.resolve(__dirname, './dist'),
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: path.resolve(__dirname, './node_modules/babel-loader'),
            query: {
                presets: ['latest', 'stage-0', 'react']
            }
        },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: path.resolve(__dirname, './node_modules/json-loader'),
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
            ]
    }
}