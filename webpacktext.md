## webpack 安装
+	先安装本地的webpack
	-  npm i webpack webpack-cli -D 
	-  (webpack 和 webpack-cli 属于开发依赖，上线的时候是不需要要这两个包的，所以需要在下载的时候加上 -D)

###	webpack 0配置方法 4.0版本以上(不推荐使用，配置较弱)
+	打包工具>是输出后的结果(js模块) 
	其实0配置的打包方法是 :  webpack查询node modules 文件夹--> bin 文件夹 -->webpack.cmd 文件 -->最终找的就是 
			node "%~dp0\..\webpack\bin\webpack.js"
	-	npx webpack 即可打包(仅支持webpack4.0以上版本)
> 翻译
	>	WARNING in configuration（默认没有给出配置)
	>	The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to  'development' or 'production' to enable defaults for each environment.（如果没有设置模式，默认采用的是production模式，也就是生产模式{生产环境下希望的是代码小巧，可帮开发者优化，压缩。}然而，你也可以选用开发（development）模式，是不会被压缩的代码{也就是可以看见打包结果}）
	>	You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

###	手动配置webpack
+	默认配置文件的名字 webpack.config.js (因为webpack是node写出来的，所以要遵循node写法。默认导出就是module.exports) 然后直接利用 npx webapck 就可以打包了
>	如果你不想叫webpack.config.js，其实也是可以改名字的，比如更改成：webpack.config.yingge.js 那就可以使用 npx webpack --config webpack.yingge.js 来构建打包程序 
>	如果你觉得上面的构建方法太难记，还有其他办法。这个时候就需要通过package.json来更改配置-->  1.   "build":"webpack --config webpack.config.yingge.js"   2. npm run build 就可以直接打包了 

```
如果你想要通过 localhost 的方式去打开打包文件，
			1.	那就需要下载这个依赖   yarn add webpack-dev-server -D 
			2.	然后通过 npx webpack-dev-server 进行打包 (其实这种打包方式是存在好处的，并不会真是的打包文件，只是生成一个内存中的打包，也就是吧文件写在内存中)
			3.	他会生成一个 http://localhost:8080/  他会生成一个打包后的文件目录，但你想要的是打包后的文件可以直接展示。
			4.	这个时候就需要再次配置 webpack.config.js 文件 -->	"dev":"webpack-dev-server",然后就可以使用 npm run dev 来打包了 
```
+	接下来就说说怎么使用插件

	1.	如果这个时候你需要一个html文件，并且按照自己的配置 ，打包到build目录下，就用到了 html-webpack-plugin插件 。紧接着 npm run dev(但是这个时候是看不见文件的。) 
	2.	如果你想把css文件合并，就要在index.js中来导入require css文件。这个时候就用得到了module。 然后下载css-loader style-loader
	3.	如果你写了less文件，并且想让他生效。就要在index.js 文件下引入 require less文件，所以这个时候就用到了less-loader less。
	4.	如果想要在打包（build）后，抽离css样式。那就用到了yarn add mini-css-extract-plugin -D 这个插件。然后就用到了抽离文件的东西。MiniCssExtractPlugin.loader,
	5.	如果你需要一个兼容浏览器的前缀，那么就需要下载  yarn add postcss-loader autoprefixer。 但是这个时候不光是在	mpdules->rules->use 中，增加'postcss-loader'就可以了。此时如果运行，npm run build 还是会报错的，报错信息如下：
		[failed] [1 error]
		ERROR in ./src/index.css (./node_modules/postcss-loader/src!./node_modules/css-loader/dist/cjs.js!./src/index.css)
		Module build failed (from ./node_modules/postcss-loader/src/index.js):
		Error: No PostCSS Config(这里就说明了没有postcss.config.js文件) found in: C:\Users\Lenovo\Desktop\myDemo\web-demo\src
			at C:\Users\Lenovo\Desktop\myDemo\web-demo\node_modules\postcss-load-config\src\index.js:91:15  
	报错是说你没有postcss.config.js文件，这时新建一个文件，里面写上module.exports = { plugins:[require('autoprefixer'）]}，然后在继续打包npm run build 就可以了。这个时候，打包后的文件，后会产生浏览器前缀。（但是现在有bug）
	6.	如果你也想吧css文件压缩，那么就需要下载	yarn add optimize-css-assets-webpack-plugin -D
		然后写了一下代码：
		optimization: { //优化项  
			minimizer: [
				// 这个是可以把css转成一行的
			new OptimizeCss()
		] },
		然而在这里有明确规定，用了optiomize,就一定要用uglifyjs。所以 yarn add uglifyjs-webpack-plugin -D。但是这个时候在转化js代码的时候回报错。如下：
			ERROR in bundlee8a7af382e440aeccd58.js from UglifyJs
			Unexpected token: name «str», expected: punc «;» [./src/index.js:1,0][bundlee8a7af382e440aeccd58.js:91,4]
		那这个时候你要做的是，吧index.js中的两个有关js的文件先删除掉就可以了。
	7.	如何在webpack中配置js模块？？？
		比如说，吧es6转成es5，或者一些更高级的语法转成es5，那就用到了转化js代码的bouble。例如，我们写了一个箭头函数，在打包的时候想要他变成普通函数，因为普通的npx webpack 打包是行不通的，所以用到了插件 npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env  -D  
				然后就这样：use:{
								loader:'babel-loader',
								options:{
									// 这里我们要用babel-loader 把es6转化成es5
									// 这个是预设
									presets:[
										'@babel/preset-env'
									]
								}
							}
		在进行npx webpack 就可以了
		那如果说你需要更高级的模块转化，比如说class类...那就需要下载另个插件yarn add @babel-plugin-proposal-class-properties -D  
		那如果你还想要@log....这类装饰器的话，那就需要下载另个插件 yarn add @babel/plugin-proposal-decorators -D
	8.	如果你想要处理js语法，以及校验。一般转高级语法的时候都会用到的包 @babel/plugin-transform-runtime -D。然后还会用到一		个上线时用到的代码，也就是 @babel/runtime，下载这个的时候就不用家-D了。
	9.	如果想要使用更高级语法，因为实例上的方法默认是不会被解析的。但这个时候你可以用一个补丁模块来解决问题， 
		@babel/polyfill下载这个的时候就不用家-D了。
		10.	在这个时候还需要给代码进行校验，看他是否规范。因此还得写个loder,yarn add eslint eslint-loader -D ,然后看eslint官网，选择demo，然后看下公司需求，选择相应的文件即可。最终下载到运行目录下。但前提是，他有规范的，要在下载的文件前加. 然而这个时候还要设置下，include:path.resolve(__dirname,'src'), exclude:/node_modules/

### 第三方模块的使用
>	先拿jquery举例子吧。那首先就得安装jquery。如果说这个时候你想要暴露出全局的loader 那就需要一个模块expose-loader(内联)
	然而我们知道的几种loader模式：
		1.pre 强制执行前面的loader    
		2.normal 普通loader
		3.内联loader
		4. post 后置loader
+	这里是第三方模块的使用方法.我们希望把jquery暴露出去，所以就用到了 expose-loader?$!jquery ,然而$的作用就是作为传参的方式，将文件暴露出去 。import $ from 'expose-loader?$!jquery' 所以如果不想在规则里写，在导入jquery的时候就要这样写。
	但如果你想写在规则中，就有第二种配置方法。{test:require.resolve('jquery'), use:'expose-loader?$' }, 详情请看‘index.js’
+	如果说，你默认就像拿到jquery的$，那就需要在每个模块中注入$对象 console.log($,'jquery'); 此时需要引入webpack插件，new webpack.ProvidePlugin({
			// 此步操作就是吧jquery注入到每个模块中
			$:'jquery'
		})
+	如果说，你就想要import $ from 'jquery' ,但是又不希望他被打包，那就用得到 externals:{jquery:'jQuery'},也就是忽略jquery
>	综上所述，第三方模块的引入方式：
	1）expose-loader 暴露到window上。
	2）providePlugin 给每个人提供一个$。 
	3）引入不打包externals。

### webpack 打包图片
>	webapck 打包图片的几种方式：
	1）在js中创建图片来引入
	2）在css引入backgound('url')，这个只要把css文件引入js中即可
	3）<img src="" alt=""/>
+	import logo from './1.JPG'; console.log(logo);也就是把图片引入，返回一个新的图片地址。这时运行还会报错，所以你就需要 yarn add file-loader -D。。。file-loader的作用会默认在内部生成一张图片，到build目录下。然后返回生成图片的名字。  此时还要去config里配置下。然后用build打包。
+	<img src="" alt=""/> 如果你想打包后得到这种结果，那就需要 yarn add html-withimg-loader -D
+	注意，一般我们在打包图片的时候都不用file-loader，一般都采取base64的方式，此时就需要用到yarn add url-loader -D。