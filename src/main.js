import Vue from 'vue'
import App from './App.vue'

import ProductCatalog from './components/ProductCatalog.vue'
import ManageProducts from './components/ManageProducts.vue'

import VueRouter from 'vue-router'

// import './styles/style.scss'

Vue.use(VueRouter);

const routes = [
    {path: '/home', alias: '/', component: ProductCatalog},
    {path: '/manage-products', component: ManageProducts}
];

const router = new VueRouter({
    routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

// new Vue({
//     el: '#app',
//     components: {
//       ProductList
//     }
// });