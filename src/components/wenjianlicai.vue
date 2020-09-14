<template>
	<div class="rebang">
		<div class="helptou">
			<div class="zhox_neiro">
				<div class="neir_top">
					<span><img src="../assets/renwu.png" alt="">稳健理财</span>
					›
				</div>
				<div class="zhongxin">
					<div class="left">
						<span>活期收益好</span><br>
						<span class="sshongse">1.7140%</span><br>
						省心理财交给我
					</div>
					<div class="right">
						<img src="../assets/bangnitou.png" alt="">
					</div>
				</div>
				<div class="peipe_but">
					去看看
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.helptou {
		width: 240px;
		height: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		background: linear-gradient(to right, #F1F9FE, #F2F9FE);
	
		.zhox_neiro {
			width: 90%;
			height: 90%;
			display: flex;
			flex-direction: column;
	
			.neir_top {
				width: 100%;
				height: 25px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 19px;
				color: #646A70;
				img{
					width: 15px;
					height: 15px;
					padding-right: 5px;
				}
				span {
					font-size: 13px;
				}
			}
	
			.zhongxin {
				width: 100%;
				height: 60px;
				display: flex;
	
				.left {
					width: 60%;
					height: 100%;
					text-align: left;
					font-family: "黑体";
					font-size: 5px;
					color: #AFB3BA;
					line-height: 20px;
					span {
						font-size: 13px;
						font-weight: bold;
						color: #000;
					}
					.sshongse{
						color: #D86236;
						font-size: 17px;
					}
				}
	
				.right {
					width: 40%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
	
					img {
						width: 50px;
						height: 50px;
					}
				}
			}
	
			.peipe_but {
				width: 100px;
				height: 23px;
				margin-top: 10px;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: "黑体";
				font-size: 10px;
				color: #fff;
				border-radius: 50px;
				background-color: #52A2F8;
			}
		}
	}
</style>
