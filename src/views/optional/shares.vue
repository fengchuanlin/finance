<template>
	<div class="shares">
		<div class="content">
			<div class="heade">
				<div class="left">
					<div class="zstop">
						<span>上证指数</span>
					</div>
					<div class="zxbottm">
						<span>3260.35</span>
						<div class="baiFenbi">
							+0.79%
						</div>
					</div>
				</div>
				<div class="right">
					<div class="zstop">
						<span>深证成指</span>
					</div>
					<div class="zxbottm">
						<span>3260.35</span>
						<div class="baiFenbi">
							+1.57%
						</div>
					</div>
				</div>
				<div class="gengduo">
					<van-icon size="10" color="#D4D4D4" name="arrow-down" />
				</div>
			</div>
			<div class="Hotfund">
				<div class="toubu_top">
					<div>
						<img src="../../assets/remen.png" alt="">
						<span class="title">热门基金</span>
					</div>
					<span>平台高手持的一流好基</span>
				</div>
				<div class="zhongxingneir">
					<div class="left">
						<div class="jiazhi">
							<van-checkbox v-model="checked"></van-checkbox>
						</div>
						<div class="text_jzspan">
							<span class="titlesu">中欧价值发现混合A</span>
							<span>风格稳定实力基</span>
						</div>
					</div>
					<div class="right">
						<span class="hongse">
							+20.29%
						</span>
						<span>
							近一年跌幅
						</span>
					</div>
				</div>
				<div class="zhongxingneir">
					<div class="left">
						<div class="jiazhi">
							<van-checkbox v-model="checked"></van-checkbox>
						</div>
						<div class="text_jzspan">
							<span class="titlesu">中欧价值发现混合A</span>
							<span>风格稳定实力基</span>
						</div>
					</div>
					<div class="right">
						<span class="hongse">
							+20.29%
						</span>
						<span>
							近一年跌幅
						</span>
					</div>
				</div>
				<div class="zhongxingneir quxiao">
					<div class="left">
						<div class="jiazhi">
							<van-checkbox v-model="checked"></van-checkbox>
						</div>
						<div class="text_jzspan">
							<span class="titlesu">中欧价值发现混合A</span>
							<span>风格稳定实力基</span>
						</div>
					</div>
					<div class="right">
						<span class="hongse">
							+20.29%
						</span>
						<span>
							近一年跌幅
						</span>
					</div>
				</div>
				<div class="jiaru">
					加入自选  随时关注
				</div>
				<div class="tiajiqita">
					添加其他基金 ›
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
			}
		}
	}
</script>

<style lang="less" scoped>
	.shares {
		width: 100%;
		background-color: #F5F5F5;

		.content {
			width: 375px;
			height: 600px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.heade {
				width: 100%;
				height: 80px;
				display: flex;
				font-family: "黑体";
				background-color: #fff;

				.left {
					width: 45%;
					text-align: left;
					font-size: 15px;
					display: flex;
					padding-left: 15px;
					flex-direction: column;
					justify-content: center;

					.zstop {
						font-size: 15px;
					}

					.zxbottm {
						color: #D86236;
						padding-top: 5px;
						display: flex;
						align-items: center;

						span {
							font-weight: bold;
						}

						.baiFenbi {
							margin-left: 10px;
							text-align: center;
							width: 45px;
							font-size: 10px;
							height: 15px;
							background-color: #FCF0EB;
						}
					}
				}

				.right {
					width: 40%;
					text-align: left;
					font-size: 15px;
					display: flex;
					flex-direction: column;
					justify-content: center;

					.zstop {
						font-size: 15px;
					}

					.zxbottm {
						color: #D86236;
						padding-top: 5px;
						display: flex;
						align-items: center;

						span {
							font-weight: bold;
						}

						.baiFenbi {
							margin-left: 10px;
							text-align: center;
							width: 45px;
							font-size: 10px;
							height: 15px;
							background-color: #FCF0EB;
						}
					}
				}

				.gengduo {
					width: 10%;
					height: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}

			.Hotfund {
				width: 90%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 10px;
				border-radius: 10px;
				background-color: #fff;

				.toubu_top {
					width: 100%;
					height: 100px;
					font-size: 15px;
					color: #A3A2A2;
					font-family: "黑体";
					display: flex;
					justify-content: center;
					flex-direction: column;
					background: linear-gradient(to bottom, #FAE5E1, #FFFCFB);
					img {
						width: 20px;
						height: 20px;
					}

					.title {
						color: #000;
						font-weight: bold;
						padding-bottom: 5px;
					}
				}
				.quxiao{
					border-bottom: #eee 0px solid;
				}
				.zhongxingneir {
					width: 100%;
					height: 70px;
					display: flex;
					background-color: #fff;
					font-size: 14px;
					text-align: left;
					color: #A6A5A5;
					border-bottom: #eee 2px solid;
					.left {
						width: 60%;
						height: 100%;
						display: flex;

						.jiazhi {
							width: 20%;
							height: 100%;
							display: flex;
							justify-content: center;
							align-items: center;
						}

						.text_jzspan {
							width: 80%;
							height: 100%;
							display: flex;
							justify-content: center;
							flex-direction: column;
							font-family: "黑体";
							.titlesu{
								color: #000;
								font-size: 17px;
							}
						}
					}

					.right {
						width: 40%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						.hongse{
							color: #D86034;
							font-size: 17px;
							font-weight: bold;
						}
					}
				}
				.jiaru{
					width: 80%;
					height: 40px;
					font-size: 16px;
					color: #fff;
					line-height: 40px;
					font-family: "黑体";
					margin-top: 10px;
					background-color: #3B6CF6;
				}
				.tiajiqita{
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size: 15px;
					color: #A2A2A2;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>
