<template>
	<div class="classify">
		<div class="con_classify">
			<van-grid :border="false" :column-num="5">
				<van-grid-item>
					<img class="class_img" src="../assets/icon/_zichan.png" alt="" />
					<span class="class_span">余额宝</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/licai.png" alt="" />
					<span class="class_span">理财</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/huangjin.png" alt="" />
					<span class="class_span">黄金</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/jijin.png" alt="" />
					<span class="class_span">基金</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/zhunxiang.png" alt="" />
					<span class="class_span">尊享</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/gupiaofl.png" alt="" />
					<span class="class_span">股票</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/caifuhao.png" alt="" />
					<span class="class_span">财富号</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/baozhang.png" alt="" />
					<span class="class_span">年金险</span>
				</van-grid-item>
				<van-grid-item>
					<img class="class_img" src="../assets/bangnitoufl.png" alt="" />
					<span class="class_span">帮你投</span>
				</van-grid-item>
			</van-grid>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.con_classify {
		width: 100%;
		overflow: hidden;
		border-radius: 10px;
		background-color: #fff;
		.class_img {
			width: 25px;
			height: 25px;
		}
		.class_span {
			font-size: 13px;
		}
	}
</style>
