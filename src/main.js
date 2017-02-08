//es6语法从外部引入别的库都可以用这样的方式
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import Bar from './components/about.vue';
import './style/main.css';
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element)

//开启错误提示
Vue.config.debug = true;

//非常轻量的用于处理HTTP请求的插件，同$.ajax
Vue.use(VueResource);
//0.将router注册到vue中(模块化机制)
Vue.use(VueRouter); 
//1.定义路由组件
const Foo = { template: '<p>This is foo!</p>'}
import List from './components/list.vue';

//2.定义路由
const routes = [
	{path: '/foo',component: Foo},
	{path: '/list',component: List},
	{path: '/bar',component: Bar}
]
//3.创建路由实例
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes
})

//4.创建和挂载根实例
const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

Vue.http.interceptors.push((request, next) => {
	console.log(App)
	next((response) => {
		return response
	})
})