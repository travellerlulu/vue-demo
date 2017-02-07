<template>
	<div>
		<h2 class="list_title">豆瓣电影排行榜</h2>
		<ul>
			<li v-for="article in articles">
				{{article.title}}
			</li>
		</ul>
	</div>
	
</template>

<script>
	//es6 模块导出
	export default {
		data () {
			return {
				articles: []
			}
		},
		mounted () {
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{},{
				headers: {},
				emulateJSON: true
			}).then(function (response) {
				//处理正确的回调
				this.articles = response.data.subjects
			}, function (response) {
				//这里是处理错误的回调
				console.log(response);
			})
		}
		
	}
</script>
<style scoped>
	.list_title { color: blue; font-size: 16px; margin-bottom: 20px;}
</style>