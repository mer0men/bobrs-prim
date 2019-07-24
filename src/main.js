import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueScrollTo)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAxkxOLgdYY5FaHmdurLqeU0jh2B5Yvsso',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
