import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './assets/css/bootstrap.css'
import vmodal from 'vue-js-modal'
import Notifications from 'vue-notification'

Vue.use(bootstrap);

Vue.use(vmodal, { dynamicDefault: { draggable: true, resizable: true } })

Vue.config.productionTip = false

Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
