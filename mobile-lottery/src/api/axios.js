import axios from 'axios'
//创建axios实例
let service = axios.create({
  timeout: 6000
})

//设置post put 默认Content-Type
service.defaults.headers.post['Contetn-Type'] = 'applocation/json'
service.defaults.headers.put['Contetn-Type'] = 'applocation/json'

//添加请求拦截器
service.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put') {
      //post,post提交将对象转为string,为处理java后台解析问题
      config.data = JSON.stringify(config.data)
    }
    //请求发送前进行处理
    return config
  },
  (error) => {
    //请求错误处理
    return Promise.reject(error)
  }
)

// header添加token
service.interceptors.request.use(
  config =>{
    if(localStorage.token){
      config.headers.Authorization =  localStorage.token;
    }
    return config
  },
  err =>{
    return Promise.reject(err)
  }
)

//添加响应拦截器
service.interceptors.response.use(
  (response) => {
    let { data } = response
    return data
  },
  (error) => {
    let info = {},
      { status, statusText, data } = error.response
    if (!error.response) {
      info = {
        code: 5000,
        msg: 'Network Error'
      }
    } else {
      info = {
        code: status,
        data: data,
        msg: statusText
      }
    }
  }
)
/**
 * 创建统一封装过的 axios 实例
 * @return {AxiosInstance}
 */
export default function () {
  return service
}
