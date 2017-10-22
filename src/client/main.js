import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
