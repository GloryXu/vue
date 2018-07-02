// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#didi-navigator',
  data: {
    tabs: [
      {text: '巴士'},
      {text: '快车'},
      {text: '专车'},
      {text: '顺风车'},
      {text: '出租车'},
      {text: 'ggggg'},
      {text: '代驾'}
    ]
  }
})
