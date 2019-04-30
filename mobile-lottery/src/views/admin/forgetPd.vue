<template>
  <div class="register_box">
    <TitleHeader :title="'忘记密码'" :type="'child'"></TitleHeader>
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
            <span class="sendCode" @click="getCode">获取验证码</span>
          </a>
        </li>
        <li>
          <label>
            <span>新密码</span>
          </label>
          <input type="text" placeholder="6-20位字母数字组合" class="password" v-model.trim="password">
        </li>
        <li>
          <label style="width:18%">
            <span>再次确认</span>
          </label>
          <input type="password" placeholder="请再次确认密码" class="againPass" v-model.trim="againPass">
        </li>
      </ul>
    </div>
    <div class="lhc_btn">
      <div class="lhc_btns" id="submitPwd">
        <a href="javascript:void(0);" @click="submitagain">
          <span>提交</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "@/components/TitleHeader.vue";
export default {
  data() {
    return {
      tel: "",
      code: "",
      password: "",
      againPass: "",
      ifCanclick: false
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
          let res = await this.$api.user.findMM({
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
    async submitagain() {
      let stateTel = this.testPhone(this.tel);
      if (this.ifCanclick) {
        return false;
      }
      let params = {};
      if (!stateTel) {
        this.$toast("请输入正确的手机号");
        return false;
      }
      if (this.password.length < 6) {
        this.$toast("密码6-20位数字或字母");
        return false;
      }
      if (this.code == "") {
        this.$toast("请输入验证码");
        return false;
      }
      if (this.code.length < 4 || this.code.length > 4) {
        this.$toast("请输入4位验证码");
        return false;
      }
      if (this.againPass !== this.password) {
        this.$toast("两次输入的密码不一致");
        return false;
      }
      params.phone = this.tel;
      params.yzm = this.code;
      params.password = this.password;

      this.ifCanclick = true;

      try {
        let res = await this.$api.user.findMM(params);
        if (res.code == 200) {
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
        line-height: 4.4rem;
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
        border-radius: 0.4rem;
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
      input {
        width: 82%;
      }
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
