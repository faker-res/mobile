let baseUrl = '/lhcztc-api' // 本地代理

switch (process.env.NODE_ENV) {
  case 'dev':
    baseUrl = '' // 测试环境url
    break
  case 'pre':
    baseUrl = '' // 预上线环境url
    break
  case 'production':
    baseUrl = '' // 生产环境url
    break
}

export default baseUrl
