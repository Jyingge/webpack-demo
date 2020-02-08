let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(path.resolve('dist'));

module.exports = {
	// 开发服务器的配置（npx webpack-dev-server 的打包方式需要用到devserver）
	devServer: {
		// 更改端口号
		port: 3000,
		// 想要看到一个进度条在打包的过程中
		progress: true,
		// 想要他指向build目录
		contentBase: "./build",
		// 想要他自动打开浏览器
		open: true,
		// 想要把jdp压缩
		compress: true,
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
			// 如果你需要压缩html文件
			minify: {
				// 删除属性的双引号“”
				removeAttributeQuotes: true,
				// 变成一行
				collapseWhitespace: true
			},
			// 也可以增加hash戳
			hash: true
		})
	]
}