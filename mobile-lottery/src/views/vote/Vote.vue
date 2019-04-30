<template>
  <div class="vote_box">
    <title-header :title="'彩民投票'"></title-header>
    <div class="list_title">
      <van-tabs v-model="tabsActvie" type="card" swipeable >
        <van-tab v-for="(vanItem,vanIndex) in vanList" :key="vanIndex">
          <div slot="title" class="tab-title">
            <span>{{vanItem}}</span>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <div class="scroll" ref="scroll">
      <div class="vote_content">
        <div class="periods">
          <p class="lhc_vote_title">
            <span>04月16日21时30分 第2019044期</span>
          </p>
          <div class="lhc_vote_cont">
            <Vote-List
              :voteList="voteList"
              :hotWord="hotWord"
              :checkIndex="checkIndex"
              v-on:send-VoteId="getVoteId"
            ></Vote-List>
          </div>
          <div class="submitBtn" @click="sendvote">投票</div>
            

        </div>
      </div>
    </div>
    <nav-button></nav-button>
  </div>
</template>
<script>
import TitleHeader from "../../components/TitleHeader.vue";
import NavButton from "../../components/NavButton.vue";
import VoteList from "./component/voteList.vue";
import BScroll from "better-scroll";
export default {
  name: "vote",
  data() {
    return {
      vanList: ["单双投票", "波色投票", "大小投票", "生肖投票"],
      tabsActvie: 0,
      uid: 15,
      voteList: {},
      hotWord: "",
      betterScroll: null,
      type: "",
      uid: "15",
      voteId: "2",
      checkIndex: -1,
      value:23
    };
  },
  methods: {
    // 得到投票信息
    async getVote(tabsIndex) {
      try {
        let res = await this.$api.vote.getVote({
          uid: this.uid
        });
        if (res && res.code == 200) {
          switch (tabsIndex) {
            case 0:
              this.voteList = res.body.odd;
              this.hotWord = "本期热门单双：双";
              break;
            case 1:
              this.voteList = res.body.color;
              this.hotWord = "本期热门波色：绿";
              break;
            case 2:
              this.voteList = res.body.size;
              this.hotWord = "本期热门大小：大";
              break;
            case 3:
              this.voteList = res.body.animal;
              this.hotWord = "本期热门生肖：猴,兔,羊";
              break;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    onChange(){},

    // 投票
    async sendvote() {
      if (this.uid) {
        if (this.type) {
          if (this.voteId) {
            try {
              let res = await this.$api.vote.sendVote({
                type: this.type,
                uid: this.uid,
                voteId: this.voteId
              });
              if (res && res.code == 200) {
                this.$toast("投票成功");
              } else {
                this.$toast(res.body);
              }
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
    },
    getVoteId: function(voteData) {
      if (voteData instanceof Array) {
        let voteArr = [];
        voteData.forEach(item => {
          voteArr.push(item.id);
          this.type = item.type;
        });
        this.voteId = voteArr.toString();
      } else {
        this.voteId = voteData.id;
        this.type = voteData.type;
      }
    }
  },
  watch: {
    tabsActvie(newValue, oldValue) {
      this.voteId = ''
      this.checkIndex = -1;
      this.getVote(newValue);
    }
  },
  mounted() {
    this.getVote(this.tabsActvie);
    this.$nextTick(() => {
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  },
  components: {
    TitleHeader,
    NavButton,
    VoteList
  }
};
</script>
<style lang="less" scoped>
.vote_box {
  width: 100%;
  height: 100%;
  .list_title {
    position: fixed;
    width: 100%;
    z-index: 9999;
    background-color: white;
    height: 6rem;
    line-height: 3.5rem;
    padding: 1.3rem 0;
    border-bottom: 1px solid #ccc;
  }
  .scroll {
    margin-top: 6rem;
    background-color: #efeff4;
    width: 100%;
    height: calc(100% - 4rem - 5rem - 6rem);
    .periods {
      width: 100%;
      height: auto;
      line-height: 3rem;
      .lhc_vote_title {
        text-align: center;

        margin: 0;
        span {
          font-size: 1.5rem;
          color: #999999;
        }
      }
      .lhc_vote_cont {
        background: white;
      }
      .submitBtn {
        color: white;
        text-align: center;
        font-size: 2rem;
        line-height: 4.3rem;
        margin: 0 auto;
        margin-top: 2rem;
        width: 34.5rem;
        height: 4.3rem;
        border-radius: 0.5rem;
        background:url(../../assets/img/vote/anniu_tp.png)no-repeat;
        background-size:100% 100%;
      }
    }
  }
}
</style>
