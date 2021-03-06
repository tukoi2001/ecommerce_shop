import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue'),
    meta: {
      required: true,
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "me" */ '../views/Contact.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "me" */ '../views/Blog.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "me" */ '../views/Product.vue'),
  },
  {
    path: '/product/:slug',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "me" */ '../views/ProductDetail.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'custom-link-active',
  linkExactActiveClass: 'custom-link-exact-active',
  scrollBehavior(to) {
    if(to.fullPath === '/login' || to.fullPath === '/register') {
      return {
        x: 0, y: 130,
        behavior:'smooth',      
      }
    }
    else {
      return {
        x: 0, y: 0,
        behavior:'smooth',      
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.required) {
    const auth = localStorage.getItem('authToken');
    if (auth && auth !== '') {
      next()
    }
    else {
      alert("B???n c???n ????ng nh???p ????? s??? d???ng ch???c n??ng n??y!");
      next({path: '/login'});
    }
  }
  else {
    next();
  }
})
export default router
