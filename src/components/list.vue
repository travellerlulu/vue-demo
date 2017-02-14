<template>
	<div class="movie_wrapper">
		<h2 class="list_title">豆瓣电影排行榜</h2>
		<div>
			<ul class="movie_list">
				<li v-for="article in articles" class="clearfix">
					<figure><img :src="article.images.medium" alt=""></figure>
					<div class="right">
						<h3>{{article.title}}</h3>
						<h4>导演：{{article.directors[0].name}}</h4>
						<h4 class="actors">主演：<span v-for="actor in article.casts">{{actor.name}}</span></h4>
						<h5 class="labels">
							<span v-for="label in article.genres">{{label}}</span>
						</h5>
					</div>
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
	.movie_list {padding: 30px 0;}
	.movie_list li { line-height: 32px; font-weight: bold; color: #333;padding-left: 40px;}
	.movie_list li h4 { color: #afafaf; font-size: 16px;}
	.movie_list li figure { float: left; width: 150px; height: 180px;}
	.movie_list li .right { overflow: hidden; text-align: left;}
	.movie_list li .actors span { margin-right: 10px;}
	.movie_list li .labels span { padding: 0 6px; background-color: #e2fee2; display: inline-block; margin-right: 8px; height: 20px;line-height: 20px; color: #679a67; font-weight: normal;}
</style>