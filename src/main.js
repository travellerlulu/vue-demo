//es6语法从外部引入别的库都可以用这样的方式
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar from './components/about.vue';

// import hello01 from "./components/hello.vue";

//开启错误提示
Vue.config.debug = true;
//0.将router注册到vue中(模块化机制)
Vue.use(VueRouter); 
//1.定义路由组件
const Foo = { template: '<p>This is foo!</p>'}

//2.定义路由
const routes = [
	{path: '/foo',component: Foo},
	{path: '/bar',component: Bar}
]
//3.创建路由实例
const router = new VueRouter({
	routes
})

//4.创建和挂载根实例
const app = new Vue({
	router
	// components: {Bar}
}).$mount('#app')