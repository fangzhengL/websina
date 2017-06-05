/**
 * Created by hzn on 2017/6/5.
 */
// 将程序，从 es6 转到 es5
require('source-map-support').install()
require('babel-polyfill')
require('babel-register')({
    sourceMaps: true,
    extensions: ['.js', '.jsx'],
    presets: ['react', "es2015", "stage-1"],
    plugins: ["antd", "transform-decorators-legacy"]
})
require('./app')
