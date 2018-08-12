import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import Inputmask from 'inputmask'
import VueScrollTo from 'vue-scrollto'

import './styles/app.scss'


Vue.use(Vuelidate)
Vue.use(VueScrollTo)

Vue.directive('input-mask', {
	bind: function(el) {
		new Inputmask('numeric', {
        digits: 0,
        rightAlign: false,
        autoGroup: true
    }).mask(el);
	}
});

//Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
