import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册
import Register from '../views/register.vue'
// 登陆
import Login from '../views/login.vue'
import About from '../views/About.vue'
import Community from '../views/community.vue'
import Optional from '../views/optional.vue'
import Property from '../views/property.vue'
// 子路由路径
import Zixuanfund from '../views/optional/zixuanfund.vue'
import Shares from '../views/optional/shares.vue'
Vue.use(VueRouter)

  const routes = [
  {
	path: '/Login',
	name: 'Login',
	component: Login
  },
  {
  	path: '/Register',
  	name: 'Register',
  	component: Register
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/optional',
    name: 'Optional',
    component: Optional,
	children:[
		{
			path:'/optional/zixuanfund',
			name:'Zixuanfund',
			component:Zixuanfund
		},
		{
			path:'/optional/shares',
			name:'Shares',
			component:Shares
		}
	]
  },
  {
    path: '/property',
    name: 'Property',
    component: Property
  }
]

const router = new VueRouter({
  routes
})

export default router
