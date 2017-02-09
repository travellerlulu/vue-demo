<template>
	<div class="movie_wrapper">
		<h2 class="list_title">豆瓣电影排行榜</h2>
		<div>
			<ul class="movie_list">
				<li v-for="article in articles">
					<h3>{{article.title}}</h3>
					<h4>导演：{{article.directors[0].name}}</h4>
					<!-- <h4>主演：<span v-for="actor in article.casts"></span>{{actor.name}}</h4>
					<h5 class="labels">
						<span v-for="label in article.genres">{{label}}</span>
					</h5> -->
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	//es6 模块导出
	export default {
		props: ['loadingShowed'],
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
	.movie_wrapper { width: 60%; background-color: #fff; margin: 40px auto 0; border: 2px solid #ccc; text-align: center;  border-radius: 10px; box-shadow: 0 2px 10px rgba(5,5,5,.2);}
	.list_title { color: #20A0FF; font-size: 20px; line-height: 60px; font-weight: bold; border-bottom: 1px solid #ccc; height: 60px;}
	.movie_list {padding: 20px 0;}
	.movie_list li { line-height: 32px; font-weight: bold; color: #333;}
	.movie_list li h4 { color: #afafaf; font-size: 16px;}
</style>