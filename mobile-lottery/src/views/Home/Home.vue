<template>
  <div class="box" ref="box">
    <title-header :title="'首页'"></title-header>
    <div class="scroll" ref="scroll">
      <div class="content">
        <van-swipe class="van" :autoplay="2000" :loop="true">
          <van-swipe-item class="van-item">
            <img src="../../assets/banner.png">
          </van-swipe-item>
          <van-swipe-item class="van-item">
            <img src="../../assets/banner.png">
          </van-swipe-item>
        </van-swipe>
        <van-notice-bar
          class="notice"
          background="#ffffff"
          color="black"
          :text="text"
          left-icon="volume-o"
        ></van-notice-bar>
        <div style="width: 100%; height: 1rem; background:#f2f3f4; "></div>
        <div class="listTop">
          <ul>
            <li v-for="(item,index) in listTop" :key="index">
              <img :src="item.src" alt @click="goDetail(item.path)">
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav-button></nav-button>
  </div>
</template>

<script>
import TitleHeader from "../../components/TitleHeader.vue";
import NavButton from "../../components/NavButton.vue";
import BScroll from "better-scroll";

export default {
  name: "home",
  data() {
    return {
      betterScroll: null,
      text:
        "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      listTop: [
        {
          src: require("../../assets/img/kaijiang@2x.png"),
          title: "开奖直播",
          type: "",
          path: "/openlottery"
        },
        {
          src: require("../../assets/img/taoliao@2x.png"),
          title: "淘料市场",
          type: "",
          path: "/market"
        },
        {
          src: require("../../assets/img/lingquhongbao@2x.png"),
          title: "领取红包",
          type: "",
          path: "/RedEnevlope"
        },
        {
          src: require("../../assets/img/tuku@2x.png"),
          title: "六合图库",
          type: "",
          path: "/Lheimg"
        },
        {
          src: require("../../assets/img/kaijiang@2x.png"),
          title: "查询助手",
          type: "",
          path: "/inquire"
        },
        {
          src: require("../../assets/img/luntan@2x.png"),
          title: "交流论坛",
          type: "",
          path: "/Exchange"
        },
        {
          src: require("../../assets/img/ziliao@2x.png"),
          title: "文字资料",
          type: ""
        },
        {
          src: require("../../assets/img/chongji@2x.png"),
          title: "资讯统计",
          type: "",
          path: "/Statistics"
        },
        {
          src: require("../../assets/img/fenxi@2x.png"),
          title: "走势分析",
          type: "",
          path: "/trend"
        },
        {
          src: require("../../assets/img/gongshi@2x.png"),
          title: "公式",
          type: "",
          path: "/Formula"
        },
        {
          src: require("../../assets/img/lishi@2x.png"),
          title: "历史开奖",
          type: "",
          path: "/HistoryDraw"
        },
        {
          src: require("../../assets/img/xingyun@2x.png"),
          title: "幸运号码",
          type: ""
        }
      ]
    };
  },
  components: {
    TitleHeader,
    NavButton
  },
  methods: {
    goDetail(path) {
      this.$router.push(path);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .notice {
    color: black;
    background: rgb(255, 255, 255);
    height: 2rem;
    font-size: 1.2rem;
  }

  .scroll {
    width: 100%;
    height: calc(100% - 9rem);

    .content {
      .van {
        width: 100%;

        .van-item {
          width: 100%;

          img {
            width: 100%;
          }
        }
      }
            background: #fff;
      .listTop {
        width: 100%;

        ul {
          padding: 0;
          margin: 0;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -webkit-justify-content: space-between;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;

          li:nth-of-type(1) {
            margin-top: 1rem;
          }

          li:nth-of-type(2) {
            margin-top: 1rem;
          }

          li:nth-of-type(3) {
            margin-top: 1rem;
          }

          li {
            width: calc(100% / 3);
            box-sizing: border-box;
            margin-top: 2.5rem;

            img {
              display: block;
              width: 6rem;
              height: 6rem;
              margin: auto;
            }

            span {
              display: block;
              color: #555;
              font-size: 1.4rem;
              line-height: 1.4rem;
              margin-top: 1.2rem;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .app-transition-router {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>
