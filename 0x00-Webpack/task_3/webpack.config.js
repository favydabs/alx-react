const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path:path.resolve(__dirname, 'public'),
filename: 'bundle.js'
    },
    devServer: {
static: {
    directory: path.resolve(__dirname, 'public')
},
port: 8564,
open: true,
hot: true,
    },
    module: {
        rules: [
            // Rule for CSS files
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // Rule for images in CSS
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/',
                            publicPath: 'assets/'
                        },
                    },
                ],
            },
        ],
    },
};
