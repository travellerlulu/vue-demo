<template>
	<div>
		<h1>{{msg1}}</h1>
		<p>This is my component</p>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	//es6 模块导出
	export default {
		data () {
			return {
				msg1: 'this is about'
			}
		}
		
	}

</script>

<style>
	
</style>