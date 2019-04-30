<template>
  <div class="change_box">
    <ul>
      <li v-for="(postItem,postIndex) in postData" :key="postIndex" @click="goLink(postItem)">
        <a href="javascript:void(0)">
          <p class="lhc_forum_tit">
            <span :class="[postItem.isFine=='0'?'redFont':'blackFont']">{{postItem.title}}</span>
            <span class="color_blue" v-if="postItem.isFine=='0'">置顶</span>
          </p>
          <p class="lhc_forum_time">
            <span class="fl">{{postItem.userid}} | {{postItem.createDate}}</span>
            <span class="fr">
              <i class="huifu_icon"></i>
              <span>11</span>
            </span>
          </p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    postData: {
      type: Array
    }
  },
  data() {
    return {
      pageNow: 1,
      pageSize: 10
    };
  },
  mounted() {
    console.log(this.postData);
  },
  methods: {
    goLink(item) {
      this.$router.push({
        path: `ExchangeDetail?id=${item.id}`
      });
    }
  }
};
</script>
<style lang="less" scoped>
.change_box {
  position: relative;
  ul {
    width: 100%;
    height: auto;
    float: left;
    background: #efefef;
    li {
      width: 100%;
      height: 5.5rem;
      border-bottom: 1px solid #ccc;
      margin-top: 0.1rem;
      background: #fff;
      overflow: hidden;
      a {
        display: block;
        width: 94%;
        height: 5.5rem;
        float: left;
        padding: 0.1rem 3%;
        p {
          width: 100%;
          height: 2.5rem;
          line-height: 2.5rem;
          font-size: 1.3rem;
          text-align: left;
          overflow: hidden;
          color: #333333;
        }
        .lhc_forum_tit {
          span {
            float: left;
          }
          .redFont {
            color: red;
          }
          .blackFont {
            color: #000000;
          }
          span:nth-child(2) {
            display: block;
            margin-left: 0.7rem;
            float: left;
            width: 2.7rem;
            font-size: 1.1rem;
            line-height: 1.4rem;
            height: 1.4rem;
            margin-top: 0.5rem;
            color: #fff;
            border-radius: 0.25rem;
            text-align: center;
          }
          .color_blue {
            background: #21b6ff;
          }
        }
        .lhc_forum_time {
          font-size: 1.2rem;
          color: #999999;
          .fr {
            float: right;
            .huifu_icon {
              display: inline-block;
              width: 1.2rem;
              height: 1.1rem;
              background: url(../../../../assets/img/home/exchange/huifu.png)
                no-repeat;
              background-size: 100% 100%;
              vertical-align: middle;
              margin-right: 0.7rem;
            }
          }
        }
      }
    }
  }
}
</style>
