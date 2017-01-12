var path = require('path');
//NodeJS中的Path对象，用于处理目录的对象，提高开发效率

//模块导出
module.exports = {
	//入口文件地址
	entry:'./src/main.js',
	//输出
	output: {
		//文件地址，使用绝对路径形式
		path: path.join(__dirname, './dist/'),
		//[name]根据webpack提供的入口文件自动生成的名字
		filename:'[name].js',
		//公共文件生成的地址
		publicPath: '/dist/'
	},
	//loaders
	module: {
		loaders:[
			{ test: /\.vue$/, loader: 'vue'},
			//转化es6的语法
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/},
			//编译css并自动添加前缀，如-webkit-等，多个loaders用!连接
			{ test: /\.css$/, loader: 'style!css!autoprefixer'},
			//图片转化，小于8k自动转化为base64的编码，?用于传参
			{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
			//html模板编译
			{ test: /\.(html|tpl)$/, loader: 'html-loader'},
		]
	},
	babel: {
		presets: ['es2015']
	},
	resolve: {
		//用于指明程序自动补全识别哪些后缀,注意, extensions 第一个是空字符串! 对应不需要后缀的情况.
		extention: ['','.js','.vue'],
		//把用户的一个请求重定向到另一个路径
		alias: {
			//默认 NPM 包导出的是 运行时 构建。为了使用独立构建，在 webpack 配置中添加下面的别名：
			'vue$': 'vue/dist/vue.common.js'
		}
	},
	//开启source-map,webpack有多种source-map,
	devtool: 'eval-source-map'

}