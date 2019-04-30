export default{
    install(Vue,options){
        // 账号、密码验证
        Vue.prototype.validateAccout = function (str){
            if(/^[0-9a-zA-Z]{6,20}$/i.test(str)) {
                return true
            }else{
                return false
            }
        }

        // 手机号验证
        Vue.prototype.testPhone = function (text) {
        if (!/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(text)) {
          return false
        } else {
          return true
        }
      }
    }
}