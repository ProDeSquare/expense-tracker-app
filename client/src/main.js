import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

store.dispatch('getTransactions');

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
