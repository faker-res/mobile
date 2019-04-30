import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getUserInfo () {
  if (!localStorage.userinfo) return null
  try {
    return JSON.parse(localStorage.userinfo)
  } catch (e) {
    localStorage.userinfo = '';
    return null
  }
}

export default new Vuex.Store({
  state: {
    pageAnimation:'',
    loginAnimation:'',
    navRightText:'',
    userinfo:getUserInfo(),
    selected:{
      key:'',
      value:"100"
    }
  },
  mutations: {
    // 重置个人信息
    resetUserinfo(state, bool) {
      state.userinfo = bool;
    },
    reloadUserinfo(state){
      console.log(state)
      state.userinfo = localStorage.userinfo && JSON.parse(localStorage.userinfo)
    },
    sendSlected(state,data){
      console.log(data)
      state.selected.key = data.key;
      state.selected.value = data.value
    }
  },
  actions: {

  }
})
