import baseUrl from '../baseUrl'
//导出API
export default {
  getTop: baseUrl +'/api/forum/page/top',
  getMoren:baseUrl + '/api/forum/page',

  forMula:baseUrl+'/api/formula/page',
  getInfo:baseUrl+'/api/forum/info',
  getJhForum:baseUrl+'/api/forum/page/fine',
  getHotForum:baseUrl+'/api/forum/page/hot',


  getSxCount:baseUrl +'/api/trend/sxCount',
  getBsCount:baseUrl +'/api/trend/bsCount',
  getDsCount:baseUrl +'/api/trend/dsCount',
  getDwCount:baseUrl +'/api/trend/dwCount',
  getTrend:baseUrl   +'/api/trend/trend',
  getTsCount:baseUrl +'/api/trend/tsCount',
  getWsCount:baseUrl +'/api/trend/wsCount',
  getWxCount:baseUrl +'/api/trend/wxCount', 

  getHistory:baseUrl +'/api/historydraw/page'
}
