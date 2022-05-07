const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require('webpack');
const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack demo',
            template: './src/assets/index.html',
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            BASE_URL: "'./'",
            __VUE_OPTIONS_API__: true, // 这里必须是布尔值，不能写成字符串
            __VUE_PROD_DEVTOOLS__: false // 这里必须是布尔值，不能写成字符串
        }),
    ],
    resolve:{
        alias: {
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ],
    },
};