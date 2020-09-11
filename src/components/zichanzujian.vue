<template>
	<div class="zichanzujian">
		<div class="content">
			<div class="personal">
				<div class="personal_top">
					<div class="left">
						<div class="headsculpture"><van-image round width="1.5rem" height="1.5rem" src="https://img.yzcdn.cn/vant/cat.jpeg" /></div>
						<div class="username">
							<span class="Tname">冯传林 ›</span>
							<span>理财的第一天</span>
						</div>
					</div>
					<div class="right">
						<div class="zichan">
							<span>资产配置升级</span>
							<div class="zichan_btn">开启三笔钱</div>
						</div>
					</div>
				</div>
				<div class="personal_bottom">
					<div class="xia_Dibu">
						<img src="../assets/icon/zixuan.png" alt="" />
						<span>本月跑赢了多少用户？去看看</span>
					</div>
				</div>
			</div>
			<div class="neiRong">
				<div class="Myassets">
					<div class="woDezichan">
						<div class="left">
							<span>我的资产</span>
							<van-icon name="eye-o" size="0.45rem" color="#B8B8B8" />
						</div>
						<div class="right"><span>账户安全险免费升级 ›</span></div>
					</div>
					<div class="sumzichan">
						<div class="left">
							<span>总资产</span>
							<span class="pries">0.00</span>
						</div>
						<div class="right">
							<span>昨日收益</span>
							<span class="shouyi">0.00</span>
						</div>
					</div>
					<div class="balance">
						<div class="left">
							<span class="prise">余额</span>
							<span>0.00</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise">余额宝</span>
								<span>0.00</span>
							</div>
							<div class="youbian">0.00</div>
						</div>
					</div>
					<div class="balance">
						<div class="left">
							<span class="prise">理财产品</span>
							<span>收益稳健</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise">基金</span>
								<span>费率1折起</span>
							</div>
						</div>
					</div>
					<div class="balance">
						<div class="left">
							<span class="prise">黄金</span>
							<span>1元起买</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise"></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
				<div class="safeguard">
					<div class="woDe"><span>我的保障</span></div>
					<div class="quantity">
						<span class="baoxian">保险</span>
						<span>1位家人保障中</span>
					</div>
				</div>
				<!-- 账单各大类 -->
				<div class="category">
					<!-- 账单 -->
					<div class="account">
						<div class="left">
							<img src="../assets/zhangdan.png" alt="" />
							<span>账单</span>
						</div>
						<div class="right">
							<p></p>
							<span>›</span>
						</div>
					</div>
					<!-- 银行卡 -->
					<div class="account">
						<div class="left">
							<img src="../assets/yinhangka.png" alt="" />
							<span>银行卡</span>
						</div>
						<div class="right">
							<p>4</p>
							<span>›</span>
						</div>
					</div>
					<div class="account">
						<div class="left">
							<img src="../assets/youhuijuan.png" alt="" />
							<span>卷包</span>
						</div>
						<div class="right">
							<p></p>
							<span>›</span>
						</div>
					</div>
					<div class="account diebuttom">
						<div class="left">
							<img src="../assets/huodong.png" alt="" />
							<span>活动</span>
						</div>
						<div class="right">
							<p></p>
							<span>›</span>
						</div>
					</div>
				</div>
				<!-- 借呗 -->
				<div class="Borrow">
					<div class="account">
						<div class="left">
							<img src="../assets/jiebe.png" alt="" />
							<span>借呗</span>
						</div>
						<div class="right">
							<p></p>
							<span>›</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="less" scoped>
.zichanzujian {
	width: 100%;
	height: 100%;
	.content {
		width: 375px;
		height: 850px;
		display: flex;
		flex-direction: column;
		align-items: center;

		// 个人信息
		.personal {
			width: 90%;
			height: 140px;
			position: absolute;
			overflow: hidden;
			top: 60px;
			border-radius: 10px;
			background-color: #ffffff;
			box-shadow: 1px 1px 20px -20px #000;
			.personal_top {
				width: 100%;
				height: 100px;
				display: flex;
				.left {
					flex: 1;
					display: flex;
					justify-content: center;
					align-items: center;
					.headsculpture {
						width: 50px;
						height: 50px;
						overflow: hidden;
						border-radius: 50px;
						background-color: #eee;
					}
					.username {
						height: 45px;
						display: flex;
						justify-content: space-between;
						display: flex;
						text-align: left;
						padding-left: 10px;
						color: #000;
						font-family: '黑体';
						flex-direction: column;
						font-size: 13px;
						.Tname {
							font-size: 18px;
							font-weight: bold;
						}
					}
				}
				.right {
					flex: 1;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.zichan {
						height: 50px;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						font-size: 15px;
						padding-right: 10px;
						color: #427af4;
						font-family: '黑体';
						.zichan_btn {
							width: 85px;
							height: 25px;
							line-height: 25px;
							text-align: center;
							margin-top: 5px;
							font-size: 12px;
							border-radius: 15px;
							background-color: #e7f1fe;
						}
					}
				}
			}
			.personal_bottom {
				width: 100%;
				height: 40px;
				display: flex;
				justify-content: center;
				.xia_Dibu {
					width: 95%;
					height: 100%;
					text-align: left;
					color: #a8a8a8;
					display: flex;
					align-items: center;
					border-top: #eff1f4 2px solid;
					img {
						width: 20px;
						height: 20px;
					}
					span {
						font-family: '黑体';
						padding-left: 5px;
						font-size: 13px;
					}
				}
			}
		}
		.neiRong {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 17%;
			.Myassets {
				width: 90%;
				height: 300px;
				overflow: hidden;
				border-radius: 10px;
				background-color: #fff;
				box-shadow: -3px 0px 23px -17px #000;
				.woDezichan {
					width: 100%;
					height: 15%;
					display: flex;
					text-align: left;
					border-bottom: #fcfcfc 2px solid;
					.left {
						flex: 1;
						padding-left: 10px;
						display: flex;
						align-items: center;
						font-size: 17px;
						font-weight: bold;
						span {
							margin-right: 5px;
						}
					}
					.right {
						flex: 1;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						span {
							margin-right: 5px;
							color: #a1a1a1;
							font-size: 12px;
						}
					}
				}
				.sumzichan {
					width: 100%;
					height: 23%;
					font-size: 15px;
					font-family: '黑体';
					text-align: left;
					align-items: center;
					display: flex;
					border-bottom: #fcfcfc 2px solid;
					.left {
						flex: 1;
						display: flex;
						flex-direction: column;
						span {
							padding-left: 10px;
						}
						.pries {
							padding-top: 5px;
							font-weight: bold;
							font-size: 18px;
						}
					}
					.right {
						flex: 1;
						text-align: right;
						display: flex;
						flex-direction: column;
						span {
							padding-right: 10px;
						}
						.shouyi {
							font-size: 18px;
							color: #9a9a9a;
							margin-top: 5px;
						}
					}
				}
				.balance {
					width: 100%;
					height: 20%;
					display: flex;
					border-bottom: #fcfcfc 2px solid;
					.left {
						flex: 1;
						text-align: left;
						justify-content: center;
						display: flex;
						line-height: 25px;
						flex-direction: column;
						font-size: 15px;
						border-right: #fcfcfc 2px solid;
						span {
							color: #9f9f9f;
							padding-left: 10px;
						}
						.prise {
							font-size: 17px;
							color: #000;
							font-family: '黑体';
						}
					}
					.right {
						flex: 1;
						display: flex;
						align-items: center;
						font-size: 15px;
						line-height: 25px;
						color: #9f9f9f;
						.zuobian {
							width: 70%;
							height: 100%;
							text-align: left;
							justify-content: center;
							display: flex;
							flex-direction: column;
							span {
								padding-left: 10px;
							}
							.prise {
								font-size: 17px;
								color: #000;
								font-family: '黑体';
							}
						}
						.youbian {
							width: 30%;
							height: 80%;
						}
					}
				}
			}
			.safeguard {
				width: 90%;
				height: 100px;
				border-radius: 10px;
				margin-top: 15px;
				background-color: #fff;
				box-shadow: 0px 0px 15px -9px #000;
				.woDe {
					width: 100%;
					height: 40%;
					display: flex;
					align-items: center;
					text-align: left;
					font-size: 17px;
					font-weight: bold;
					border-bottom: #fcfcfc 2px solid;
					span {
						padding-left: 10px;
					}
				}
				.quantity {
					width: 100%;
					height: 60%;
					font-size: 15px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					text-align: left;
					span {
						color: #9f9f9f;
						padding-left: 10px;
					}
					.baoxian {
						font-size: 17px;
						color: #000;
						font-family: '黑体';
						padding-bottom: 5px;
					}
				}
			}
			// 各大类  账单  银行卡...4
			.category {
				width: 90%;
				height: 200px;
				display: flex;
				flex-direction: column;
				margin-top: 15px;
				border-radius: 10px;
				background-color: #fff;
				box-shadow: 0px 0px 20px -17px #000;
				.account {
					flex: 1;
					display: flex;
					align-items: center;
					font-family: '黑体';
					border-bottom: #fcfcfc 2px solid;
					justify-content: space-between;
					text-align: left;
					.left {
						width: 200px;
						height: 100%;
						display: flex;
						align-items: center;
						font-size: 17px;
						font-weight: bold;
						img {
							padding-left: 10px;
							width: 20px;
							height: 20px;
						}
						span {
							padding-left: 10px;
						}
					}
					.right {
						width: 30px;
						height: 20px;
						display: flex;
						color: #b1b5c1;
						justify-content: space-between;
						align-items: center;
						font-size: 19px;
						margin-right: 10px;
						span {
							font-size: 30px;
							padding-bottom: 6px;
						}
					}
				}
				// 去掉活动下划线
				.diebuttom {
					border-bottom: #fcfcfc 0px solid;
				}
				.bankCard {
					flex: 1;
					background-color: orange;
				}
				.wraparound {
					flex: 1;
					background-color: burlywood;
				}
				.activity {
					flex: 1;
					background-color: crimson;
				}
			}
			// 借呗
			.Borrow {
				width: 90%;
				height: 50px;
				display: flex;
				align-items: center;
				margin-top: 15px;
				border-radius: 10px;
				box-shadow: -3px 0px 23px -17px #000;
				background-color: #fff;
				.account {
					flex: 1;
					display: flex;
					align-items: center;
					font-family: '黑体';
					border-bottom: #fcfcfc 2px solid;
					justify-content: space-between;
					text-align: left;
					.left {
						width: 200px;
						height: 100%;
						display: flex;
						align-items: center;
						font-size: 17px;
						font-weight: bold;
						img {
							padding-left: 10px;
							width: 20px;
							height: 20px;
						}
						span {
							padding-left: 10px;
						}
					}
					.right {
						width: 30px;
						height: 20px;
						display: flex;
						color: #b1b5c1;
						justify-content: space-between;
						align-items: center;
						font-size: 19px;
						margin-right: 10px;
						span {
							font-size: 30px;
							padding-bottom: 6px;
						}
					}
				}
			}
		}
	}
}
</style>
