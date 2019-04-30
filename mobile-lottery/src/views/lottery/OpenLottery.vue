<template>
  <div class="box">
    <title-header :title="'开奖直播'" type="child"></title-header>
    <img src="../../assets/img/lottery/kaijiang_banner@2x.png" alt width="100%">
    <van-notice-bar background="#ffffff" color="black" :text="text" left-icon="volume-o"></van-notice-bar>
    <div id="scroll" ref="scroll">
      <div class="content" id="content">
        <div class="result">
          <div class="title">
            <span class="title_left">第148期开奖结果</span>
            <span class="title_right">直播</span>
          </div>
          <div class="num">
            <ul>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
              <li id="add">+</li>
              <li>
                <span class="bg">08</span>
                <span class="text">虎</span>
              </li>
            </ul>
          </div>
          <div class="bor"></div>
          <div class="date">地20170149期 4月22日21时30分 星期六</div>
        </div>
        <div class="img">
          <img src="../../assets/img/lottery/kaijiang_banner@2x.png" alt>
        </div>
        <div class="recommend_list">
          <div class="recommend_item" v-for="(recomItem,recomIndex) in dataList" :key="recomIndex">
            <div class="tit">
              <span>{{recomItem.drawDate}}</span>
              <span>第期推荐</span>
            </div>
            <div class="cont">心中之码：35,27,05,42,56,08,12,32,28,04</div>
            <div class="cont">推荐三肖：35,27,05,42,56,08,12,32,28,04</div>
            <div class="cont">推荐一肖一码：猪...信心40%</div>
            <div class="cont">生肖连：虎兔龙......必发</div>
            <div class="cont">
              <span>特码：双</span>
              <p>|</p>
              <span>总和：大</span>
            </div>
            <div class="cont">六尾中特：9,6,4,5,1,3</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../components/TitleHeader.vue";
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
export default {
  name: "",
  data() {
    return {
      text:
        "足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。",
      meScroll: null,
      dataList: [],
      page: {
        num: 1,
        pageSize: 9
      },
      oneList:[]
    };
  },
  methods: {
    cratedMescroll() {
      this.meScroll = new MeScroll("scroll", {
        up: {
          callback: this.upCallback,
          isBounce: true,
          page: {
            size: 9
          },
          toTop: {
            offset: 1000
          },
          orderList: {},
          noMoreSize: 9,
          empty: {
            warpId: "content",
            tip: `暂无${this.tip}`
          },
          htmlNodata: '<p class="upwarp-nodata">没有更多了</p>',
        }
      });
    },
    upCallback(page) {
      this.getListData(
        page.num,
        curPageData => {
          if (page.num === 1) this.dataList = [];
          console.log(curPageData.list)
          this.dataList = this.dataList.concat(curPageData.list);
          this.meScroll.endByPage(
            curPageData.list.length,
            Math.ceil(curPageData.total / page.size)
          );
        },
        () => {
          this.meScroll.endErr();
          this.meScroll.showEmpty();
        }
      );
    },
    async getListData(pageNum, successCallback, errorCallback) {
      try {
        let res = await this.$api.lottery.lottery({
          page: pageNum,
          limit: this.page.pageSize
        });
        if (res && res.code == 200) {
          this.orderList = res.body;
         successCallback && successCallback(this.orderList);
        } else {
          this.meScroll.endErr();
          this.meScroll.showEmpty();
        }
      } catch (err) {}
    }
  },
  mounted() {
    this.cratedMescroll();
  },
  components: {
    TitleHeader
  }
};
</script>
<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  .tio-img {
    width: 100%;
  }
  #scroll {
    height: calc(100% - 14.2rem);
    background: #efeff4;
    overflow: auto;
    .content {
      min-height: calc(100% - 4rem - 6rem);
      .result {
        width: 100%;
        height: 13.9rem;
        background: #fff;
        margin-top: 0.8rem;
        .title {
          width: 100%;
          height: 2.8rem;
          display: flex;
          justify-content: space-between;
          padding: 0.7rem 1.6rem 0 1.6rem;
          box-sizing: border-box;
          .title_left {
            font-size: 1.5rem;
            color: #333333;
          }
          .title_right {
            background: #ff9f15;
            display: inline-block;
            color: #fff;
            border-radius: 4px;
            font-size: 1.2rem;
            padding: 5px 10px;
          }
        }
        .num {
          width: 100%;
          height: 8.15rem;
          ul {
            width: 100%;
            height: 100%;
            display: flex;
            box-sizing: border-box;
            padding: 0 2.4rem;
            justify-content: space-between;
            li {
              width: 3.35rem;
              height: 100%;
              box-sizing: border-box;
              padding: 1.4rem 0 1.5rem 0;
              .bg {
                display: block;
                width: 3.35rem;
                height: 3.35rem;
                background: url(../../assets/img/lottery/hongse@2x.png) 0 0
                  no-repeat;
                background-size: 100% 100%;
                font-size: 1.4rem;
                box-sizing: border-box;
                padding: 0.5rem 0 0 0.6rem;
              }
              .text {
                display: block;
                font-size: 1.4rem;
                line-height: 1.4rem;
                text-align: center;
                margin-top: 0.5rem;
                color: #666666;
              }
            }
            #add {
              font-size: 4.5rem;
              color: #727272;
              font-weight: lighter;
              padding: 0;
            }
          }
        }
        .bor {
          width: 32.7rem;
          height: 1px;
          background: #e8e8e8;
          margin: auto;
        }
        .date {
          width: 100%;
          height: calc(100% - 2.8rem - 8.15rem - 1px);
          text-align: center;
          line-height: 2.85rem;
          font-size: 1.3rem;
          color: #ff5f27;
        }
      }
      .img {
        width: 100%;
        margin-top: 0.8rem;
        img {
          width: 100%;
        }
      }
      .recommend_list {
        .recommend_item {
          width: 100%;
          background: #fff;
          .tit {
            width: 100%;
            height: 3rem;
            padding-left: 1rem;
            background: #efeff4;
            font-size: 1.3rem;
            color: #666666;
            line-height: 3rem;
          }
          .cont {
            width: 95%;
            height: 4rem;
            border-bottom: 1px solid #e4e4e4;
            background: #fff;
            margin: auto;
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              display: block;
              width: 48%;
            }
            p {
              color: #e4e4e4;
            }
          }
        }
      }
    }
  }
}
</style>
