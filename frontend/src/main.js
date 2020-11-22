import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Change the api URL based on dev or production mode:
Vue.prototype.$apiUrl = process.env.NODE_ENV === 'production' ?
    'http://pokelib.live:4000' : 'http://localhost:4000';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
