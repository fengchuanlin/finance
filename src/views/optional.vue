<template>
	<div class="optional">
		<div class="header">
			<div class="left">
				<span>市场</span>
			</div>
			<div class="center">
				<router-link to="/optional/zixuanfund">基金</router-link>
				<router-link to="/optional/shares">股票</router-link>
			</div>
			<div class="right">
				<img src="../assets/icon/sous.png" alt="">
				<img src="../assets/icon/quanxuan.png" alt="">
			</div>
		</div>
		<router-view/>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.optional{
		width: 375px;
		height: 60px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		background-color: #427AF4;
		.header{
			width: 375px;
			height: 40px;
			margin-top: 20px;
			display: flex;
			font-family: "黑体";
			display: flex;
			.left{
				flex: 1;
				font-size: 17px;
				color: #fff;
				text-align: left;
				line-height: 40px;
				span{
					margin-left: 20px;
				}
			}
			.center{
				flex: 1;
				font-size: 17px;
				background-color: orchid;
			}
			.right{
				flex: 1;
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				img{
					width: 20px;
					height: 20px;
					padding-left: 10px;
				}
			}
		}
	}
</style>
