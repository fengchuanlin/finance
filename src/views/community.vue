<template>
	<div class="community">
		<!-- 头部 -->
		<van-sticky>
			<div class="header">
				<van-search v-model="value" show-action shape="round" background="#3D70F6" placeholder="问答/看点/用户/股票/基金">
					<template #action>
						<div><img class="heade_icon" src="../assets/icon/faxian.png" alt="" /></div>
					</template>
				</van-search>
			</div>
		</van-sticky>
		<!-- 分类 -->
		<div class="conter">
			<div class="Gridgge">
				<van-grid :border="false" :column-num="4">
					<van-grid-item>
						<img class="class_img" src="../assets/icon/_zichan.png" alt="" />
						<span class="class_span">大咖</span>
					</van-grid-item>
					<van-grid-item>
						<img class="class_img" src="../assets/icon/_zichan.png" alt="" />
						<span class="class_span">专栏</span>
					</van-grid-item>
					<van-grid-item>
						<img class="class_img" src="../assets/icon/_zichan.png" alt="" />
						<span class="class_span">看点</span>
					</van-grid-item>
					<van-grid-item>
						<img class="class_img" src="../assets/icon/_zichan.png" alt="" />
						<span class="class_span">短视频</span>
					</van-grid-item>
				</van-grid>
			</div>
			<div class="subproject">
				<van-tabs v-model="active" title-active-color="#000" background="#fff" animated>
					<van-tab title="热门">
						<subproject></subproject>
					</van-tab>
					<!-- 攒点金子 -->
					<van-tab title="讨论区">
						<comment></comment>
					</van-tab>
					<van-tab title="关注">
						<div class="follow">
							<span>你还没有关注的人</span>
							<span>赶紧去社区找找牛人吧！</span>
						</div>
					</van-tab>
				</van-tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import Subproject from '../components/subproject.vue'
	import Comment from '../components/comment.vue'
	export default {
		data() {
			return {
				value: '',
				active: 2
			}
		},
		components: {
			Subproject,
			Comment
		}
	};
</script>
<style lang="less" scoped>
	.community {
		height: 900px;
		background-color: #F5F5F9;

		// 头部搜索框
		.header {
			width: 375px;
			background-color: #3d70f6;

			.heade_icon {
				width: 30px;
				height: 30px;
			}
		}

		.conter {
			.Gridgge {
				width: 375px;
				height: 100%;
				background-color: brown;

				.class_img {
					width: 30px;
					height: 30px;
				}

				.class_span {
					font-size: 15px;
				}
			}

			.subproject {
				width: 375px;
				margin-bottom: 18%;
				.follow{
					width: 375px;
					height: 200px;
					font-size: 19px;
					font-family: "黑体";
					display: flex;
					flex-direction: column;
					line-height: 30px;
					color: #A5A5A5;
					border-top: #eee 2px solid;
				}
			}
		}
	}
</style>
