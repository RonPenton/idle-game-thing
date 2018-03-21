const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin('index.css')
    ]
};