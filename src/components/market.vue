<template>
	<div class="market">
		<van-swipe style="height: 80px;" :autoplay="3000" :touchable="false" :vertical="true" :show-indicators="false">
			<van-swipe-item>
				<div class="top">
					<div class="martop_left">
						<span class="te_span">A股 | 深证成指</span>
						<span style="margin-left: 10px;" class="span_color">13293.33</span>
					</div>
					<div class="martop_right">
						<span class="span_color">+9.30</span>
						<span class="span_color">+0.07%</span>
						<div class="shoupan">已收盘</div>
					</div>
				</div>
			</van-swipe-item>
			<van-swipe-item>
				<div class="top">
					<div class="martop_left">
						<span class="te_span">A股 | 创业扳指</span>
						<span style="margin-left: 10px;" class="span_color">2641.20</span>
					</div>
					<div class="martop_right">
						<span class="span_color">-90.95</span>
						<span class="span_color">-3.33%</span>
						<div class="shoupan">盘中休市</div>
					</div>
				</div>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script></script>

<style lang="less" scoped>
@color: #50a49b;
.market {
	.top {
		width: 100%;
		font-size: 14px;
		display: flex;
		justify-content: space-between;
	}

	.martop_left {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		.te_span {
			color: #000;
			font-weight: bold;
		}
	}
	.martop_right {
		width: 50%;
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
		font-weight: bold;
	}
}
</style>
