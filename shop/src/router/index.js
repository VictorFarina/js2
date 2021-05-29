import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import LoginModal from '../components/LoginModal.vue'
import Register from '../views/Register.vue'
import ProductPage from '../views/ProductPage.vue'
import UserView from '../views/UserView.vue'
import Checkout from '../views/Checkout.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },


  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'LoginModal',
    component: LoginModal
  },

  {

    path: '/register',
    name: 'Register',
    component: Register,
   

    
  },

  {
    
    path: '/products/details/:id',
    name: 'ProductPage',
    component: ProductPage,
    props:true ,
    
  },

  {

    path: '/user',

    name: 'UserView',

    component: UserView,

    meta: { authorize: true }

    
   

   

  },

  {

    path: '/checkout',

    name: 'Checkout',

    component: Checkout,

    meta: { authorize: true }

  

  },

  



  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
  
})
router.beforeEach((to, from, next) => {
  const { authorize } = to.meta
  const isLoggedIn = store.getters.loggedIn
  
   if(authorize) {
     if(!isLoggedIn) {
       next({ path: '/login', query: {redirect:to.fullPath} })
     } else {
       next()
     }
   }
 next()
})


export default router
