<template>
	<div>
		<h1 class="title">Hello App!</h1>
		<ul class="navbar_list clearfix">
			<li><router-link to="/news">Go to Foo</router-link></li>
			<li><router-link to="/list">Movie Ranking</router-link></li>
			<li><router-link to="/game">Little Game</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import Game from './components/game.vue';
	import List from './components/list.vue';
	import NewsList from './components/newsList.vue';
	import Loading from './components/loading.vue';

	export default {
		data () {
			return {
				loadingShowed22: false
			}
		},
		components: { Game, List, NewsList, Loading}
	}
</script>
<style>
	body {
		font-family: Helvetica, sans-serif; background-color: #fcfcfc;
	}
	.title { margin: 20px 0; padding-left: 50px;}
	/* main */
	.navbar_list { height: 50px; line-height: 50px;font-size: 0;}
	.navbar_list li { background-color: #ff97b9; font-size: 24px; width: 33.33%; float: left;text-align: center; font-weight: bold; border-right: 1px solid #fff;box-sizing: border-box;}
	.navbar_list li a { display: block; color: #fff;text-decoration: none; text-shadow: 3px 3px 6px rgba(51,51,51,.4);}
	.navbar_list a:last-child { border-right: none;}
	.navbar_list a.router-link-active { background-color: #d12e63;} 

</style>