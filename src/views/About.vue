<template>
	<div class="about">
		<div class="heade">
			<div class="sousuo">
				
			</div>
		</div>
		<div class="postconter">
			<div class="conter">
				<div class="zhong_con">
					<!-- 分类 -->
					<classify></classify>
					<div class="market">
						<div class="market_top">
							<market></market>
						</div>
						<div class="market_bottom">
							<div>热点</div>
							<span>#农夫山泉上市</span>
							<span>#创业板ST股</span>
							<span>#天山生物涨停</span>
						</div>
					</div>
					<!-- 轮播分类 -->
					<div class="Rotation">
						<van-tabs v-model="active" line-width="15px" background="#F8F8F8" animated swipeable sticky>
							<!-- 投资顺风车 -->
							<van-tab title="投资顺风车">
								<translate></translate>
							</van-tab>
							<!-- 攒点金子 -->
							<van-tab title="攒点金子">
								<translate></translate>
							</van-tab>
							<van-tab title="稳健理财">
								<translate></translate>
							</van-tab>
							<van-tab title="进攻优选">
								<translate></translate>
							</van-tab>
							<van-tab title="精选组合">
								<translate></translate>
							</van-tab>
							<van-tab title="保险优先">
								<translate></translate>
							</van-tab>
						</van-tabs>
					</div>
					<!-- 财富直通车 -->
					<div class="Throughtrain">
						<div class="wealth_top">
							<span class="wealth_tetle">财富直通车</span>
							<span>最近使用</span>
						</div>
						<div class="wealth_buttom">
							<van-swipe :loop="false" :width="250" :height="160">
								<van-swipe-item>
									<div class="rebang tongYi">
										<rebang></rebang>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="bangNiTou tongYi">
										<wenjianlicai></wenjianlicai>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="licai tongYi">
										<rebang></rebang>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="guangChang tongYi">
										<rebang></rebang>
									</div>
								</van-swipe-item>
								<van-swipe-item>
									<div class="duanShip tongYi">
										<rebang></rebang>
									</div>
								</van-swipe-item>
								<!-- <van-swipe-item>
									<div class="tanSuo tongYi">

									</div>
								</van-swipe-item> -->
							</van-swipe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Classify from '../components/classify.vue'
	import Translate from '../components/translate.vue'
	import Market from '../components/market.vue'
	import Rebang from '../components/rebang.vue'
	import Wenjianlicai from '../components/wenjianlicai.vue'
	export default {
		data() {
			return {
				active: 0,
				value: 4
			}
		},
		components: {
			Classify,
			Translate,
			Market,
			Rebang,
			Wenjianlicai
		}
	}
</script>
<style lang="less">
	.about{
		.Rotation{
			.van-tab{
				color: #000;
			}
			.van-tab--active {
			    color: #1919e5;
				font-family: "微软雅黑";
			    font-weight: 500;
				font-size: 17px;
			}
			.van-tabs__line{
				background-color: #3b6cf6;
			}
		}
	}
</style>
<style lang="less" scoped>
	@color: #50A49B;
	@blue: #5DA7F8;

	.custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.1);
	}

	.about {
		width: 100%;
		height: 900px;
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;

		// 头部
		.heade {
			width: 375px;
			height: 150px;
			background-color: #427af4;
			.sousuo{
				width: 100%;
				height: 50px;
				background-color: #428af6;
			}
		}

		.postconter {
			width: 100%;
		}

		// 内容
		.conter {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 375px;
			height: 100%;
			margin-top: -15%;
			margin-bottom: 23%;

			.zhong_con {
				width: 345px;
				height: 500px;
				border-radius: 10px 10px 0px 0px;

				// 股市休盘
				.market {
					width: 100%;
					height: 80px;
					overflow: hidden;
					display: flex;
					flex-direction: column;
					margin-top: 15px;
					border-radius: 10px;

					.market_top {
						height: 50%;
						overflow: hidden;
						background-color: #fff;
					}

					.market_bottom {
						height: 50%;
						display: flex;
						justify-content: space-around;
						align-items: center;
						font-size: 13px;
						color: @blue;
						background-color: #F9F9F9;

						div {
							width: 35px;
							height: 20px;
							color: #fff;
							font-size: 10px;
							border-radius: 10px 15px 0px 10px;
							background-color: #E06041;
						}
					}
				}

				// 分类
				.Rotation {
					width: 100%;
				}

				// 财富直通车
				.Throughtrain {
					width: 100%;
					height: 200px;
					margin-top: 5px;
					background-color: #fff;
					.wealth_top {
						width: 100%;
						height: 35px;
						font-size: 14px;
						display: flex;
						font-family: "黑体";
						justify-content: space-between;
						align-items: center;
						color: #B0B0B0;
						background-color: #fff;

						.wealth_tetle {
							color: #000;
							font-weight: bold;
							font-size: 17px;
						}
					}

					.wealth_buttom {
						width: 100%;
						height: 100%;

						.tongYi {
							width: 100%;
							height: 100%;
						}

						// 24小时热榜
						.rebang {
							width: 100%;
							height: 100%;
						}

						// 帮你投
						.bangNiTou {
							// background-color: cornflowerblue;
						}

						// 理财
						.licai {
							// background-color: #fff;
						}

						// 广场
						.guangChang {
							// background-color: cornsilk;
						}

						// 短视频
						// .duanShip {
						// 	background-color: darkgreen;
						// }

						// // 即刻探索
						// .tanSuo {
						// 	background-color: greenyellow;
						// }
					}

				}
			}
		}
	}
</style>
