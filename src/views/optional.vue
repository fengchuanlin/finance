<template>
	<div class="optional">
		<div class="headr">
			<van-nav-bar title="标题" left-text="市场">
				<template #title>
					<div class="center">
						<div class="jijin"><router-link to="/optional/zixuanfund">股票</router-link></div>
						<div class="jijin"><router-link to="/optional/shares">基金</router-link></div>
					</div>
				</template>
				<template #right>
					<div class="img_icon">
						<img src="../assets/icon/sous.png" alt="">
						<img src="../assets/icon/quanxuan.png" alt="">
					</div>
				</template>
			</van-nav-bar>
		</div>
		<router-view></router-view>
	</div>
</template>

<script></script>
<style lang="less">
.optional {
	.headr {
		.van-nav-bar {
			background-color: #3d70f6;
			.van-nav-bar__text {
				color: #fff;
			}
		}
	}
}
a {
	color: #7798E9;
	font-size: 15px;
	font-weight: "黑体";
	&.router-link-exact-active {
		color: #fff;
		font-size: 15px;
		font-weight: "黑体";
	}
}
</style>
<style lang="less" scoped>
.optional {
	.headr {
		width: 375px;
		height: 100%;
		.img_icon{
			display: flex;
			img{
				padding-left: 15px;
				width: 20px;
				height: 20px;
			}
		}
		.center {
			display: flex;
			border-radius: 5px;
			overflow: hidden;
			border: #2E5FF1 1px solid;
			background-color: #3d70f6;
			.jijin{
				width: 60px;
				height: 20px;
				background-color: #fff;
				a{
					display: block;
					background-color: #3B6CF6;
				}
				a.router-link-exact-active{
					background-color: #2354ED;
				}
				
			}
		}
	}
}
</style>
