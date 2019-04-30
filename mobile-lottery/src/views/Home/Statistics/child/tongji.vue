<template>
  <div class="lhc_tongji" v-if="headerKey=='01'">
    <div v-for="(numberItem,numberIndex) in actions.numberList" :key="numberIndex">
      <div class="lhc_tongji_title">
        <span>{{numberItem.title}}</span>
      </div>
      <div class="lhc_tongji_con lhc_tj_bt">
        <div class="lhc_tongji_cont">
          <span class="con_green" v-for="(mostItem,mostIndex) in numberItem.con" :key="mostIndex">
            <em>{{mostItem.name}}</em>
          </span>
        </div>
      </div>
    </div>
    <div class="lhc_tongji_other lhc_tongji_one">
      <ul id="temasx">
        <li v-for="(EffectiveItem,EffectiveIndex) in actions.Effective" :key="EffectiveIndex">
          <a href="javascript:;">
            <span>{{EffectiveItem.title}}:</span>
            <span>
              <em
                data-id="13"
                v-for="(EffChildItem,EffChildIndex) in EffectiveItem.con"
                :key="EffChildIndex"
              >{{EffChildItem.name}}</em>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="lhc_tongji_other lhc_tongji_two">
      <ul id="bosetema">
        <li v-for="(WaveColorItem,WaveColorIndex) in actions.WaveColor" :key="WaveColorIndex">
          <a href="javascript:;">
            <span>特码出现期数最多的波色:</span>
            <span>
              <em
                :class="{'tet_red':WaveColorItem.name=='紅波','tet_greed':WaveColorItem.name=='綠波','tet_blue':WaveColorItem.name=='藍波'}"
                data-id="41"
                v-for="(WaveColorItem,WaveColorIndex) in WaveColorItem.con"
                :key="WaveColorIndex"
              >{{WaveColorItem.name}}</em>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div class="lhc_tongji_other lhc_tongji_three">
      <ul id="wsss">
        <li v-for="(mantissItem,mantissIndex) in actions.mantissaList" :key="mantissIndex">
          <a href="javascript:;">
            <span>{{mantissItem.title}}:</span>
            <span>
              <em
                data-id="15"
                v-for="(mainChildItem,mainChildIndex) in mantissItem.con"
                :key="mainChildIndex"
              >{{mainChildItem.name}}</em>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import data from "../components/data.js";
export default {
  mixins: [data],
  props: {
    headerKey: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      colums: ["近50期", "近100期", "近150期", "近200期"]
    };
  },
  watch: {
    headerKey: function(newVal, oldVal) {
      if (newVal == "02") {
        this.$emit("sendText", {});
      } else if (newVal == "05" ||newVal == '15' || newVal ==  '16' ||newVal == '17') {
        this.$emit("sendText", {
          title: "选择年份:",
          value: this.yearList,
          key: "year"
        });
      } else {
        this.$emit("sendText", { title: "期数:100", value: this.colums });
      }
    },
    "$store.state.selected": {
      handler: function(newVal, oldVal) {
        if(newVal.key=="01"){
          this.selected = newVal.value
          this.getLh()
        }
      },
      deep: true
    }
  },
  mounted() {
    this.$emit("sendText", { title: "期数:100", value: this.colums });
  },
  created() {
    this.getLh();
  }
};
</script>
<style lang="less" scoped>
.lhc_tongji {
  overflow: hidden;
  .lhc_tongji_title {
    background: #e7e7e7;
    width: 100%;
    height: 3.25rem;
    float: left;
    border-bottom: 1px solid #ccc;
    line-height: 3.25rem;
    span {
      width: 96%;
      height: 100%;
      display: block;
      margin: 0px auto;
      color: #333333;
      font-size: 1.5rem;
      text-align: left;
    }
  }
  .lhc_tongji_con {
    width: 100%;
    height: auto;
    float: left;
    border-bottom: 1px solid #ccc;
    background: #fff;
    .lhc_tongji_cont {
      width: 100%;
      height: 100%;
      span {
        display: block;
        width: 3rem;
        height: 3rem;
        margin: 0.5rem 0.375rem;
        background-size: 3rem;
        border-radius: 50%;
        float: left;
        em {
          display: block;
          width: 100%;
          height: 100%;
          color: #000;
          font-size: 1.6rem;
          line-height: 2.5rem;
          text-align: center;
        }
      }
      .con_green {
        background: url(../../../../assets/img/lottery/lvse@2x.png) no-repeat;
        background-size: 100% 100%;
      }
      .con_red {
        background: url(../../../../assets/img/lottery/hongse@2x.png) no-repeat;
        background-size: 100% 100%;
      }
      .con_blue {
        background: url(../../../../assets/img/lottery/lanse@2x.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
  .lhc_tongji_other {
    width: 100%;
    height: auto;
    overflow: hidden;
    float: left;
    margin-top: 1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      float: left;
      .tet_red {
        color: #fc6757;
      }
      .tet_greed {
        color: #7fbe28;
      }
      .tet_blue {
        color: #5bb4da;
      }
      li {
        width: 100%;
        height: 4.5rem;
        border-bottom: 1px solid #ccc;
        line-height: 4.5rem;
        a {
          span:nth-child(1) {
            padding-left: 0.65rem;
          }
          span {
            display: block;
            width: 50%;
            height: 100%;
            float: left;
            color: #8e8e93;
            font-size: 1.3rem;
            text-align: left;
          }
          em {
            width: 16.6%;
            display: block;
            height: 100%;
            float: left;
            color: #000000;
            text-align: center;
            font-size: 1.7rem;
            line-height: 4.75rem;
          }
        }
      }
    }
  }
  .lhc_tongji_two {
    a {
      em {
        width: 33.3% !important;
        margin: 0;
        text-align: center;
      }
    }
  }
  .lhc_tongji_three {
    a {
      em {
        width: 20% !important;
      }
    }
  }
}
</style>


