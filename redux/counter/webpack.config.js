/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: './build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            RD: 'react-dom'
        }),
        new HtmlWebpackPlugin({
            title: "Redux-demo",
            template: "public/index.html",
            filename: "index.html"
        }),
        new ExtractTextPlugin("[name].css")
    ],
    watch: true
};