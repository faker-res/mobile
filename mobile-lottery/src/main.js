import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/install'
import vanComponents from './vant'


import '@/assets/less/test_base.less'
import util from "@/service/util.js"

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import moment from 'moment'

Vue.prototype.$moment = moment

Vue.use(api)
Vue.use(vanComponents)

Vue.use(util)
Vue.config.productionTip = false
Vue.config.productionTip = false
router.beforeEach(function (to, from, next) {
  if (next === '/home') {
    store.state.pageAnimation = 'fold-right'
  } else if (from.meta.index === undefined) {
    store.state.pageAnimation = 'fold-left'
  } else if (to.meta.index > from.meta.index) {
    store.state.pageAnimation = 'fold-left'
  } else if(to.path==='/'){
    next({ path: '/home', replace: true })
  }
  else {
    store.state.pageAnimation = 'fold-right'
  }

  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
