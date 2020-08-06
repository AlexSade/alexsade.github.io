import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './components/home/Home.vue';
import WishList from './components/wishList/WishList.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {path:'/home', component:Home, props:true},
  {path:'/wish-list', component:WishList, props:true},
  {path:'/', component:Home, props:true},
];

const router = new VueRouter({
  routes,
  mode:'hash'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
