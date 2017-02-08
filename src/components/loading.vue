<template>
	<div class="loading-overlay">
		<div class="sk-three-bounce">
			<div class="sk-child sk-bounce1"></div>
			<div class="sk-child sk-bounce2"></div>
			<div class="sk-child sk-bounce3"></div>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				msg1: 'this is loading'
			}
		}
		
	}
</script>
<style scoped>
	.loading-overlay {
		text-align: center;
		color: #CCC;
		font-size: 25px;
		position: fixed;
		top: 45%;
		left: 46%;
		background: rgba(0, 0, 0, 0.5);
		padding: 20px;
		border-radius: 10px;
	}
	.sk-three-bounce {
		margin: 20px auto;
		width: 185px;
		text-align: center;
	}
	.sk-three-bounce .sk-child {
		width: 20px;
		height: 20px;
		background-color: #FFFFFF;
		border-radius: 100%;
		display: inline-block;
		-webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
		animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;
	}
	.sk-three-bounce .sk-bounce1 {
		-webkit-animation-delay: -0.32s;
		animation-delay: -0.32s;
	}
	.sk-three-bounce .sk-bounce2 {
		-webkit-animation-delay: -0.16s;
		animation-delay: -0.16s;
	}
	@-webkit-keyframes sk-three-bounce {
		0%, 80%, 100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@keyframes sk-three-bounce {
		0%, 80%, 100% {
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		40% {
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
</style>