import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;


// global variable
Vue.prototype.$wishList = [];

new Vue({
  render: h => h(App),
}).$mount('#app');
