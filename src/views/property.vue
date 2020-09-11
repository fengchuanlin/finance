<template>
	<div class="property">
		<div class="header">
			<div class="touBu">
				
			</div>
		</div>
		<zichanzujian></zichanzujian>
	</div>
</template>

<script>
	import Zichanzujian from '../components/zichanzujian.vue'
	export default{
		
		components:{
			Zichanzujian
		}
	}
</script>

<style lang="less">
	.property{
		// 头部
		.header{
			width: 375px;
			height: 150px;
			background-color: #427af4;
			.touBu{
				width: 100%;
				height: 60px;
				position: fixed;
				top: 0;
				background-color: rgba(0,0,0,0.1);
			}
		}
		
	}
</style>
