let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve('dist'));

module.exports = {
	// 如果你希望打包后的文件能够暴露出来，就需要写是那种模式development(不会压缩文件，开发模式)
	mode: 'development',
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
			// 如果你需要压缩html文件
			minify: {
				// 删除属性的双引号“”
				// removeAttributeQuotes:true, 	
				// 变成一行
				collapseWhitespace: true
			},
			// 也可以增加hash戳
			hash: true
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
					{
						loader: 'style-loader',
						// 这个是说，可以把同样css样式，提高先后顺序
						options:{
							// insertAt:'top'
						}
					},
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
						// 这个是说，可以把同样css样式，提高先后顺序
						options:{
							// insertAt:'top'
						}
					},
					// 解析@import语法
					'css-loader',
					// 把less 文件转化成css文件 sass stylus node-sass sass-loader
					// stylus stylus-loader
					'less-loader'
				]
			}
		]
	}
}