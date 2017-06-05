var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    //程序入口
    entry: path.resolve(__dirname, 'src/index.jsx'),


    // 生成文件的路径的文件名字
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    devtool:"source-map",
    // 文件路径的指向
    resolve: {
        //用于指明程序自动补全识别哪些后缀
        extensions: ['', '.js', '.jsx']
    },
    //进行字符串的处理
    module: {
        //加载器
        loaders: [
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015', "react"]
                }
            },
            {test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
            {test: /\.(png|gif|jpg|jpeg|bmp)$/i, loader: 'url-loader?limit=5000'},  // 限制大小5kb
            {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'}

        ],


    },

    //静态代码检测工具。通过使用它可以保证高质量的代码，尽量减少和提早发现一些错误
    eslint: {
        configFile: '.eslintrc'
    },

    //处理css的前缀
    postcss: [
        require('autoprefixer') //调用autoprefixer插件，例如 display: flex
    ],

    //插件，比loader更强大，能使用更多webpack的api
    plugins: [

        // new HtmlWebpackPlugin({
        //     template: __dirname + '/src/index.demo.html'
        // }),

        // 热加载插件
        new webpack.HotModuleReplacementPlugin(),



        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    // devServer: {
    //     contentBase: "./public", //本地服务器所加载的页面所在的目录
    //     colors: true, //终端中输出结果为彩色
    //     historyApiFallback: true, //不跳转
    //     inline: true, //实时刷新
    //     hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    // }

    devServer: {
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        host: '0.0.0.0',
        hot: true,
        inline: true,
        port: 3004,
    },


}