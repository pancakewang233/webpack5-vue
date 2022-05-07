const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve:{
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Webpack demo',
        template: './src/assets/index.html',
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
        /*
        loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。在下面的示例中，
        从 sass-loader 开始执行预处理讲scss转成css，然后继续执行 css-loader把css编译成js，最后以 style-loader把css编译成的js转成标签插入 为结束。
        */
        {
            test: /\.(css|scss|sass)$/,
            use: [
                // [style-loader](/loaders/style-loader)
                { loader: 'style-loader' },
                // [css-loader](/loaders/css-loader)
                {
                loader: 'css-loader',
                options: {
                    modules: true
                }
                },
                // [sass-loader](/loaders/sass-loader)
                { loader: 'sass-loader' }
            ]
        },
      { test: /\.ts$/, use: 'ts-loader' },
      { test: /\.vue$/,loader: 'vue-loader' }
    ],
  },
};