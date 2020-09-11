<template>
	<div class="fund">
		<div class="addStock">
			<span>+添加股票</span>
		</div>
		<span class="text_span">行情由第三方提供，详见使用声明</span>
		<div class="exponent">
			<jijinsum></jijinsum>
		</div>
	</div>
</template>

<script>
	import Jijinsum from '../../components/jijinsum.vue'
	export default{
		components:{
			Jijinsum
		}
	}
</script>

<style lang="less" scoped>
	.fund{
		height: 570px;
		background-color: #F8F8FA;
		.addStock{
			width: 375px;
			height: 50px;
			line-height: 50px;
			font-size: 17px;
			font-family: "黑体";
			background-color: #fff;
		}
		.text_span{
			font-size: 13px;
			font-family: "黑体";
			color: #979797;
		}
		.exponent{
			width: 100%;
			height: 35px;
			border-top: #eee 2px solid;
			border-bottom: #eee 2px solid;
			position: fixed;
			bottom: 50px;
			background-color: #fff;
		}
	}
</style>
