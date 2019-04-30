import store from '@/store.js'
import axios from 'axios'
import { Toast, Dialog } from 'vant'
import Vue from 'vue'


function UserService(){
    let that = this;
    // 设置缓存信息
    this.setCache = function (res, type) {
        try {
          localStorage.token = res.body.token
          localStorage.userinfo = JSON.stringify(res.body? res.body : res.body)
        } catch (err) {
          alert('您的系统版本过低不支持在无痕浏览模式下使用，请退出无痕浏览模式或者升级你的系统版本!!!')
        }
        store.commit('reloadUserinfo')
        if (Vue.prototype.$HOST_NAME === '/frontend/vm') {
          return false
        }
        localStorage.Public_User = type
        Vue.prototype.$HOST_NAME =
          `/frontend/${type}`
      }
}

export default new UserService
