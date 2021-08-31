import Vue from 'vue'
import App from './App.vue'
import Directives from './directives/index.js'

Vue.config.productionTip = false
Vue.use(Directives)

new Vue({
  render: h => h(App),
}).$mount('#app')
