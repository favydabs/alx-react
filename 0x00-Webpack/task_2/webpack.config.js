const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'js/dashboard_main.js'),
    output: {
        path:path.resolve(__dirname, 'public'),
filename: 'bundle.js'
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
//     plugins: [
//         new HtmlWebpackPlugin ({
//             template: 'public/index.html'
//         }),
//     ]
// };
