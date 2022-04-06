import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify: Vuetify,
  render: (h) => h(App)
}).$mount('#app')
