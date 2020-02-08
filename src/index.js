// let str =require('./a');
// console.log(str);
// // 导入css文件
// require('./index.css')
// // 导入less文件
// require('./index.less')

// // 下面就是利用bouble转化es5的..
// let fn=()=>{
// 	console.log('111');
// }
// fn();
// // 如果写了一个更高级的语法比如说class，就需要另个插件了yarn add @babel-plugin-proposal-class-properties -D 
// // @log 也就是所谓的装饰器
// @log

// class A{
// 	a=6666
// }
// let a =new A();
// console.log(a.a);

// function log(target) {
// 	console.log(target,'A');
// }





// 这里是第三方模块的使用方法.我们希望把jquery暴露出去，所以就用到了 expose-loader?$!jquery ,然而$的作用就是作为传参的方式，将文件暴露出去
// import $ from 'expose-loader?$!jquery'
// console.log(window.$);
// import $ from 'jquery' //在准备注入全局对象的时候，就要把它关掉了

// 如果说这个时候你想要暴露出全局的loader 那就需要一个模块expose-loader;
// 如果说，你默认就像拿到jquery的$，那就需要在每个模块中注入$对象
// console.log($,'jquery');

// webpack 打包图片
import './index.less'
import logo from './1.jpg'

let image = new Image();
console.log(logo);
image.src = logo;
// image.src = "./1.JPG";//如果你用这个方式引入的话，那打包出来就是一个字符串,甚至还会报错，1.JPG:1 GET http://127.0.0.1:5500/build/1.JPG 404 (Not Found)
document.body.appendChild(image);


