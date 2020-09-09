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
    component: Optional
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
