import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import ThailandAutoComplete from './plugins/thai'

Vue.component('ThailandAutoComplete', ThailandAutoComplete)
Vue.config.productionTip = false

import data from './plugins/thailand/people.json'; 
Vue.prototype.$txt = data

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
