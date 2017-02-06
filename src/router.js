import Vue from 'vue';
import VueRouter from 'vue-router';
// import About from 'about';
// import Foo from 'foo';

// Vue.use(VueRouter);

//定义路由，可以从其他文件import进来
/*const routes = [
	{path: '/foo',component: Foo, name: 'foo'},
	{path: '/about',component: About, name: 'about'}
]*/

var Foo = Vue.extend({
	template: '<p>This is foo!</p>'
})
var Bar = Vue.extend({
	template: '<p>This is bar!</p>'
})
var App = Vue.extend({})
var router = new VueRouter(
	//mode 设置路由模式，可选值 "hash" | "history" | "abstract"
	//hash：(默认)使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
	//history：依赖 HTML5 History API 和服务器配置
	//abstract：支持所有 JavaScript 运行环境，如 Node.js 服务器端。
	//当 <router-link> 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active
	//（缩写）相当于routes:routes
	// mode: 'hash',
	// routes
)
router.map({
	'/bar': {component: Bar},
	'/foo': {component: Foo}
})

router.start(App, "#app")
export default router;