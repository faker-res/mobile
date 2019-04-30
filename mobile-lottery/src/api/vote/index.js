import api from '../index'
import urls from './urls'

const header = {}

export default {
  getVote(params) {
    // retrun出去了一个promise
    return api.post(urls.getVote,params, header)  //验证码
  },
  sendVote(params){
    return api.post(urls.sendVote,params,header)
  }
}
