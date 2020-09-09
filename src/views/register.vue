<template>
	<div class="/Register">
		<div class="conter">
			<h2>注册账户</h2>
			<div class="information">
				<div class="phone">
					<span>
						手机号
					</span>
					<input type="text" v-model="phone" class="but_text">
				</div>
				<div class="password">
					<span>
						密码
					</span>
					<input type="text" v-model="passwrd" class="but_text">
				</div>
				<!-- <div class="password">
					<span>
					确认密码
					</span>
					<input type="text" class="but_text">
				</div> -->
				<div class="but">
					<button @click="add">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				phone:"",
				passwrd:"",
				list:{
					phone:"",
					password:""
				}
			}
		},
		methods:{
			add(){
				this.list.phone=this.phone
				this.list.password=this.passwrd
				localStorage.setItem('phone',this.list.phone)
				localStorage.setItem('passwrd',this.list.password)
				alert("注册成功")
				this.$router.push({path:'/login'})
			}
		}
	}
</script>
<style lang="less" scoped>
	.conter {
		h2 {
			color: #06C358;
			margin-bottom: 20%;
		}

		.information {
			margin: 0 auto;
			width: 280px;
			height: 250px;
			display: flex;
			flex-direction: column;
			align-items: center;
			.phone {
				width: 100%;
				display: flex;
				justify-content: space-between;
			}
			.password {
				width: 100%;
				display: flex;
				margin-top: 1.25rem;
				justify-content: space-between;
			}
			.but{
				margin-top: 20%;
				button{
					width: 280px;
					height: 40px;
					background-color: royalblue;
					border: 0px;
					border-radius: 5px;
					color: #fff;
				}
				
			}
			span{
				height: 30px;
				line-height: 30px;
				font-size: 17px;
				font-family: "黑体";
			}
		}
	}
	.but_text{
		width: 180px;
		height: 25px;
	}
</style>
