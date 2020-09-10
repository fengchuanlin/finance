<template>
	<div class="subproject">
		<div class="hotspot">
			<div class="hotspot_top">
				<div class="left">
					<!-- 存放头像  portrait-->
					<div class="portrait"></div>
					<span>风雨顺德人</span>
				</div>
				<div class="right">
					<span>+关注</span>
				</div>
			</div>
			<div class="hotspot_buttom">
				<div class="hot_top">
					股市大家谈：创业板深幅调整，到底止跌了多少？
				</div>
				<div class="hot_center">
					<div class="center_left">
						<span>下跌的行情已经给了我们补仓机会，恐慌盘一出，就可以分批买入。市场有泸市的“上证综合指数”和深市的深证成份</span>
					</div>
					<div class="center_right">
						<div class="img">

						</div>
					</div>
				</div>
				<div class="hot_xia">
					<div class="left">
						3小时前
					</div>
					<div class="right">
						<img src="../assets/icon/gengduo.png" alt="">
						<div class="dianzan">
							<img src="../assets/icon/dianzan.png" alt="">
							42
						</div>
						<div class="xiaoxi">
							<img src="../assets/icon/xiaoxi.png" alt="">
							20
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hotspot_tuo">
			<div class="hotspot">
				<div class="hotspot_top">
					<div class="left">
						<!-- 存放头像  portrait-->
						<div class="portrait"></div>
						<span>罗小胖爱理财</span>
					</div>
					<div class="right">
						<span>+关注</span>
					</div>
				</div>
				<div class="hotspot_buttom">
					<div class="hot_top">
						普通人理财，风险与收益之间，该选择哪个更好？
					</div>
					<div class="hot_center">
						<div class="center_left">
							<span>市场有风险，投资需谨慎。这，应该是很多理财的人听到最多的一句话，这句话并不假，毕竟整个市场是不断在上下波动，而正是这种行情，有人赚钱自然就会有人亏钱</span>
						</div>
						<div class="center_right">
							<div class="img">
			
							</div>
						</div>
					</div>
					<div class="hot_xia">
						<div class="left">
							9小时前
						</div>
						<div class="right">
							<img src="../assets/icon/gengduo.png" alt="">
							<div class="dianzan">
								<img src="../assets/icon/dianzan.png" alt="">
								722
							</div>
							<div class="xiaoxi">
								<img src="../assets/icon/xiaoxi.png" alt="">
								342
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hotspot_tuo">
			<div class="hotspot">
				<div class="hotspot_top">
					<div class="left">
						<!-- 存放头像  portrait-->
						<div class="portrait"></div>
						<span>风雨顺德人</span>
					</div>
					<div class="right">
						<span>+关注</span>
					</div>
				</div>
				<div class="hotspot_buttom">
					<div class="hot_top">
						股市大家谈：创业板深幅调整，到底止跌了多少？
					</div>
					<div class="hot_center">
						<div class="center_left">
							<span>下跌的行情已经给了我们补仓机会，恐慌盘一出，就可以分批买入。市场有泸市的“上证综合指数”和深市的深证成份</span>
						</div>
						<div class="center_right">
							<div class="img">
			
							</div>
						</div>
					</div>
					<div class="hot_xia">
						<div class="left">
							3小时前
						</div>
						<div class="right">
							<img src="../assets/icon/gengduo.png" alt="">
							<div class="dianzan">
								<img src="../assets/icon/dianzan.png" alt="">
								42
							</div>
							<div class="xiaoxi">
								<img src="../assets/icon/xiaoxi.png" alt="">
								20
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.subproject {
		margin-bottom: 7%;
		.hotspot_tuo{
			margin-top: 10px;
		}
		.hotspot {
			width: 375px;
			height: 100%;
			border-top: #eee 2px solid;
			padding-top: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #fff;

			.hotspot_top {
				width: 90%;
				height: 40px;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;

				.left {
					width: 50%;
					display: flex;
					flex-direction: row;
					align-items: center;

					.portrait {
						width: 25px;
						height: 25px;
						background-color: darkgray;
					}

					span {
						font-family: "黑体";
						font-size: 13px;
						font-weight: 600;
						padding-left: 5px;
					}
				}

				.right {
					width: 60px;
					height: 22px;
					font-size: 13px;
					line-height: 22px;
					text-align: center;
					border-radius: 5px;
					color: #4A94E4;
					background-color: #EEF6FC;
				}
			}

			.hotspot_buttom {
				width: 90%;
				height: 100%;

				.hot_top {
					width: 100%;
					height: 40px;
					line-height: 40px;
					font-size: 17px;
					font-weight: bold;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-family: "黑体";
				}

				.hot_center {
					width: 100%;
					height: 75px;
					display: flex;

					.center_left {
						width: 65%;
						height: 100%;
						text-align: left;
						display: -webkit-box;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 3;
						overflow: hidden;
						line-height: 23px;

						span {
							font-size: 15px;
							font-family: "黑体";
						}
					}

					.center_right {
						width: 35%;
						height: 100%;
						overflow: hidden;
						display: flex;
						justify-content: center;
						align-items: center;

						.img {
							width: 95%;
							height: 90%;
							margin-left: 5px;
							margin-top: 4px;
							border-radius: 7px;
							background: url(../assets/gowuche.jpg) no-repeat;
							background-size: 100%;
						}
					}
				}

				.hot_xia {
					width: 100%;
					height: 50px;
					display: flex;
					justify-content: space-between;
					background-color: #fff;

					.left {
						width: 55%;
						font-size: 13px;
						font-family: "黑体";
						text-align: left;
						color: #ADADAD;
						display: flex;
						align-items: center;
					}

					.right {
						width: 40%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 15px;

						img {
							width: 25px;
							height: 25px;
						}

						.dianzan {
							width: 50px;
							height: 30px;
							display: flex;
							align-items: center;

							img {
								width: 25px;
								height: 25px;
							}
						}

						.xiaoxi {
							height: 30px;
							display: flex;
							align-items: center;

							img {
								width: 20px;
								height: 20px;
							}
						}
					}
				}
			}
		}
	}
</style>
