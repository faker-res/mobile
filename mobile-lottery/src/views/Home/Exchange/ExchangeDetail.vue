<template>
  <div class="details_box">
    <Title-Header :type="'child'" :title="'详情'"></Title-Header>
    <div class="scroll" ref="scroll">
      <div class="details_content">
        <div class="forum_list">
          <div class="title clar">
            <img src="http://9000016.com/pic/userImg/12220170921114629.png" alt>
            <span>管理员</span>
            <p>{{infoData.createDate}}</p>
            <span class="forum_pl"></span>
          </div>
          <p class="forum_cal" style="font-size:1.7rem;font-weight:600">{{infoData.title}}</p>
          <p
            class="forum_cal help"
            style="word-break:break-all;word-wrap:break-word;"
          >{{infoData.content}}</p>
        </div>
        <div class="forum_titlt">
          <span>最新评论</span>
        </div>
        <div class="lhc_forum_pinglun">
          <ul v-if="infoData.comments">
            <li v-for="(commentItem,commentIndex) in infoData.comments.list" :key="commentIndex">
              <span>
                <img src="http://9000016.com/pic/userImg/268620171113172902.png" alt>
              </span>
              <dl>
                <dt>
                  <i>广西</i>
                  <em class="LHC_forum_list forum_pl">回复</em>
                  <p class="time">{{commentItem.createDate}}</p>
                </dt>
                <dd class="dd">
                  <font>{{commentItem.comment}}</font>
                  <p v-for="(replyItem,replyIndex) in commentItem.replys" :key="replyIndex">
                    <i>我想到的:</i>
                    <span class="LHC_forum_list">{{replyItem.comment}}</span>
                  </p>
                </dd>
              </dl>
            </li>
          </ul>
          <div class="dropload-down" v-else>
            <div class="dropload-noData">暂无数据</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../../components/TitleHeader.vue";
import BScroll from "better-scroll";
export default {
  components: {
    TitleHeader
  },
  data() {
    return {
      infoData: {},
      betterScroll: null
    };
  },
  methods: {
    async getDeteilsData() {
      try {
        let res = await this.$api.home.getInfo({
          page: this.page,
          limit: this.limit,
          forumId: this.$route.query.id
        });
        if (res && res.code == 200) {
          this.infoData = res.body;
          console.log(this.infoData.comments.list)
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getDeteilsData()
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  },
};
</script>
<style lang='less' scoped>
.details_box {
  .scroll {
    width: 100%;
    height: calc(100% - 4rem);
    .details_content {
      .forum_list {
        padding: 0 10px;
        margin: 0px auto;
        overflow: hidden;
        margin-top: 1rem;
        .title {
          width: 100%;
          height: auto;
          float: left;
          margin-bottom: 2.5rem;
          position: relative;
          img {
            display: block;
            width: 3rem;
            height: 3rem;
            float: left;
            margin: 1rem;
            border-radius: 50%;
          }
          span {
            width: 82%;
            height: auto;
            float: left;
            color: #000;
            font-size: 1.4rem;
            margin: 1rem 0 0rem 0;
          }
          p {
            width: 82%;
            height: 2rem;
            line-height: 2rem;
            float: left;
            color: #ababab;
            font-size: 1.4rem;
          }
          .forum_pl {
            width: 3rem;
            height: 3rem;
            position: absolute;
            top: 0;
            right: 1rem;
            background: url(../../../assets/img/home/exchange/huifu.png)
              no-repeat center;
            background-size: 1rem 1rem;
            cursor: pointer;
          }
        }
        .forum_cal {
          font-size: 1.7rem;
          font-family: "PINGFANG" !important;
          color: #333333;
          margin-top: 0.425em;
          margin-bottom: 0.425em;
        }
        .help {
          font-size: 1.5rem;
        }
      }
      .forum_titlt {
        width: 100%;
        height: 1.75rem;
        background: #f0f0f0;
        float: left;
        line-height: 1.75rem;
        color: #8e8e93;
        font-size: 1rem;
        span {
          padding-left: 1rem;
        }
      }
      .lhc_forum_pinglun {
        width: 100%;
        background: #fff;
        overflow: hidden;
        padding-left: 2%;
        padding-right: 1rem;
        ul {
          width: 98%;
          margin: 0px auto;
          overflow: hidden;
          li {
            width: 100%;
            float: left;
            overflow: hidden;
            margin-top: 1.75rem;
            .LHC_forum_list {
              padding: 0 10px;
              margin: 0px auto;
              overflow: hidden;
              margin-top: 1rem;
            }
            img {
              display: block;
              width: 3rem;
              height: 3rem;
              float: left;
              margin: 1rem;
              border-radius: 50%;
            }
            dl {
              width: 82%;
              height: auto;
              overflow: hidden;
              float: left;
              dt {
                width: 100%;
                height: auto;
                float: left;
                position: relative;
                i {
                  display: block;
                  float: left;
                  width: auto;
                  font-size: 1.3rem;
                  color: #808080;
                }
                em {
                  display: block;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  width: 3.5rem;
                  height: 2.5rem;
                  text-align: center;
                  line-height: 1.5rem;
                  font-size: 1.2rem;
                  color: #0000e3;
                  cursor: pointer;
                }
                .time {
                  width: 100%;
                  height: auto;
                  float: left;
                  color: #ababab;
                  font-size: 1.4rem;
                }
              }
              dd {
                width: 100%;
                height: auto;
                overflow: hidden;
                float: left;
                margin-top: 1rem;
                font {
                  width: 100%;
                  height: auto;
                  overflow: hidden;
                  float: left;
                  font-size: 1.3rem;
                  color: #333;
                }
                p {
                  width: 100%;
                  height: auto;
                  float: left;
                  font-size: 1.2rem;
                  margin: 0.5rem 0 0rem 0;
                  i {
                    display: block;
                    width: auto;
                    color: #00aaff;
                    float: left;
                    padding-right: 1rem;
                  }
                }
              }
            }
          }
        }
        .dropload-down {
          height: 2.5rem;
          .dropload-noData {
            height: 2.5rem;
            line-height: 2.5rem;
            text-align: center;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
