<template>
	<div class="tabbar">
		<van-tabbar v-model="active" route>
			<van-tabbar-item replace to="/">
				<span>发现</span>
				<template #icon="props">
					<img :src="props.active ? icon.active : icon.inactive" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/optional" exact>
				<span>自选</span>
				<template #icon="props">
					<img :src="props.active ? icon2.active : icon2.inactive" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/community" icon="search">
				<span>社区</span>
				<template #icon="props">
					<img :src="props.active ? icon3.active : icon3.inactive" />
				</template>
			</van-tabbar-item>
			<van-tabbar-item replace to="/property" icon="search">
				<span>资产</span>
				<template #icon="props">
					<img :src="props.active ? icon4.active : icon4.inactive" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>
<script>
export default {
	data() {
		return {
			active: 0,
			icon: {
				active: 'https://s1.ax1x.com/2020/09/08/wKXSQ1.png',
				inactive: 'https://s1.ax1x.com/2020/09/08/wKOXi4.png'
			},
			icon2: {
				active: 'https://s1.ax1x.com/2020/09/08/wKXnyt.png',
				inactive: 'https://s1.ax1x.com/2020/09/08/wKjrHf.png'
			},
			icon3: {
				active: 'https://s1.ax1x.com/2020/09/08/wKvnVf.png',
				inactive: 'https://s1.ax1x.com/2020/09/08/wKjXvR.png'
			},
			icon4: {
				active: 'https://s1.ax1x.com/2020/09/08/wKvgZ6.png',
				inactive: 'https://s1.ax1x.com/2020/09/08/wKvwiF.png'
			}
		};
	}
};
</script>

<style></style>
