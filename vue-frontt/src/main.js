import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './services/api'

Vue.config.productionTip = false

// Fazendo esse prototype posso usar o axios em qualquer parte da aplicacao sem precisar fazer o import
Vue.prototype.$axios = api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
