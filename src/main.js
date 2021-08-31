import Vue from 'vue'
import App from './App.vue'
import Directives from './directives/index.js'
import router from './router/index'

Vue.config.productionTip = false
Vue.use(Directives)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
