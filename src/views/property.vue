<template>
	<div class="property">
		<div class="header">
			<div class="touBu">
				
			</div>
		</div>
		<div class="content">
			<div class="personal">
				<div class="personal_top">
					<div class="left">
						<div class="headsculpture">
							
						</div>
						<div class="username">
							<span class="Tname">
								冯传林 ›
							</span>
							<span>理财的第一天</span>
						</div>
					</div>
					<div class="right">
						<div class="zichan">
							<span>资产配置升级</span>
							<div class="zichan_btn">
								开启三笔钱
							</div>
						</div>
					</div>
				</div>
				<div class="personal_bottom">
					<div class="xia_Dibu">
						<img src="../assets/icon/zixuan.png" alt="">
						<span>
							本月跑赢了多少用户？去看看
						</span>
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
						<div class="right">
							<span>账户安全险免费升级 ›</span>
						</div>
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
							<span class="prise">
								余额
							</span>
							<span>0.00</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise">
									余额宝
								</span>
								<span>0.00</span>
							</div>
							<div class="youbian">
								0.00
							</div>
						</div>
					</div>
					<div class="balance">
						<div class="left">
							<span class="prise">
								理财产品
							</span>
							<span>收益健康</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise">
									基金
								</span>
								<span>费率1折起</span>
							</div>
						</div>
					</div>
					<div class="balance">
						<div class="left">
							<span class="prise">
								黄
							</span>
							<span>收益健康</span>
						</div>
						<div class="right">
							<div class="zuobian">
								<span class="prise">
									
								</span>
								<span></span>
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
		.content{
			width: 375px;
			height: 1000px;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #5DA7F8;
			
			// 个人信息
			.personal{
				width: 90%;
				height: 140px;
				position: absolute;
				overflow: hidden;
				top: 60px;
				border-radius: 10px;
				background-color: #FFFFFF;
				box-shadow: 1px 1px 20px -20px #000;
				.personal_top{
					width: 100%;
					height: 100px;
					display: flex;
					.left{
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						.headsculpture{
							width: 50px;
							height: 50px;
							border-radius: 50px;
							background-color: #eee;
						}
						.username{
							height: 45px;
							display: flex;
							justify-content: space-between;
							display: flex;
							text-align: left;
							padding-left: 10px;
							color: #000;
							font-family: "黑体";
							flex-direction: column;
							font-size: 13px;
							.Tname{
								font-size: 18px;
								font-weight: bold;
							}
						}
					}
					.right{
						flex: 1;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.zichan{
							height: 50px;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							font-size: 15px;
							padding-right: 10px;
							color:#427AF4 ;
							font-family: "黑体";
							.zichan_btn{
								width: 85px;
								height: 25px;
								line-height: 25px;
								text-align: center;
								margin-top: 5px;
								font-size: 12px;
								border-radius: 15px;
								background-color: #E7F1FE;
							}
						}
						
					}
				}
				.personal_bottom{
					width: 100%;
					height: 40px;
					display: flex;
					justify-content: center;
					.xia_Dibu{
						width: 95%;
						height: 100%;
						text-align: left;
						color: #A8A8A8;
						display: flex;
						align-items: center;
						border-top: #EFF1F4 2px solid;
						img{
							width: 20px;
							height: 20px;
						}
						span{
							font-family: "黑体";
							padding-left: 5px;
							font-size: 13px;
						}
					}
				}
			}
			.neiRong{
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 17%;
				.Myassets{
					width: 90%;
					height: 300px;
					overflow: hidden;
					border-radius: 10px;
					background-color: #fff;
					box-shadow: -3px 0px 23px -17px #000;
					.woDezichan{
						width: 100%;
						height: 15%;
						display: flex;
						text-align: left;
						border-bottom: #FCFCFC 2px solid;
						.left{
							flex: 1;
							padding-left: 10px;
							display: flex;
							align-items: center;
							font-size: 17px;
							font-weight: bold;
							span{
								margin-right: 5px;
							}
						}
						.right{
							flex: 1;
							display: flex;
							justify-content: flex-end;
							align-items: center;
							span{
								margin-right: 5px;
								color: #A1A1A1;
								font-size: 12px;
							}
						}
					}
					.sumzichan{
						width: 100%;
						height: 23%;
						font-size: 15px;
						font-family: "黑体";
						text-align: left;
						align-items: center;
						display: flex;
						border-bottom: #FCFCFC 2px solid;
						.left{
							flex: 1;
							display: flex;
							flex-direction: column;
							span{
								padding-left: 10px;
							}
							.pries{
								padding-top: 5px;
								font-weight: bold;
								font-size: 18px;
							}
						}
						.right{
							flex: 1;
							text-align: right;
							display: flex;
							flex-direction: column;
							span{
								padding-right: 10px;
							}
							.shouyi{
								font-size: 18px;
								color: #9A9A9A;
								margin-top: 5px;
							}
						}
					}
					.balance{
						width: 100%;
						height: 20%;
						display: flex;
						border-bottom: #FCFCFC 2px solid;
						.left{
							flex: 1;
							text-align: left;
							justify-content: center;
							display: flex;
							line-height: 25px;
							flex-direction: column;
							font-size: 15px;
							border-right: #FCFCFC 2px solid;
							span{
								color: #9F9F9F;
								padding-left: 10px;
							}
							.prise{
								font-size: 17px;
								color: #000;
								font-family: "黑体";
							}
						}
						.right{
							flex: 1;
							display: flex;
							align-items: center;
							font-size: 15px;
							line-height: 25px;
							color: #9F9F9F;
							.zuobian{
								width: 70%;
								height: 100%;
								text-align: left;
								justify-content: center;
								display: flex;
								flex-direction: column;
								span{
									padding-left: 10px;
								}
								.prise{
									font-size: 17px;
									color: #000;
									font-family: "黑体";
								}
							}
							.youbian{
								width: 30%;
								height: 80%;
							}
						}
					}
				}
			}
		}
	}
</style>
