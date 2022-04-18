const path = require('path');
const json5 = require('json5');

module.exports = {
    entry: './front/src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'front/out'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    watchOptions: {
        ignored: ['**/node_modules', './front/out/**/*'],
    },
    devServer: {
        static: [{
            directory: path.join(__dirname, 'front/public'),
        }, {
            directory: path.join(__dirname, 'front/out'),
            publicPath: '/out',
        }],
        compress: true,
        port: process.env.PORT || 5000,
    },
};