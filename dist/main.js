/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("/* WEBPACK VAR INJECTION */(function(__dirname) {//es6语法从外部引入别的库都可以用这样的方式\nimport Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport VueResource from 'vue-resource';\nimport Element from 'element-ui';\nimport 'element-ui/lib/theme-default/index.css';\nimport App from './App.vue';\nimport Bar from './components/about.vue';\n\n// import './style/main.css';\n\n// import hello01 from \"./components/hello.vue\";\n\n//开启错误提示\nVue.config.debug = true;\n//注册element-ui组件\nVue.use(Element);\n//非常轻量的用于处理HTTP请求的插件，同$.ajax\nVue.use(VueResource);\n//0.将router注册到vue中(模块化机制)\nVue.use(VueRouter);\n//1.定义路由组件\nconst Foo = { template: '<p>This is foo!</p>' };\nimport List from './components/list.vue';\n\n//2.定义路由\nconst routes = [{ path: '/foo', component: Foo }, { path: '/list', component: List }, { path: '/bar', component: Bar }];\n//3.创建路由实例\nconst router = new VueRouter({\n\tmode: 'history',\n\tbase: __dirname,\n\troutes\n});\n\n//4.创建和挂载根实例\nconst app = new Vue({\n\trouter,\n\trender: h => h(App)\n}).$mount('#app');\n/* WEBPACK VAR INJECTION */}.call(exports, \"/\"))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbIlZ1ZSIsIlZ1ZVJvdXRlciIsIlZ1ZVJlc291cmNlIiwiRWxlbWVudCIsIkFwcCIsIkJhciIsImNvbmZpZyIsImRlYnVnIiwidXNlIiwiRm9vIiwidGVtcGxhdGUiLCJMaXN0Iiwicm91dGVzIiwicGF0aCIsImNvbXBvbmVudCIsInJvdXRlciIsIm1vZGUiLCJiYXNlIiwiX19kaXJuYW1lIiwiYXBwIiwicmVuZGVyIiwiaCIsIiRtb3VudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxPQUFPQSxHQUFQLE1BQWdCLEtBQWhCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IsY0FBeEI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLFlBQXBCO0FBQ0EsT0FBTyx3Q0FBUDtBQUNBLE9BQU9DLEdBQVAsTUFBZ0IsV0FBaEI7QUFDQSxPQUFPQyxHQUFQLE1BQWdCLHdCQUFoQjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBTCxJQUFJTSxNQUFKLENBQVdDLEtBQVgsR0FBbUIsSUFBbkI7QUFDQTtBQUNBUCxJQUFJUSxHQUFKLENBQVFMLE9BQVI7QUFDQTtBQUNBSCxJQUFJUSxHQUFKLENBQVFOLFdBQVI7QUFDQTtBQUNBRixJQUFJUSxHQUFKLENBQVFQLFNBQVI7QUFDQTtBQUNBLE1BQU1RLE1BQU0sRUFBRUMsVUFBVSxxQkFBWixFQUFaO0FBQ0EsT0FBT0MsSUFBUCxNQUFpQix1QkFBakI7O0FBRUE7QUFDQSxNQUFNQyxTQUFTLENBQ2QsRUFBQ0MsTUFBTSxNQUFQLEVBQWNDLFdBQVdMLEdBQXpCLEVBRGMsRUFFZCxFQUFDSSxNQUFNLE9BQVAsRUFBZUMsV0FBV0gsSUFBMUIsRUFGYyxFQUdkLEVBQUNFLE1BQU0sTUFBUCxFQUFjQyxXQUFXVCxHQUF6QixFQUhjLENBQWY7QUFLQTtBQUNBLE1BQU1VLFNBQVMsSUFBSWQsU0FBSixDQUFjO0FBQzVCZSxPQUFNLFNBRHNCO0FBRTVCQyxPQUFNQyxTQUZzQjtBQUc1Qk47QUFINEIsQ0FBZCxDQUFmOztBQU1BO0FBQ0EsTUFBTU8sTUFBTSxJQUFJbkIsR0FBSixDQUFRO0FBQ25CZSxPQURtQjtBQUVuQkssU0FBUUMsS0FBS0EsRUFBRWpCLEdBQUY7QUFGTSxDQUFSLEVBR1RrQixNQUhTLENBR0YsTUFIRSxDQUFaLEMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZXM26K+t5rOV5LuO5aSW6YOo5byV5YWl5Yir55qE5bqT6YO95Y+v5Lul55So6L+Z5qC355qE5pa55byPXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJztcclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJztcclxuaW1wb3J0IFZ1ZVJlc291cmNlIGZyb20gJ3Z1ZS1yZXNvdXJjZSc7XHJcbmltcG9ydCBFbGVtZW50IGZyb20gJ2VsZW1lbnQtdWknO1xyXG5pbXBvcnQgJ2VsZW1lbnQtdWkvbGliL3RoZW1lLWRlZmF1bHQvaW5kZXguY3NzJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xyXG5pbXBvcnQgQmFyIGZyb20gJy4vY29tcG9uZW50cy9hYm91dC52dWUnO1xyXG5cclxuLy8gaW1wb3J0ICcuL3N0eWxlL21haW4uY3NzJztcclxuXHJcbi8vIGltcG9ydCBoZWxsbzAxIGZyb20gXCIuL2NvbXBvbmVudHMvaGVsbG8udnVlXCI7XHJcblxyXG4vL+W8gOWQr+mUmeivr+aPkOekulxyXG5WdWUuY29uZmlnLmRlYnVnID0gdHJ1ZTtcclxuLy/ms6jlhoxlbGVtZW50LXVp57uE5Lu2XHJcblZ1ZS51c2UoRWxlbWVudCk7XHJcbi8v6Z2e5bi46L276YeP55qE55So5LqO5aSE55CGSFRUUOivt+axgueahOaPkuS7tu+8jOWQjCQuYWpheFxyXG5WdWUudXNlKFZ1ZVJlc291cmNlKTtcclxuLy8wLuWwhnJvdXRlcuazqOWGjOWIsHZ1ZeS4rSjmqKHlnZfljJbmnLrliLYpXHJcblZ1ZS51c2UoVnVlUm91dGVyKTsgXHJcbi8vMS7lrprkuYnot6/nlLHnu4Tku7ZcclxuY29uc3QgRm9vID0geyB0ZW1wbGF0ZTogJzxwPlRoaXMgaXMgZm9vITwvcD4nfVxyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvbGlzdC52dWUnO1xyXG5cclxuLy8yLuWumuS5iei3r+eUsVxyXG5jb25zdCByb3V0ZXMgPSBbXHJcblx0e3BhdGg6ICcvZm9vJyxjb21wb25lbnQ6IEZvb30sXHJcblx0e3BhdGg6ICcvbGlzdCcsY29tcG9uZW50OiBMaXN0fSxcclxuXHR7cGF0aDogJy9iYXInLGNvbXBvbmVudDogQmFyfVxyXG5dXHJcbi8vMy7liJvlu7rot6/nlLHlrp7kvotcclxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XHJcblx0bW9kZTogJ2hpc3RvcnknLFxyXG5cdGJhc2U6IF9fZGlybmFtZSxcclxuXHRyb3V0ZXNcclxufSlcclxuXHJcbi8vNC7liJvlu7rlkozmjILovb3moLnlrp7kvotcclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcblx0cm91dGVyLFxyXG5cdHJlbmRlcjogaCA9PiBoKEFwcClcclxufSkuJG1vdW50KCcjYXBwJylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);