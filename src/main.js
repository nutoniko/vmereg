import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'

import Vuetify from 'vuetify'

import ru from 'i18n/vuetify-ru'

Vue.use(Vuetify, {
  lang: {
    locales: { ru },
    current: 'en'
  },
  theme: {
    primary: '#0d53a0'
  }
})

import 'vuetify/dist/vuetify.css'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
