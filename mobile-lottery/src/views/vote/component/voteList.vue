<template>
  <div class="vote_list">
    <div class="lhc_vote_cont_title">
      <p>
        {{hotWord}}
        <i></i>
      </p>
    </div>
    <ul id="odd" v-if="type!=='animal'">
      <li
        type="odd"
        v-for="(voteItem,voteIndex) in voteList.value"
        :key="voteIndex"
        :class="{'active':voteIndex==checkIndex}"
        v-show="voteList.value.length"
      >
        <em class="left_icon">
          <img src="../../../assets/img/vote/dan_hong.png" alt v-if="voteItem.name=='单'">
          <img src="../../../assets/img/vote/shuang_hong.png" alt v-if="voteItem.name=='双'">
          <img src="../../../assets/img/vote/hongse_a.png" alt v-if="voteItem.name=='红'">
          <img src="../../../assets/img/vote/lvse_a.png" alt v-if="voteItem.name=='绿'">
          <img src="../../../assets/img/vote/lanse_a.png" alt v-if="voteItem.name=='蓝'">
          <img src="../../../assets/img/vote/da.png" alt v-if="voteItem.name=='大'">
          <img src="../../../assets/img/vote/xiao.png" alt v-if="voteItem.name=='小'">
        </em>
        <div class="progressBar">
          <van-slider
            v-model="voteItem.number"
            @change="onChange"
            bar-height="40px"
            inactive-color="#efefef"
            active-color="#ffc731"
            disabled
          />
          <i class="bar" v-if="voteItem.number>=5" :style="{'left':(voteItem.number-5)+'%'}" ></i>
        </div>
        <b>
          <span>{{voteItem.number}}%</span>
        </b>
        <em class="check" @click="select(voteIndex,voteItem)">
          <img src="../../../assets/img/vote/me_btn_active.png">
        </em>
      </li>
    </ul>
    <div class="animate" v-else>
      <van-checkbox-group v-model="result" :max="3">
        <van-cell-group>
          <van-cell v-for="(voteItem, voteIndex) in voteList.value" clickable :key="voteIndex">
            <div class="van_con">
              <em class="left_icon">
                <img src="../../../assets/img/vote/long_hong.png" alt v-if="voteItem.name=='龙'">
                <img src="../../../assets/img/vote/shu_hong.png" alt v-if="voteItem.name=='鼠'">
                <img src="../../../assets/img/vote/niu_hong.png" alt v-if="voteItem.name=='牛'">
                <img src="../../../assets/img/vote/hu_hong.png" alt v-if="voteItem.name=='虎'">
                <img src="../../../assets/img/vote/tu_hong.png" alt v-if="voteItem.name=='兔'">
                <img src="../../../assets/img/vote/she_hong.png" alt v-if="voteItem.name=='蛇'">
                <img src="../../../assets/img/vote/ma_hong.png" alt v-if="voteItem.name=='马'">
                <img src="../../../assets/img/vote/yang_hong.png" alt v-if="voteItem.name=='羊'">
                <img src="../../../assets/img/vote/hou_hong.png" alt v-if="voteItem.name=='猴'">
                <img src="../../../assets/img/vote/ji_hong.png" alt v-if="voteItem.name=='鸡'">
                <img src="../../../assets/img/vote/gou_hong.png" alt v-if="voteItem.name=='狗'">
                <img src="../../../assets/img/vote/zhu_hong.png" alt v-if="voteItem.name=='猪'">
              </em>
              <div class="progressBar">
                <van-slider
                  v-model="voteItem.number"
                  @change="onChange"
                  bar-height="40px"
                  disabled
                  inactive-color="#efefef"
                  active-color="#ffc731"
                />
                <i class="bar" v-if="voteItem.number>=5" :style="{'left':(voteItem.number-5)+'%'}"></i>
              </div>
              <b>
                <span>{{voteItem.number}}%</span>
              </b>
              <van-checkbox
                checked-color="#07c160"
                :name="voteItem"
                ref="checkboxes"
                @click="toggle(voteIndex)"
              />
            </div>
          </van-cell>
        </van-cell-group>
      </van-checkbox-group>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    voteList: {
      type: Object
    },
    hotWord: {
      type: String
    },
    checkIndex: {
      type: Number
    }
  },
  data() {
    return {
      result: [],
      type: ""
    };
  },
  methods: {
    select(i, item) {
      this.checkIndex = i;
      this.$emit("send-VoteId", item);
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
      this.$emit("send-VoteId", this.result);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$watch("voteList", function(newVal, oldVal) {
        newVal.value.forEach(voteItem => {
          this.type = voteItem.type;
        });
      });
    });
  }
};
</script>
<style lang="less" scoped>
.vote_list {
  .lhc_vote_cont_title {
    height: 4.3rem;
    border-bottom: 1px solid #e1e1e1;
    p {
      margin: 0;
      width: 98%;
      font-size: 1.6rem;
      text-align: left;
      color: #333333;
      margin-left: 2%;
      line-height: 4.3rem;
    }
  }
  #odd {
    li {
      width: 96%;
      height: 5rem;
      margin-left: 2%;
      line-height: 5rem;
      border-bottom: 1px solid #ccc;
      background: url(../../../assets/img/vote/me_btn.png) no-repeat right;
      background-size: 1.8rem;
      .left_icon {
        text-align: left;
        img {
          width: 2.3rem;
          height: 3rem;
          vertical-align: middle;
        }
      }
      .progressBar {
        position: relative;
        margin-left: 1rem;
        border-radius: 1rem;
        display: inline-block;
        width: 23.3rem;
        height: 2rem;
        line-height: 5rem;
        vertical-align: middle;
        margin-right: 1.8rem;
        /deep/ .van-slider__bar {
          height: 2rem !important;
          .van-slider__button-wrapper {
            right: 1rem;
            .van-slider__button {
              display: none;
            }
          }
        }
        /deep/ .van-slider--disabled{
          opacity: 1;
        } 
        .bar {
          position: absolute;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          background-color: yellow;
          left: 0;
          top: 25%;
          background-color: white;
          border-radius: 50%;
        }
      }
      .progressBar::after {
        content: "";
        width: 0.2rem;
        height: 0.2rem;
        background: white;
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
      b {
        t {
          font-size: 1.4rem;
        }
      }
      .check {
        display: inline-block;
        float: right;
        width: 5rem;
        height: 5rem;
        text-align: right;
        img {
          width: 1.8rem;
          height: 1.8rem;
          display: none;
          vertical-align: middle;
        }
      }
    }
    .active {
      background: none;
      .check {
        img {
          display: inline-block;
        }
      }
    }
    li:last-child {
      border-bottom: 0;
    }
  }
  .animate {
    /deep/ .van-cell {
      padding: 0;
    }
    /deep/ .van-checkbox__icon {
      height: 1.8rem;
    }
    /deep/ .van-checkbox {
      display: inline-block;
      overflow: inherit;
      float: right;
    }
    /deep/ .van-icon {
      width: 1.8rem;
      height: 1.8rem;
      border: 2px solid #b4b498;
    }
    /deep/ .van-icon::before {
      width: 1.8rem;
      height: 1.8rem;
      line-height: 1.8rem;
      font-size: 1.6rem;
    }
    .van_con {
      width: 96%;
      height: 5rem;
      margin-left: 2%;
      line-height: 5rem;
      border-bottom: 1px solid #ccc;
      background-size: 1.8rem;
      .left_icon {
        text-align: left;
        img {
          width: 2.3rem;
          height: 3rem;
          vertical-align: middle;
        }
      }
      .progressBar {
        position: relative;
        margin-left: 1rem;
        border-radius: 1rem;
        display: inline-block;
        width: 23.3rem;
        height: 2rem;
        line-height: 5rem;
        vertical-align: middle;
        margin-right: 1.8rem;
        /deep/ .van-slider__bar {
          height: 2rem !important;
          .van-slider__button-wrapper {
            right: 1rem;
            .van-slider__button {
              display: none;
            }
          }
        }
         /deep/ .van-slider--disabled{
          opacity: 1;
        } 
        .bar {
          position: absolute;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          background-color: yellow;
          left: 0;
          top: 25%;
          background-color: white;
          border-radius: 50%;
        }
      } 
      .progressBar::after {
        content: "";
        width: 0.2rem;
        height: 0.2rem;
        background: white;
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
      b {
        t {
          font-size: 1.4rem;
        }
      }
      .check {
        display: inline-block;
        float: right;
        width: 5rem;
        height: 5rem;
        text-align: right;
        img {
          width: 1.8rem;
          height: 1.8rem;
          display: none;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>

