<template>
  <div class="history_box">
    <div class="vp_top">
      <Title-Header
        :title="'历史开奖'"
        :type="'child'"
        :rightData="rightData"
        ref="child"
        v-on:change_proup="changeProup"
      ></Title-Header>
      <div class="lhc_ls_banner">
        <img :src="bannerSrc" alt>
      </div>
      <div class="lhc_ls_tit">
        <span class="lhc_ls_dt">{{year}}年历史开奖记录</span>
        <div class="lhc_ls_btn">
          <span class="ls_btn1" @click="showToggle">{{sort}}</span>
          <span class="ls_btn2">
            <span data-id="wuxing">五行</span>
          </span>
        </div>
      </div>
      <div id="scroll" ref="scroll">
        <div class="lhc_history" id="content">
          <ul class="lhc_histroy_group">
            <li
              class="lhc_histroy_group_item"
              v-for="(hisItem,hisIndex) in historyData"
              :key="hisIndex"
            >
              <div class="lhc_histroy_title">
                <span>{{hisItem.drawDate}}</span>
                <span>{{hisItem.periods.slice(4)}}期</span>
              </div>
              <div class="lhc_histroy_cont">
                <ul>
                  <li v-for="(hisChildItem,hisChildIndex) in hisItem.items" :key="hisChildIndex">
                    <span :class="[hisChildItem.co,hisChildItem.className?'add':'']">
                      <em>{{hisChildItem.no}}</em>
                    </span>
                    <span>{{hisChildItem.an}}</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "@/components/TitleHeader.vue";
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
export default {
  data() {
    return {
      show: false,
      currentDate: new Date(),
      colums: ["2019", "2018", "2017", "2016", "2015"],
      bannerSrc: "http://9000016.com/pic/ad_img/kjzb_top.gif",
      newData: "2019",
      historyData: [],
      rightData: {},
      page: {
        num: 1,
        pageSize: 12
      },
      meScroll: null,
      sort: "升序",
      i: 1,
      year:'2017'
    };
  },
  methods: {
    cratedMescroll() {
      this.meScroll = new MeScroll("scroll", {
        down: {
          callback: this.downCallback //下拉刷新的回调,别写成downCallback(),多了括号就自动执行方法了
        }
      });
    },
    showToggle: function() {
      this.i ++ 
      if (this.i % 2 == 0) {
        this.sort = "倒序";
        this.historyData.reverse();
      } else {
        this.sort = "升序";
        this.historyData.reverse();
      }
    },
    changeProup() {},
    async downCallback() {
      try {
        let res = await this.$api.home.getHistory({
          year: this.year
        });
        if (res && res.code == 200) {
          let beforeData = res.body;
          this.sort = '升序'
          beforeData.forEach((orderItem, i) => {
            if (orderItem.items.length <= 7) {
              orderItem.items.splice(orderItem.items.length - 1, 0, {
                className: "add"
              });
            }
          });
          this.historyData = beforeData;
          this.meScroll.endSuccess();
        } else {
          this.meScroll.endErr();
        }
      } catch (err) {}
    }
  },
  created() {
    this.rightData = { title: "选择年份", value: this.colums, key: "year" };
  },
  mounted() {
    this.cratedMescroll();
  },
  watch: {
    '$store.state.selected.value':function(newVal,oldVal){
      this.meScroll.removeEmpty()
      this.meScroll.destroy()
      this.year = newVal;
      this.cratedMescroll()
    }
  },
  components: {
    TitleHeader
  }
};
</script>
<style lang="less" scoped>
.history_box {
  .layer {
    height: calc(100% - 4rem - 5rem);
  }
  /deep/ .van-popup {
    height: 14rem;
  }
  /deep/ .van-picker {
    ul {
      li {
        height: 3rem !important;
        line-height: 3rem;
      }
    }
    .van-hairline--top-bottom {
      height: 3rem !important;
    }
  }
  .lhc_ls_banner {
    img {
      height: 4.2rem;
      width: 100%;
    }
  }
  .lhc_ls_tit {
    width: 100%;
    height: 3.3rem;
    padding: 0.65rem 2%;
    border-bottom: 0.01rem solid #d6d6d6;
    background: white;
    .lhc_ls_dt {
      float: left;
      line-height: 2rem;
      font-size: 1.6rem;
      color: #59543c;
    }
    .lhc_ls_btn {
      float: right;

      line-height: 2rem;
      .ls_btn1,
      .ls_btn2 {
        display: block;
        float: left;
        width: 4.3rem;
        height: 2rem;
        border-radius: 1rem;
        border: 0.1rem solid #cacaca;
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: center;
        color: #666666;
        font-family: "PingFang SC";
      }
      .ls_btn2 {
        margin-left: 0.8rem;
      }
    }
  }
  #scroll {
    position: fixed;
    width: 100%;
    bottom: 0;
    top: 11.3rem;
    height: 90%;
    overflow: auto;
    .lhc_history {
      width: 100%;
      height: auto;
      overflow: hidden;
      background: white;
      .lhc_histroy_group {
        width: 100%;
        .lhc_histroy_group_item {
          overflow: hidden;
          .lhc_histroy_title {
            width: 22%;
            height: 5rem;
            float: left;
            text-align: center;
            line-height: 2.5rem;
            span {
              width: 100%;
              height: 2.5rem;
              display: block;
              font-size: 1.4rem;
              color: #9b9b9b;
              line-height: 2.5rem;
            }
            span:nth-child(2) {
              color: #191919;
            }
          }
          .lhc_histroy_cont {
            width: 76%;
            float: left;
            height: 5rem;
            overflow: hidden;
            ul {
              width: 100%;
              height: 5rem;
              float: left;
              padding-left: 3%;
              padding-right: 1%;
              li {
                overflow: hidden;
                width: 12.5%;
                height: 5rem;
                float: left;
                span {
                  display: block;
                  text-align: center;
                  em {
                    font-style: normal;
                    font-weight: normal;
                  }
                }
                span:nth-child(1) {
                  width: 100%;
                  height: 3.3rem;
                  line-height: 2.8rem;
                  background-size: 2.3rem;
                  font-size: 1.4rem;
                  color: #591f4e;
                  font-weight: bold;
                  font-family: "pingfang";
                  font-weight: 700;
                }
                .red {
                  background: url(../../../assets/img/games/home-click@2x.png)
                    no-repeat 60% center;
                }
                .green {
                  background: url(../../../assets/img/games/greed.png) no-repeat
                    60% center;
                }

                .blue {
                  background: url(../../../assets/img/games/blue.png) no-repeat
                    60% center;
                }
                span:nth-child(2) {
                  width: 100%;
                  height: 1.7rem;
                  line-height: 1.3rem;
                  color: #586060;
                  font-size: 1.3rem;
                }
                .add {
                  background: url(../../../assets/img/games/icon_ja.png)
                    no-repeat center;
                  background-size: 2rem !important;
                }
              }
            }
          }
        }
        .lhc_histroy_group_item:nth-child(odd) {
          background-color: #e8e8e8;
        }
        .lhc_histroy_group_item:nth-child(even) {
          background-color: white;
        }
      }
    }
  }
}
</style>
