module.exports = "wangfengbaobei"
require('@babel/polyfill')
class B {

}
function* gen(params) {
	yield 1
}
console.log(gen().next());

// 如果想要使用更高级语法，因为实例上的方法默认是不会被解析的。但这个时候你可以用一个补丁模块来解决问题， @babel/polyfill
'aaa'.includes('a')


