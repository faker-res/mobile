import api from '../index'
import urls from './urls'

const header = {}

export default {
  lottery(params) {
    // return出去了一个promise
    return api.get(urls.lottery,params,header)
  }
}
