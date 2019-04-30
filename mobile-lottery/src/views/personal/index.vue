<template>
  <div class="personal_box">
    <div class="personal_header">
      <p class="header_top">
        <i class="set_right"></i>
      </p>
      <div class="login_before" v-if="!isLogin" @click="login()">
        <div class="avatar">
          <img src="../../assets/img/personal/06190b4.png" alt>
        </div>
        <div class="login_right">
          <van-button type="default" size="small">登录</van-button>
        </div>
      </div>
      <div class="login_after" v-else>
        <div class="avatar">
          <img src="../../assets/img/personal/06190b4.png" alt>
        </div>
        <div class="login_right">
          <p>{{this.$store.state.userinfo.name}}</p>
          <p>
            <i></i>
            <span>总积分:&nbsp{{this.$store.state.userinfo.jifen}}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="scroll" ref="scroll">
      <div class="personal_con">
        <!-- <van-collapse v-model="activeNames">
                  <van-collapse-item
                    v-for="(perItem,perIndex) in personList"
                    :key="perIndex"
                    :name="perIndex"
                    right-icon="arrow-left"
                  >
                    <div slot="title">
                      <i class="left_icon" :style="{background: 'url('+perItem.icon+')no-repeat'}"></i>
                      <span class="left_text">{{perItem.name}}</span>
                    </div>
                  </van-collapse-item>
        </van-collapse>-->
        <ul>
          <li
            v-for="(perItem,perIndex) in personList"
            :key="perIndex"
            :name="perIndex"
            @click="goLink(perItem.path)"
          >
            <div class="title">
              <i class="left_icon" :style="{background: 'url('+perItem.icon+')no-repeat'}"></i>
              <span class="left_text">{{perItem.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <nav-button></nav-button>
  </div>
</template>
<script>
import NavButton from "../../components/NavButton.vue";
import BScroll from "better-scroll";
import store from "@/store.js";

export default {
  name: "personal",
  data() {
    return {
      personList: [
        {
          name: "致富",
          path: "",
          icon: require("../../assets/img/personal/zhifu.png")
        },
        {
          name: "我的心水",
          path: "/heartWather",
          icon: require("../../assets/img/personal/wdsxin.png")
        },
        {
          name: "我的关注",
          path: "",
          icon: require("../../assets/img/personal/wdgzhu.png")
        },
        {
          name: "我的粉丝",
          path: "/fans",
          icon: require("../../assets/img/personal/wdfsi.png")
        },
        {
          name: "购买记录",
          path: "",
          icon: require("../../assets/img/personal/zhjlu.png")
        }
      ],
      activeNames: ["1"]
    };
  },
  methods: {
    login() {
      this.$router.push("/admin/login");
    },
    goLink(path) {
      this.$router.push(path);
    }
  },
  computed: {
    isLogin() {
      if (localStorage.token) return true;
      return false;
    }
  },
  components: {
    NavButton
  },
  mounted() {
    this.$nextTick(() => {
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  },
  store
};
</script>
<style lang="less" scoped>
.personal_box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .personal_header {
    height: 13rem;
    width: 100%;
    background-color: #ff3d2e;
    color: white;

    .header_top {
      overflow: hidden;
      margin: 0;
      padding: 0;

      .set_right {
        float: right;
        margin-top: 2rem;
        margin-right: 2rem;
        background: url(../../assets/img/personal/setting.png) no-repeat;
        background-size: 100% 100%;
        display: inline-block;
        width: 2rem;
        height: 2rem;
      }
    }

    .login_before,
    .login_after {
      overflow: hidden;

      .avatar {
        width: 6.5rem;
        height: 6.5rem;
        background-color: white;
        margin-left: 0.9rem;
        float: left;
        border-radius: 50%;
        border-top-left-radius: 50%; /* 左上角 */
        border-top-right-radius: 50%; /* 右上角 */
        border-bottom-right-radius: 50%; /* 右下角 */
        border-bottom-left-radius: 50%; /* 左下角 */
        border-radius: 999px;

        img {
          border-radius: 50%;
          width: 6.5rem;
          height: 6.5rem;
        }
      }

      .login_right {
        float: left;
        line-height: 6.5rem;
        font-family: "PingFang SC";
        font-size: 1.4rem;
        margin-left: 1rem;
        color: #ffffff;

        p {
          margin: 0;
        }
      }
    }

    .login_after {
      line-height: 6rem;

      p {
        font-size: 1.4rem;
        height: 3rem;
        line-height: 2rem;
      }

      p:nth-child(1) {
        margin-top: 1rem;
      }
    }
  }

  .scroll {
    width: 100%;
    height: calc(100% - 13rem - 5rem);

    .personal_con {
      ul {
        li {
          width: calc(100% - 1rem);
          margin-left: 1rem;
          height: 4.4rem;
          line-height: 4.4rem;
          border-bottom: 1px solid #e1e1e1;
          position: relative;

          .left_icon {
            display: inline-block;
            width: 1.7rem;
            height: 1.7rem;
            vertical-align: middle;
            background-size: 100% 100% !important;
          }

          .left_text {
            margin-left: 0.9rem;
            font-family: "PingFang SC";
            font-size: 1.6rem;
            color: #333333;
          }
        }

        li:after {
          content: "";
          background: url(../../assets/img/personal/jiantou.png) no-repeat;
          background-size: cover;
          width: 0.8rem;
          height: 1.3rem;
          position: absolute;
          top: 1.6rem;
          right: 1rem;
        }
      }
    }
  }
}
</style>

