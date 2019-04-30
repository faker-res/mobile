import api from '../index'
import urls from './urls'

const header = {}

export default {
  getTop(params) {  //交流论坛置顶帖子
    return api.get(urls.getTop, params,header)
  },
  getInfo(params){  //帖子详情
    return api.get(urls.getInfo,params,header)
  },
  getJhForum(params){ //精华帖子
    return api.get(urls.getJhForum,params,header)
  },
  getHotForum(params){  //最热帖子
    return api.get(urls.getHotForum,params,header)
  },
  getMoren(params){  //最新帖子
    return api.get(urls.getMoren,params,header)
  },
  getForMula(params){  
    return api.get(urls.forMula,params,header)
  },

  
  getSxCount(params){
    return api.get(urls.getSxCount,params,header)
  },
  getBsCount(params){
    return api.get(urls.getBsCount,params,header)
  },
  getDsCount(params){
    return api.get(urls.getDsCount,params,header)
  },
  getDwCount(params){
    return api.get(urls.getDwCount,params,header)
  },
  getTrend(params){
    return api.get(urls.getTrend,params,header)
  },
  getTsCount(params){
    return api.get(urls.getTsCount,params,header)
  },
  getWsCount(params){
    return api.get(urls.getWsCount,params,header)
  },
  getWxCount(params){
    return api.get(urls.getWsCount,params,header)
  },

  getHistory(params){
    return api.get(urls.getHistory,params,header)
  }
}
