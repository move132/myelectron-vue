import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/home'
import My from '@/page/my/my'
import Patient from '@/page/patient/patient'
import Tycircle from '@/page/tycircle/tycircle'

import Login from '@/page/login/login'
import Register from '@/page/register/register'
import Forget from '@/page/forget/forget'
import Resetpass from '@/page/resetpass/resetpass'
import Bloodsugar from '@/page/bloodsugar/bloodsugar'
Vue.use(Router)

export default new Router({
	//mode:"history",
	routes: [{
		path: '/',
		name: 'Login',
		component: Login
	},{
		path: '/register',
		name: 'Register',
		component: Register
	},{
		path: '/forget',
		name: 'Forget',
		component: Forget
	},{
		path: '/resetpass',
		name: 'Resetpass',
		component: Resetpass
	},{
		path: '/bloodsugar',
		name: 'Bloodsugar',
		component: Bloodsugar,
		props: (route) => ({ query: route.query.q })
	},{
		path: '/home:id',
		name: 'Home',
		component: Home
	},{
		path: '/patient',
		name: 'patient',
		component: Patient
	},{
		path: '/tycircle',
		name: 'tycircle',
		component: Tycircle
	},{
		path: '/my',
		name: 'my',
		component: My
	}]
})