<template>
		<van-swipe style="height: 80px;" :autoplay="3000" :touchable="false" :vertical="true" :show-indicators="false">
			<van-swipe-item>
				<div class="top">
					<div class="martop_left">
						<span class="te_span">上证指数</span>
						<span style="margin-left: 10px;" class="span_color"></span>
					</div>
					<div class="martop_right">
						<span class="span_color">3260.35</span>
						<span class="span_color">+25.52</span>
						<span class="span_color">+0.79%</span>
						<span class="span_color jiantou">></span>
					</div>
				</div>
			</van-swipe-item>
			<van-swipe-item>
				<div class="top">
					<div class="martop_left">
						<span class="te_span">创业扳指</span>
						<span style="margin-left: 10px;" class="span_color"></span>
					</div>
					<div class="martop_right">
						<span class="span_color">2536.62</span>
						<span class="span_color">+53.59</span>
						<span class="span_color">+2.16%</span>
						<span class="span_color jiantou">></span>
					</div>
				</div>
			</van-swipe-item>
		</van-swipe>
</template>

<script></script>

<style lang="less" scoped>
@color: #E15E40;
	.top {
		width: 100%;
		height: 40px;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.martop_left {
		width: 35%;
		text-align: left;
		display: flex;
		padding-left: 20px;
		align-items: center;
		.te_span {
			color: #000;
			font-weight: bold;
		}
	}
	.martop_right {
		width: 50%;
		padding-right: 35px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.shoupan {
			width: 35%;
			height: 20px;
			color: #a2a2a2;
			background-color: #f5f5f5;
		}
	}
	.span_color {
		color: @color;
		font-size: 13px;
	}
	.jiantou{
		color: #CBCED0;
	}

</style>
