var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
        app : PATHS.app
    },
    output: {
        path: PATHS.build,
        library: 'amperand_modules',
        libraryTarget: 'amd',
        filename : 'amd_bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app
            }

        ]
    },
    devtool: 'source-map'
};
