/**
 * Des
 * Created by luowei5 on 2016/8/31.
 * E-mail luowei5@jd.com
 * Update 2016/8/31
 */
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            React: 'react',
            RD: 'react-dom'
        })
    ],
    watch: true
};