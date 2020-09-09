<template>
  <div id="app_">
    <div id="nav">
		<tabbar></tabbar>
    </div>
    <router-view/>
  </div>
</template>
<script>
	import Tabbar from '@/components/tabbar.vue'
	export default{
		components:{
			Tabbar
		},
		mounted() {
			this.yemianjiaz()
		},
		methods:{
			yemianjiaz(){
				// 查询缓存是否有账号密码
				var iphone=localStorage.getItem('phone')
				var passwsd=localStorage.getItem('passwrd')
				// 判断手机号和密码都为空的话   跳转到登录页面
				if(iphone==null && passwsd==null){
					alert("请先登录!")
					this.$router.push({path:'/register'})
				}else{
					// 如果已有账号直接进入首页
					// this.$router.push({path:'/about'})
				}
				
				
			},
		},
		
	}
</script>
<style lang="less" scoped>
#app_ {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
