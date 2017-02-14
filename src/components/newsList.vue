<template>
	<div>
		<ul>
			<li>
				<figure><img src="" alt=""></figure>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				newsList: []
			}
		},
		mounted () {
			this.$http.get('http://news-at.zhihu.com/api/4/news/latest',{}, {
				headers: {withCredentials: true,'Access-Control-Allow-Origin':'*'},emulateJSON: true
			}).then(function(response) {
				console.log(response);
				// this.newsList = response.data.subjects
			}, function(response) {
				console.log(response);
			})
		}
	}
</script>
<style>
	
</style>