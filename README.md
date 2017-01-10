# vue-demo
1.通过 `npm init` 创建package.json文件  
	根据提示填写项目相关信息  
2.安装webpack依赖  
	`npm install webpack --save-dev`  
	//自动把模块添加到depandencies部分  
	`npm install webpack --save`   
	//自动把模块添加到devDepandencies部分  
	>devDependencies  里面的插件只用于开发环境，不用于生产环境   
	>dependencies  是需要发布到生产环境的  
	简单写法：`npm i webpack -D`  
3.安装项目依赖  
	//想要加载.vue文件时，需要对应的loader去编译它，如vue-loader
	autoprefixer-loader自动添加css属性浏览器前缀  
	babel开头的是用来处理es6的  
	style-loader是用来处理.html和.vue页面内部css的  
	css-loader用来处理引入的css  
	eslint用于代码检测，统一代码风格的工具      
