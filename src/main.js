import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import "@/assets/css/reset.css";
import axios from 'axios'
import AuthServices from '@/services/auth-service.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from 'vuelidate'




Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuelidate)


Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-shop.tk/api'
axios.defaults.headers.common['project-name'] = 'tu_shop';
AuthServices.initAuthHeader();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
