var webpack = require('webpack');
var path = require('path');
var htmlWebpack = require('html-webpack-pligin')

module.exports = {
	entry :path:resolve(__dirname,'src/index.jsx'),

	output:{
		path:__dirname+"/build",
		filename:"bundle.js"
	},


	resolve:{
		extensions:['','.js','.jsx']
	},

	module:{
		[
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss' },
            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },  // 限制大小5kb
            { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000'} // 限制大小小于5k
        ]
	},

	eslint:{
		configFile:'.eslintrc'
	}
	
}