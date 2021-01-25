const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

 
const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};
 
module.exports = {
    mode: 'development',
    entry: PATHS.source + '/index.js',
    output: {
        publicPath: '',
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        rules: [
          { test: /\.css$/, use: 'css-loader' },
          { test: /\.py$/, use: 'file-loader' },
        ],
    },
    // plugins: [new HtmlWebpackPlugin()]
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin()
    ]
};
