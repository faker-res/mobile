import api from '../index'
import urls from './urls'

const header = {}

export default {
  sendCode(params) {
    // retrun出去了一个promise
    return api.post(urls.user,params, header)  //验证码
  },
  regist(params){
    return api.post(urls.register,params, header)  //注册
  },
  login(params){
    return api.post(urls.login,params,header)  //登录
  },
  findMM(params){
    return api.post(urls.findMM,params,header) //找回密码
  }
}
