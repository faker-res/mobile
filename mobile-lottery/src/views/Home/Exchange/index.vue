<template>
  <div class="exchange_box">
    <Title-Header :type="'child'" :title="'交流论坛'"></Title-Header>
    <van-tabs v-model="tabActive">
      <van-tab v-for="(tabItem,tabIndex) in TabList" :key="tabIndex">
        <div slot="title" class="tab-title">
          <span>{{tabItem.text}}</span>
        </div>
      </van-tab>
    </van-tabs>
    <div id="meScroll">
      <ChangeList :postData="postData"></ChangeList>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../../components/TitleHeader.vue";
import Scroller from "./component/scroller.vue";
import BScroll from "better-scroll";
import ChangeList from "./component/changelist.vue";
import MeScroll from "mescroll.js";
import "mescroll.js/mescroll.min.css";
export default {
  data() {
    return {
      TabList: [
        { text: "默认" },
        { text: "最新" },
        { text: "最热" },
        { text: "精华" }
      ],
      meScroll: null,
      tabActive: 0,
      postData: [],
      page: {
        num: 1,
        pageSize:12
      },
      orderList: []
    };
  },
  methods: {
    //跳转详情
    goLink(item) {
      this.$router.push({
        path: `ExchangeDetail?id=${item.id}`
      });
    },
    //请求数据
    cratedMescroll() {
      this.meScroll = new MeScroll("meScroll", {
        up: {
          callback: this.upCallback,
          isBounce: true,
          page: {
            size: 12
          },
          toTop: {
            offset: 1000
          },
          orderList: {},
          noMoreSize: 12,
          empty: {
            warpId: "content",
            tip: `暂无${this.tip}`
          },
          htmlNodata: '<p class="upwarp-nodata">没有更多了</p>'
        },
      });
    },
    // 上拉回调
    upCallback(page) {
      this.getListData(
        page.num,
        curPageData => {
          console.log(page)
          if (page.num === 1) this.postData = [];
          this.postData = this.postData.concat(curPageData.list);
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
 
    // 默认帖子
    async getListData(pageNum, successCallback, errorCallback) {
      try {
        console.log(this.tabActive)
        let res;
        if (this.tabActive == 0) {
          res = await this.$api.home.getMoren({
            page: pageNum,
            limit: this.page.pageSize
          });
        }
        if (this.tabActive == 1) {
          res = await this.$api.home.getMoren({
            page: pageNum,
            limit: this.page.pageSize
          });
        } 
        if (this.tabActive == 2) {
          res = await this.$api.home.getHotForum({
            page: pageNum,
            limit: this.page.pageSize
          });
        }
        if (this.tabActive == 3) {
          res = await this.$api.home.getJhForum({
            page: pageNum,
            limit: this.page.pageSize
          });
        }
        if (res && res.code == 200) {
          this.orderList = res.body;
          console.log(res);
          successCallback && successCallback(this.orderList);
        } else {
          this.meScroll.endErr();
          this.meScroll.showEmpty();
        }
      } catch (err) {}
    },
    //置顶帖子
    async getTopData() {
      try {
        let res = await this.$api.home.getTop({
          page: 1,
          limit: 2
        });
        if (res && res.code == 200) {
          this.postData = this.postData.concat(res.body.list);
        } else {
        }
      } catch (err) {}
    }
  },
  watch: {
    tabActive(newVal, oldVal) {
      this.tabActive = newVal
      this.meScroll.removeEmpty();
      this.meScroll.destroy();
      this.postData = []
      this.cratedMescroll();
      this.getTopData();

    }
  },
  mounted() {
    this.cratedMescroll();

  },
  created() {},
  components: {
    TitleHeader,
    ChangeList
  }
};
</script>
<style lang="less" scoped>
/deep/.van-tabs {
  .van-tabs__wrap {
    height: 4rem;
    .van-tab {
      line-height: 4rem;
      span {
        font-size: 1.4rem;
        color: #333333;
      }
    }
  }
}
.exchange_box {
  #meScroll {
    position: fixed;
    top: 8rem;
    width: 100%;
    bottom: 0;
    overflow: auto;
  }
}
</style>
