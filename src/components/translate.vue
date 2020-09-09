<template>
	<div class="translatess">
		<div class="Rotation">
			<div class="translate">
				<div class="title"><span>先进制造</span></div>
				<div class="tarnsConten">
					<div class="lim_title">
						<span>投资潜力</span>
						<div><van-rate v-model="value" :size="18" color="#F2D147" void-icon="star" void-color="#eee" /></div>
					</div>
					<div class="con_neirong">
						<div class="hB_left">
							<div class="hBleft_top">
								<span class="jiachu">华宝创新优选混合</span>
								<span>捕捉5G、新能源风口</span>
							</div>
							<div class="hBleft_buttom">
								<div>科技创新</div>
								<div>精选牛股</div>
							</div>
						</div>
						<div class="hB_right"><div class="right_but">10元上车</div></div>
					</div>
				</div>

				<div class="diBu">
					<van-icon name="photo" size="0.5rem" />
					<span>不知道怎么选，让专家「帮你投」 ></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				value: 4
			}
		},
	
		methods: {
			onChange(value) {
				Toast('当前值：' + value);
			},
		}
	}
</script>

<style lang="less" scoped>
.translate {
	width: 100%;
	height: 230px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	border-radius: 10px;
	background: linear-gradient(to right, #6d92f6, #8dcefa);

	.title {
		width: 90%;
		height: 50px;
		line-height: 50px;
		text-align: left;
		font-size: 20px;
		font-family: '黑体';
		color: #fff;
	}
	
	.tarnsConten {
		width: 90%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		border-radius: 8px;
		background-color: #fff;

		.lim_title {
			width: 95%;
			height: 35px;
			display: flex;
			align-items: center;
			color: #f4d14b;
			font-size: 18px;
			font-family: '黑体';
			border-bottom: #eee 2px solid;

			div {
				margin-left: 10px;
			}
		}
	}

	.con_neirong {
		width: 95%;
		height: 65%;
		display: flex;

		.hB_left {
			width: 50%;
			display: flex;
			flex-direction: column;

			.hBleft_top {
				height: 50%;
				line-height: 30px;
				font-family: '黑体';
				display: flex;
				text-align: left;
				flex-direction: column;
				font-size: 14px;
				color: #848484;

				.jiachu {
					font-size: 17px;
					color: #343434;
					font-weight: bold;
				}
			}

			.hBleft_buttom {
				height: 50%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 12px;

				div {
					width: 65px;
					height: 20px;
					border-radius: 3px;
					font-family: '黑体';
					color: #6c91f9;
					border: 2px #6c91f9 solid;
					font-size: 15px;
				}
			}
		}

		.hB_right {
			width: 50%;
			display: flex;
			align-items: center;

			.right_but {
				width: 80px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				margin-left: 60px;
				color: #fff;
				border-radius: 50px;
				background-color: #3b6cf6;
			}
		}
	}
	.diBu {
		width: 250px;
		height: 25px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #5382F7;
		font-family: "黑体";
		border-radius: 50px;
		background-color: #BCD6FB;
		font-size: 14px;
		margin-right: 17%;
		margin-top: 10px;
		margin-bottom: 10px;
	}
}
</style>
