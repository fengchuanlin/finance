<template>
	<div class="login">
		<div class="header">
			<span>账号密码登录</span>
		</div>
		<div class="iput">
			<input type="text" class="but_tess" v-model="phone" placeholder="请输入手机号码">
			<input type="text" class="but_tess" v-model="password" placeholder="请输入密码">
		</div>
		<a href="#" class="zhuche" @click="regiser">注册账号</a>
		<div class="but_login">
			<button @click="denglu">登录</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				phone:"",
				password:""
			}
		},
		methods:{
			regiser(){
				this.$router.push({path:'/register'})
			},
			denglu(){
				var iphone=localStorage.getItem('phone')
				var passwsd=localStorage.getItem('passwrd')
				if(this.phone==iphone && this.password==passwsd){
					alert("登录成功")
					this.$router.push({path:'/'})
				}else{
					alert("账号或密码错误")
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	body{
		font-size: 0px;
	}
	.login{
		width: 345px;
		margin: 0 auto;
		text-align: left;
		.zhuche{
			font-size: 10px;
			color: cornflowerblue;
		}
		.header{
			margin-top: 15%;
			span{
				font-size: 25px;
				font-weight: bold;
			}
		}
		.iput{
			margin-top: 10%;
			display: flex;
			flex-direction: column;
			.but_tess{
				height: 35px;
				margin-top: 10px;
				font-size: 10px;
				border: 0px;
				background-color: #F8F8F8;
			}
		}
		.but_login{
			width: 100%;
			margin-top: 15%;
			font-size: 15px;
			button{
				width: 100%;
				height: 40px;
				border: 0px;
				background-color: #DFDFDF;
				border-radius: 5px;
			}
		}
	}
	
</style>
