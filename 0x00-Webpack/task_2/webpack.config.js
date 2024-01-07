const path = require('path')
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

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
 
// plugins: [
//     new ImageMinimizerPlugin({
//       minimizerOptions: {
//         plugins: [
//           ['jpegtran', { progressive: true }],
//           ['optipng', { optimizationLevel: 5 }],
//           ['svgo', { plugins: [{ removeViewBox: false }] }],
//         ],
//       },
//     }),
//   ],
// };
