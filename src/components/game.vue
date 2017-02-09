<template>
	<div class="game_wrapper">
		<h2>This is a little game!</h2>
		<p class="des">You can move the Spaces near any grid</p>
		<div class="grid_box">
			<ul class="grid_list">
				<li v-for="(list, index) in lists" :class="list == '' ? 'blank' : ''" @click="moveGrid(index)">{{list}}</li>
			</ul>
		</div>
		<button class="reset" @click="render">reset</button>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	//es6 模块导出
	const column = 3;
	const len = column*column;
	export default {
		data () {
			return {
				lists: []
			}
		},
		methods: {
			render () {  //界面渲染
				var list = [];
				for(var i = 0; i < len-1; i++) {
					list.push(i + 1);
				}
				//随机排序
				list = list.sort(function() {
					return Math.random() -0.5;
				})
				list.push('');
				this.lists = list; 
			},
			moveGrid (index) {  //移动格子
				var top = this.lists[index - column];
				var left = this.lists[index - 1];
				var right = this.lists[index + 1];
				var bottom = this.lists[index + column];
				var current = this.lists[index];
				if(top === '') {
					this.lists.splice(index - column, 1, current);
					this.lists.splice(index, 1, '');
					//另一种方法
					// this.$set(this.lists, index-column, current);
					// this.$set(this.lists, index, '');
				} else if(left === '') {
					this.lists.splice(index - 1, 1, current);
					this.lists.splice(index, 1, '');
				} else if(right === '') {
					this.lists.splice(index + 1, 1, current);
					this.lists.splice(index, 1, '');
				} else if(bottom === '') {
					this.lists.splice(index + column, 1, current);
					this.lists.splice(index, 1, '');
				}
				if(this.lists[len-1] === '') {
					var isSuccessed = this.lists.every((v,i) => v === i + 1)
					if(isSuccessed) {
						alert("666!!!竟然被你拼出来了，真是一个富有挑战精神的人啊~希望你没有妄想要看到别的什么惊喜，并没有~真的没有~");
					}
				}
			}
		},
		created () {
			this.render();
		}
	}
</script>

<style>
	.game_wrapper { width: 60%; margin: 40px auto 0; background-color: #fff; margin: 40px auto 0; border: 2px solid #ccc; text-align: center;  border-radius: 10px; box-shadow: 0 2px 10px rgba(5,5,5,.2);}
	h2 { line-height: 40px; height: 40px;}
	.des { line-height: 28px;}
	.grid_box { margin: 30px 0; text-align: center;}
	.grid_list { width: 200px; overflow: hidden; list-style: none;border-left: 1px solid #fff;border-top: 1px solid #fff; margin: 30px auto;}
	.grid_list li { width: 60px; height: 60px; float: left; text-align: center; background-color: pink; color: #fff; line-height: 60px; font-weight: bold; border-right: 1px solid #fff; border-bottom: 1px solid #fff; cursor: pointer; font-size: 18px;}
	.grid_list li.blank { background-color: #f5f5f5; box-shadow: 1px 1px 5px rgba(0,0,0,.3) inset;}
	.reset { margin: 20px 0; height: 36px; line-height: 35px; background-color: #db5f85; color: #fcfcfc; width: 120px; text-align: center; border-radius: 8px; border: none; font-size: 16px;outline: none;}
	.reset:hover { background-color: #e37698; cursor: pointer;}
</style>