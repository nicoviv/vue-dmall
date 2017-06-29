import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '../components/home/home'
import cart from '../components/cart/cart'
import mine from '../components/mine/mine'
import member from '../components/member/member'
import classification from '../components/classification/classification'
import load from '../components/load/load'
import details from '../components/classification/details'
import ification from '../components/classification/ification'
import search from '../components/classification/search'
Vue.use(vueRouter)

export default new vueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/member',
      name: 'member',
      component: member
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path:'/load',
      name:'load',
      component:load
    },
    {
      redirect:'/home',
      path: '/'
    },
    {
      path:'/details',
      name :'details',
      component:details
    },
    {
      path:'/search',
      name:'search',
      component:search
    },
    {
      path:'/ification',
      name:'ification',
      component:ification
    }
  ]
})
