import './assets/bootstrap'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

import Empresas from './components/Empresas'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/empresas/:id?', component: Empresas}
    ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
