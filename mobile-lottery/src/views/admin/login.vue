<template>
  <div class="vp_login" :style="{height:height +'rem'}">
    <div class="container-login">
      <i class="icon_back" @click="goPerson"></i>
      <div class="lhc_logo">
        <p>六合直通车</p>
        <p>赢得新未来</p>
      </div>
      <div class="lhc_sign">
        <div class="row">
          <div class="box">
            <div class="left_name">
              <span>账号</span>
            </div>
            <input type="text" placeholder="手机号" v-model.trim="passKey.phone" autocomplete="off">
          </div>
        </div>
        <div class="row">
          <div class="box">
            <div class="left_name">
              <span>密码</span>
            </div>
            <input
              type="password"
              placeholder="6-20位字母数字组合"
              v-model.trim="passKey.password"
              autocomplete="off"
            >
          </div>
        </div>
      </div>
      <div class="submit-wrap">
        <div class="submitBt bg-color" @touchstart="submit" @click="submit">登录</div>
      </div>
      <div class="bar">
        <span class="fl" @click="go('/admin/register')">立即注册</span>
        <span class="fr" @click="forget">忘记密码?</span>
      </div>
    </div>
  </div>
</template>
<script>
import UserService from '@/service/userService.js'
export default {
  data() {
    return {
      passKey: {},
      height: window.innerHeight - 4,
      ifCanclick: false
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    async submit() {
      if (this.ifCanclick) {
        return false;
      }
      if (!this.passKey.phone || !this.testPhone(this.passKey.phone)) {
        this.$toast("请输入正确的手机号");
        return false;
      }
      if (!this.passKey.password) {
        this.$toast("请输入密码");
        return false;
      }
      this.ifCanclick = true;
      try {
        let res = await this.$api.user.login(this.passKey);
        if (res && res.code == 200) {
          setTimeout(() => {
            this.ifCanclick = false;
          }, 2000);
          UserService.setCache(res, 'v1')
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        } else {
          this.ifCanclick = false;
          this.$toast(res.msg);
          this.passKey = {};
        }
      } catch (e) {
        this.ifCanclick = false;
      }
    },
    forget() {
      this.$router.push("/admin/forgetPd");
    },
    goPerson() {
      this.$router.push("/personal");
    },
    // 加密处理
    password_md5(str) {
      let login_arr = [];
      for (let i = 0; i < str.length; i++) {
        this.chars.forEach((element, index) => {
          if (element === str[i]) {
            login_arr.push(index);
          }
        });
      }
      return login_arr;
    },
    //  解密
    login_jie(arr) {
      let login_str = "";
      arr.forEach((element, index) => {
        login_str += this.chars[element];
      });
      return login_str;
    }
  }
};
</script>
<style lang="less" scoped>
.vp_login {
  height: 100%;
  background: #f3f3f3;
  .container-login {
    position: relative;
    .icon_back {
      display: inline-block;
      width: 2.2rem;
      height: 2.2rem;
      position: absolute;
      left: 0.5rem;
      top: 1rem;
      background: url(../../assets/img/personal/back.png) no-repeat;
      background-size: 100% 100%;
    }
    .lhc_logo {
      width: 100%;
      height: 14.7rem;
      p {
        margin: 0;
        display: block;
        width: 100%;
        height: auto;
        float: left;
        text-align: center;
        color: #ff5b45;
        font-size: 2rem;
        letter-spacing: 0.25em;
        font-family: "fangzheng";
      }
      p:first-child {
        margin: 0;
        margin-top: 5.4rem;
        font-size: 3.5rem;
        letter-spacing: 0em;
      }
    }
    .lhc_sign {
      width: 100%;
      height: auto;
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #ccc;
      background: #fff;
      .row {
        border-bottom: 0.02rem solid #ccc;
        position: relative;
        height: 4.4rem;
        line-height: 4.4rem;
        .box {
          width: 98%;
          margin-left: 2%;
          zoom: 1;
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          align-items: center;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          font-size: 1.4rem;
          .left_name {
            width: 10%;
            height: 4.4rem;
            line-height: 4.4rem;
            span {
              font-size: 1.5rem;
              font-family: "pingfang";
            }
          }
          input {
            font-family: "pingfang";
            width: 90%;
            height: 3.6rem;
            font-size: 1.4rem;
            line-height: 3.6rem;
            border: 0px;
            font-family: "pingfang";
            color: #acacac;
            background: transparent;
            text-indent: 1em;
            outline: none;
          }
        }
      }
    }
    .submit-wrap {
      padding: 2rem 1rem 0 1rem;
      text-align: center;
      color: white;
      height: 6.3rem;
      .submitBt {
        background: #ff5b45;
        border-radius: 0.5rem;
        height: 4.3rem;
        line-height: 4.3rem;
        font-size: 1.4rem;
      }
    }
    .bar {
     
      padding: 0 1rem;
      height: 3.4rem;
      line-height: 3.4rem;
      span {
        font-family: "pingfang";
        font-size: 1.2rem;
      }
      .fl {
        float: left;
        color: #ff5b45;
      }
      .fr {
        float: right;
        color: #1986fe;
      }
    }
  }
}
</style>
