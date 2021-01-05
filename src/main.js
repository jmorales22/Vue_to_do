import Vue from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import '@/assets/main.scss';

Vue.config.productionTip = false
Vue.use(VueCookies)

new Vue({
  render: h => h(App),
}).$mount('#app')
