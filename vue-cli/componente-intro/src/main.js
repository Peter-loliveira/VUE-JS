import Vue from 'vue'
import App from './App.vue'
import Contador from './contador.vue'
import Conters from './count.vue'

Vue.config.productionTip = false

Vue.component('app-contador', Contador)
Vue.component('app-counter', Conters)

new Vue({
  render: h => h(App),
}).$mount('#app')
