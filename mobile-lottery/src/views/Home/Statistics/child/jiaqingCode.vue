<template>
  <div class="lhc_mantissa" v-if="headerKey=='15'">
    <ul>
      <li>
        <span
          v-for="(mantTitItem,mantTitIndex) in mantissaTitle"
          :key="mantTitIndex"
        >{{mantTitItem}}</span>
      </li>
      <li v-for="(mantItem,mantIndex) in mantList" :key="mantIndex">
        <span>{{mantItem.c_t}}</span>
        <span
          v-for="(mantValItem,mantValIndex) in mantItem.c_r"
          :key="mantValIndex"
          :class="mantValItem.co=='red'?'td_red':'td_blue'"
        >{{mantValItem.co=='red'?'家':'野'}}</span>
      </li>
    </ul>
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
      mantissaTitle: ["年份/期数", "一", "二", "三", "四", "五", "六", "特码"]
    };
  },
  "$store.state.selected": {
    handler: function(newVal, oldVal) {
      console.log('VVV')
      if (newVal.key == "15") {
        this.selected = newVal.value;
        console.log('VVVVV')
        this.getMant()
      }
    },
    deep: true
  }
};
</script>
<style lang='less' scoped>
.lhc_mantissa {
  width: 100%;
  ul {
    li {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      span {
        width: 4.3rem;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.3rem;
        display: inline-block;
        text-align: center;
      }
      span:nth-child(1) {
        width: 7.4rem;
        border: none;
      }
      .td_red {
        color: #c5322c;
      }
      .td_blue {
        color: #5bb4da;
      }
    }
    li:nth-child(1) {
      span {
        background: #fd995c;
        color: #fefefe;
        border-left: 1px solid #e9c3b2;
      }
    }
  }
}
</style>
