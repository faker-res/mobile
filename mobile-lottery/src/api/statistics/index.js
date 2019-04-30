import api from '../index'
import urls from './urls'

const header = {}

export default {
  getMant(params) {
    // return出去了一个promise
    return api.get(urls.getMant,params, header)        
  },
  getLh(params){
    return api.get(urls.getLh,params,header)             //六合统计
  },
  getTip(params){
    return api.get(urls.getTip,params,header)            //尾数大小
  },
  getTeMa(params){                             
    return api.get(urls.getTema,params,header)           //特码历史
  },
  getShengxiao1(params){
    return api.get(urls.getShengxiao1,params,header)
  },
  shengxiao(params){                                      
    return api.get(urls.getShengxiao2,params,header)     //生肖正码
  },
  boseTeMa(params){
    return api.get(urls.getBoseTeMa,params,header)       //波色特码
  },
  boseZm(params){
    return api.get(urls.getBoseZM,params,header)         //波色正码
  },
  temaLm(params){
    return api.get(urls.getTemaLm,params,header)         //特码两面
  },
  temaWs(params){
    return api.get(urls.getTemaWs,params,header)         //特码尾数
  },
  ZmZf(params){
    return api.get(urls.getZmZf,params,header)           //正码总分
  },
  haoMaBd(params){
    return api.get(urls.gethaoMaBd,params,header)        //号码波段
  }

  
}
