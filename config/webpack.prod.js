const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig, {
    mode: "production",
    // 代码分隔
    optimization: {
        splitChunks: {
            // 选择对哪些文件进行拆分，默认是async，即只对动态导入的文件进行拆分
            chunks: "all",
            // 提取chunk的最小体积
            minSize: 20000,
            // 要提取的chunk最少被引用次数
            minChunks: 1,
            // 对要提取的trunk进行分组
            cacheGroups: {
                // 匹配node_modules中的三方库，将其打包成一个trunk
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -10,
                },
                default: {
                    // 将至少被两个trunk引入的模块提取出来打包成单独trunk
                    minChunks: 2,
                    name: "default",
                    priority: -20,
                },
            },
        },
    },
    // 抽离出css成一个单独文件，生产环境用，这样在浏览器中可以拥有更好的加载效率
    plugins: [new MiniCssExtractPlugin()],
});