import api from '../index'
import urls from './urls'

const header = {}

export default {
  takeLope(params) {
    // return出去了一个promise
    return api.post(urls.takeLope,params, header)
  }
}
