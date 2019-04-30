<template>
  <div class="register_box">
    <TitleHeader :title="'注册'" :type="'child'"></TitleHeader>
    <div class="lhc_register">
      <ul>
        <li>
          <label>
            <span>手机号</span>
          </label>
          <input type="number" placeholder="手机号" class="tel" v-model.trim="tel" maxlength="11">
        </li>
        <li>
          <label>
            <span>验证码</span>
          </label>
          <input type="text" placeholder="请输入验证码" class="code" v-model.trim="code">
          <a class="sendBtn">
            <span class="sendCode" @click="getCode">{{codeWord}}</span>
          </a>
        </li>
        <li>
          <label>
            <span>昵称</span>
          </label>
          <input type="text" placeholder="请输入昵称" class="nickName" v-model.trim="nickName">
        </li>
        <li>
          <label>
            <span>密码</span>
          </label>
          <input type="password" placeholder="6-20位字母数字组合" class="password" v-model.trim="password">
        </li>
        <li>
          <label>
            <span>邀请码</span>
          </label>
          <input type="text" placeholder="可不填" class="invitationCode" v-model.trim="invita">
        </li>
        <li>
          <label>
            <span>QQ</span>
          </label>
          <input type="number" placeholder="请输入QQ号码" class="QQCode" v-model.trim="qq">
        </li>
      </ul>
    </div>
    <div class="lhc_btn">
      <div class="lhc_btns" id="register">
        <a href="javascript:void(0);" @click="submitRegister">
          <span>注册</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "@/components/TitleHeader.vue";
import UserService from '@/service/userService.js'
export default {
  data() {
    return {
      tel: "",
      code: "",
      nickName: "",
      password: "",
      invita: "",
      qq: "",
      codeWord: "获取验证码",
      ifCanclick: false,
      isOvertime: false
    };
  },
  methods: {
    async getCode() {
      if (!this.tel || !this.testPhone(this.tel)) {
        this.$toast("请输入正确的手机号");
        return false;
      } else if (this.isOvertime) {
        return false;
      } else {
        try {
          let res = await this.$api.user.sendCode({
            phoneNumber: this.tel
          });
          if (res.code == 200) {
            this.$toast("发送成功");
            let that = this,
              time = 60;
            var sendTimer = setInterval(function() {
              that.isOvertime = true;
              time--;
              that.codeWord = time + "s";
              if (time < 0) {
                that.isOvertime = false;
                clearInterval(sendTimer);
                that.codeWord = "获取验证码";
              }
            }, 1000);
          } else {
            this.$toast(res.msg);
          }
        } catch (e) {
          console.log(e);
        }
      }
    },
    async submitRegister() {
      let stateTel = this.testPhone(this.tel);
      if (this.ifCanclick) {
        return false;
      }
      let params = {};
      let ifUserName = this.validateAccout(this.nickName);
      if (!stateTel) {
        this.$toast("请输入正确的手机号");
        return false;
      }
       if (this.code == "") {
        this.$toast("请输入验证码");
        return false;
      }
      if (this.code.length < 6 || this.code.length > 6) {
        this.$toast("请输入6位验证码");
        return false;
      }
      if (!ifUserName) {
        this.$toast("账号6-20位数字或字母");
        return false;
      }
      
      if (this.password.length < 6) {
        this.$toast("密码6-20位数字或字母");
        return false;
      }
      if (this.invita) {
        if (this.invita.length < 6 || this.invita.length > 6) {
          this.$toast("请输入6位邀请码");
          return false;
        }
      }
      if (this.qq === "") {
        this.$toast("请输入QQ");
        return false;
      }
      params.name = this.nickName;
      params.invitationcode = this.invita;
      params.phone = this.tel;
      params.qq_num = this.qq;
      params.yzm = this.code;
      params.password = this.password;

      this.ifCanclick = true;

      try {
        let res = await this.$api.user.regist(params);
        if (res.code == 200) {
          UserService.setCache(res,'v1')
          delete localStorage.remember
          setTimeout(() => {
            this.$router.push("/");
          }, 1000);
        } else {
          this.ifCanclick = false;
          this.$toast(res.msg);
        }
      } catch (e) {
        this.$toast(res.msg);
      }
    }
  },
  components: {
    TitleHeader
  }
};
</script>
<style lang="less" scoped>
.lhc_register {
  width: 100%;
  height: auto;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #ccc;
  margin-top: 0.1rem;
  background: #fff;
  ul {
    width: 95%;
    margin-left: 5%;
    li {
      width: 100%;
      height: 4.4rem;
      border-bottom: 1px solid #ccc;
      overflow: hidden;
      label {
        width: 15%;
        height: 4.4rem;
        line-height: 4.4rem;
        float: left;
        span {
          font-size: 1.5rem;
          font-family: "pingfang";
        }
      }
      input {
        width: 85%;
        height: 100%;
        line-height:3.6rem;
        float: left;
        border: 0px;
        font-family: "pingfang";
        color: #acacac;
        font-size: 1.4rem;
        background: transparent;
        text-indent: 1em;
        outline: none;
      }
    }
    li:nth-child(2) {
      input {
        width: 50%;
      }
      a {
        display: inline-block;
        width: 25%;
        height: 2.25rem;
        float: left;
        margin-top: 1rem;
        border: 1px solid #000;
        border-radius: 0.5rem;
        text-align: center;
        margin-left: 7%;
        span {
          height: 2.25rem;
          line-height: 2.25rem;
          font-size: 1.2rem;
        }
      }
    }
    li:last-child {
      border-bottom: 0;
    }
  }
}
.lhc_btn {
  width: 92%;
  margin-left: 4%;
  .lhc_btns {
    margin-top: 2rem;
    width: 100%;
    height: auto;
    a {
      display: inline-block;
      width: 100%;
      height: 4.3rem;
      border-radius: 0.5rem;
      background: #ff5b45;
      text-align: center;
      line-height: 4.3rem;
      span {
        font-size: 1.8rem;
        display: inline-block;
        color: #fff;
        font-family: "pingfang";
      }
    }
  }
}
</style>
