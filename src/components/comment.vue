<template>
	<div class="comment">
		<div class="comment">
			<div class="qu_top">
				<span class="title">我的讨论区</span>
				<span>自选＆持有 ›</span>
			</div>
			<div class="qu_buttom">
				<div>
					<div class="left">
						<img src="../assets/yuebao.png" alt="">
					</div>
					<div class="qu_text">持</div>
				</div>
				<div class="right">
					<div class="span_Righ">余额宝讨论区</div>
					<span><span class="huangse">[60条]</span>吃肉你不在，割肉你最快~</span>
				</div>
			</div>
		</div>
		<div class="wealth">
			<div class="wealth_top">
				<div class="top">
					<span class="title">财富小组</span>
					<span>全部 ›</span>
				</div>
				<div class="bottom">
					<div class="jijin_left">
						<div class="text_sp">
							<span>基金综合</span>
							<div class="btn_unt">
								<span>[99+条]</span>华泰博瑞基...
							</div>
						</div>
					</div>
					<div class="jijin_left">
						<div class="text_sp">
							<span>博时全球粉丝后援会</span>
							<div class="btn_unt">
								<span>[99+条]</span>华泰博瑞基...
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="wealth_bottom">
				<div class="gedalei">
					<div class="left">
						<img src="../assets/chaogu.jpg" alt="">
					</div>
					<div class="right">
						<span class="title">模拟炒股小组</span>
						<span>韭菜还在吗</span>
					</div>
				</div>
				<div class="gedalei">
					<div class="left">
						<img src="../assets/jijinfensituan.jpeg" alt="">
					</div>
					<div class="right">
						<span class="title">平安基金粉丝团小组</span>
						<span>据说60亿到了？提前结束吧[流泪]最讨厌末日比例</span>
					</div>
				</div>
				<div class="gedalei">
					<div class="left">
						<img src="../assets/xiaozu.jpg" alt="">
					</div>
					<div class="right">
						<span class="title">大家都说定投小组</span>
						<span>9月10日，三阶增强低估定投策略宽基136期操作</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	.comment{
		.comment{
			width: 375px;
			height: 145px;
			border-top: #eee 2px solid;
			padding-top: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #fff;
			.qu_top{
				width: 90%;
				height: 50px;
				font-size: 15px;
				color: #9F9F9F;
				font-family: "黑体";
				display: flex;
				align-items: center;
				justify-content: space-between;
				.title{
					font-size: 20px;
					color: #000;
				}
			}
			.qu_buttom{
				width: 90%;
				height: 80px;
				overflow: hidden;
				display: flex;
				justify-content: space-between;
				.left{
					width: 27%;
					height: 80px;
					position: absolute;
					display: flex;
					justify-content: center;
					align-items: center;
					background: linear-gradient(to bottom, #E6752F, #D45D26);
					border-radius: 10px 10px 10px 5px;
					img{
						width: 60%;
						height: 80%;
					}
				}
				.qu_text{
					width: 26px;
					height: 25px;
					background-color: #F2C146;
					font-size: 15px;
					color: #fff;
					border-radius: 10px 0px 10px 0px;
					position: relative;
					bottom: -56px;
					left: 75px;
				}
				.right{
					width: 67%;
					height: 80%;
					display: flex;
					font-size: 10px;
					line-height: 20px;
					margin-top: 10px;
					text-align: left;
					color: #B0B0B0;
					flex-direction: column;
					justify-content: space-around;
					.span_Righ{
						font-size: 20px;
						font-weight: bold;
						color: #000;
					}
					.huangse{
						color: #F4B55C;
					}
				}
			}
		}
		.wealth{
			width: 375px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin-top: 10px;
			background-color: #fff;
			.wealth_top{
				width: 90%;
				height: 160px;
				.top{
					width: 100%;
					height: 50px;
					font-size: 15px;
					color: #9F9F9F;
					font-family: "黑体";
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 15px;
					.title{
						font-size: 20px;
						color: #000;
					}
				}
				.bottom{
					width: 100%;
					height: 110px;
					display: flex;
					justify-content: space-between;
					.jijin_left{
						width: 48%;
						height: 100%;
						overflow: hidden;
						background: url(../assets/jijin.jpg) no-repeat center;
						background-size: 200% 100%;
						border-radius: 15px 15px 15px 5px;
						.text_sp{
							width: 100%;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							text-align: left;
							padding-top: 10px;
							font-family: "黑体";
							font-size: 15px;
							color: #fff;
							background-color:rgba(0,0,0,0.4);
							span{
								padding-left: 10px;
								margin-bottom: 10px;
							}
							.btn_unt{
								width: 85%;
								height: 20px;
								display: flex;
								line-height: 20px;
								font-family: "黑体";
								font-size: 10px;
								margin-left: 10px;
								border-radius: 50px;
								background-color: #000;
								background-color:rgba(0,0,0,0.6);
								span{
									color: #E59C39;
								}
							}
						}
					}
				}
			}
			.wealth_bottom{
				width: 90%;
				margin-top: 5px;
				.gedalei{
					width: 100%;
					height: 70px;
					margin-top: 10px;
					margin-bottom: 15px;
					display: flex;
					justify-content: space-between;
					.left{
						width: 30%;
						height: 100%;
						overflow: hidden;
						border-radius: 10px 10px 10px 5px;
						background-color: grey;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.right{
						width: 68%;
						height: 100%;
						display: flex;
						text-align: left;
						font-size: 14px;
						font-family: "黑体";
						justify-content: center;
						color: #BDBDBD;
						flex-direction: column;
						.title{
							padding-bottom: 10px;
							font-size: 19px;
							color: #000;
						}
					}
				}
			}
		}
	}
</style>
