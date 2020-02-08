let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCss = require('optimize-css-assets-webpack-plugin')
let UglifyJsPlugin =require('uglifyjs-webpack-plugin')
console.log(path.resolve('dist'));

module.exports = {
	// 这里写的是优化项
	optimization: { //优化项  
		minimizer: [
			// 这个是转化js代码的
			new UglifyJsPlugin({
				// 是否走缓存
				cache:true,
				// 是否并发打包
				parallel:true,
				// 源码映射
				sourceMap:true
			}),
			// 这个是可以把css转成一行的
			new OptimizeCss()
		]
	},
	// 如果你希望打包后的文件能够暴露出来，就需要写是那种模式development(不会压缩文件，开发模式)
	mode: 'production',
	//入口文件
	entry: './src/index.js',
	// 出口文件
	output: {
		// 打包后的文件名,这里是可以增加hash的，每次修改文件，都会生成一个全新的文件，防止覆盖，或者是缓存问题。[hash:8]她的意思是可以显示8位hash戳
		filename: "bundle[hash].js",
		// 路径（必须是绝对路径，这个时候就需要引入webpack内置的path。__dirname是指当前目录下产生dist文件）
		path: path.resolve(__dirname, 'build')
	},
	// 这里面存放webpack插件
	plugins: [
		new HtmlWebpackPlugin({
			// 首先需要一个模板
			template: './src/index.html',
			// 然后需要一个打包后的文件名
			filename: 'index.html',
			// 也可以增加hash戳
			hash: true
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css',
		})
	],
	// 这里存放模块
	module: {
		// 这里就需要用正则来匹配，去找到css结尾的文件.use里面写上适合css模块的loader。css-loader 就是处理@import 语法的..... style-loader是把css文件插入到head标签中
		// 但是loder的特点是单一，她的用法：如果写一个的话，直接用''，如果写多个，就要放在数组中。而且他的执行顺序是从右到左
		rules: [
			{
				test: /\.css$/,
				use: [
					// 这个插件是把css文件创建成link标签，放到html里面去
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					// 解析@import语法
					'css-loader',
					// 在解析css之前，就用到了前缀（兼容浏览器的前缀）
					'postcss-loader',
					// 把less 文件转化成css文件 sass stylus node-sass sass-loader
					// stylus stylus-loader
					'less-loader'
				]
			}
		]
	}
}