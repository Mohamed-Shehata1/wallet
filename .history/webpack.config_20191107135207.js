
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = env => {
    const buildDirectory = path.join(__dirname, './dist');


    return {
        mode: env.mode,
        entry: {
            'bundleJs': './src/script/index.js',
            'bundleCss': './src/style/index.css'
        },
        output: {
            path: buildDirectory,
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: env.mode === 'development',
                        }
                    },
                    'css-loader'
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                    },
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
                ignoreOrder: false
            })
        ]
    }
}