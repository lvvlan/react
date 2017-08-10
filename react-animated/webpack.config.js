var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: '#cheap-module-source-map',
    output: {
        filename: 'dest/js/[name].js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve('./src'),
                options: {
                    "presets": [
                        ["env", { "modules": false }],
                        "react",
                        "stage-2"
                    ],
                    "plugins": ["transform-runtime"],
                    "comments": false
                }
            }
        ]
    }
};