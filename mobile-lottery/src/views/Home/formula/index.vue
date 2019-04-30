<template>
  <div class="lhc_formula">
    <TitleHeader :type="'child'" :title="'公式'"></TitleHeader>
    <div class="top_lhc_gif">
      <a href="javascript:void(0)">
        <img :src="bannerUrl" alt>
      </a>
    </div>
    <div id="scroll" ref="scroll">
      <div class="content" id="content">
        <div class="lhc_formuList">
          <ul>
            <li v-for="(forMuItem,forMuIndex) in forMulaData" :key="forMuIndex">
              <a href>
                <span class="color_hong">{{forMuItem.periods}}</span>
                <span>{{forMuItem.title}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../../components/TitleHeader.vue";
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
export default {
  components: {
    TitleHeader
  },
  data() {
    return {
      forMulaData: [],
      meScroll: null,
      page: {
        pageNum: 1,
        pageSize: 20
      },
      bannerUrl:''
    };
  },
  methods: {
    cratedMescroll() {
      this.meScroll = new MeScroll("scroll", {
        up: {
          callback: this.upCallback,
          isBounce: true,
          page: {
            size:20
          },
          toTop: {
            offset: 1000
          },
          orderList:{},
          noMoreSize: 20,
          empty: {
            warpId: "content",
            tip: `暂无${this.tip}`
          },
          htmlNodata: '<p class="upwarp-nodata">没有更多了</p>'
        }
      });
    },
    upCallback(page) {
      this.getListData(
        page.num,
        curPageData => {
          if (page.num === 1) this.forMulaData = [];
          this.forMulaData = this.forMulaData.concat(curPageData.list);
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
        let res = await this.$api.home.getForMula({
          page: pageNum,
          limit: this.page.pageSize
        });
        if (res && res.code == 200) {
          this.orderList = res.body.formulas;
          this.bannerUrl = res.body.adPictures[0].imgUrl;
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
  }
};
</script>
<style lang="less" scoped>
.lhc_formula {
  .top_lhc_gif {
    width: 100%;
    height: 7.5rem;
    position: relative;
    top: 0;
    left: 0;
    z-index: 9999;
    img {
      width: 100%;
      height: 7.5rem;
    }
  }
  #scroll {
    position: fixed;
    top: 11rem;
    width:100%;
    bottom: 0;
    height: 90%;
    overflow: auto;
    .content {
      width: 100%;
      height: auto;
      overflow: hidden;
      background: #fff;
      .lhc_formuList {
        overflow: hidden;
        ul {
          width: 98%;
          margin-left: 2%;
          height: auto;
          float: left;
          overflow: hidden;
          li {
            width: 100%;
            height: 4.4rem;
            border-bottom: 1px solid #ccc;
            line-height: 4.4rem;
            a {
              display: block;
              width: 100%;
              height: 100%;
              float: left;
              font-size: 1.6rem;
              color: #333;
              span:nth-child(1) {
                display: block;
                width: 4.2rem;
                margin: 1.3rem 0;
                margin-right: 1.2rem;
                font-size: 1.2rem;
                height: 1.75rem;
                text-align: center;
                line-height: 1.75rem;
                float: left;
                border-radius: 1rem;
                color: #fff;
              }
              .color_hong {
                background: #fc5c4b;
              }
            }
          }
        }
      }
    }
  }
}
</style>
