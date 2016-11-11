/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        bundle: './index.js',
        vendor: ['./plugins/createKey.js', './plugins/debounce.js', './plugins/loopScroll.js', './plugins/slider.js']
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
            },
            {test: /\.json/, loader: 'json',exclude: /node_modules/}
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: false,
        port: 3007,
        host: "localhost"
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new DashboardPlugin(dashboard.setData),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            filename: "index.html"
        }),
        new CommonsChunkPlugin({
            name: 'vendor',
            filename: 'common.js'
        }),
    ]
};