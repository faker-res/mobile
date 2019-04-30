<template>
  <div class="posiCode_box" v-if="headerKey=='07'" ref="posiCode">
    <div class="lhc_charts_title">
      <p>当前统计期数:{{$store.state.selected.value}}</p>
      <p class="btn_bar">
         <span
          class="btn_pie hot"
          :class="{'active':active==rightIndex}"
          v-for="(rightItem,rightIndex) in navRight"
          :key="rightItem"
          @click="changeNav(rightIndex)"
        >{{rightItem}}</span>
      </p>
    </div>
    <div class="charts_main">
      <div id="main" :style="{width:'100%',height:'50rem',top:'-5rem',position:'relative',zIndex:'-99'}"></div>
    </div>
    <div class="bar_text" style="top: 37rem;">
      <p>出现期数（所选期数范围内遗漏的期数）</p>
      <p style="display: none;">出现期数（所选期数范围内出现的期数）</p>
    </div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/legend";
import "echarts/lib/component/title";
export default {
  props: {
    headerKey: {
      type: String
    }
  },
  data() {
    return {
      navRight: ["热图", "冷图"],
      posiList: {
        hotNum: "鼠,牛,虎,兔,龍,蛇,馬,羊,猴,雞,狗,豬",
        hotData: "9,13,8,9,7,4,7,5,11,10,8,9",
        omitNum: "鼠,牛,虎,兔,龍,蛇,馬,羊,猴,雞,狗,豬",
        omitData: "3,34,43,12,23,23,43,234,23,12,12,23"
      },
      count: 100,
      hotList:[],
      active:0
    };
  },
  methods: {
    async getPosiList() {
      try {
        let res = await this.$api.statistics.shengxiao({ count: this.selected });
        if (res && res.code == 200) {
          this.posiList = res.body;
          console.log(this.posiList);
        }
      } catch (err) {
        console.log(err);
      }
    },
    changeNav(i) {
      this.active = i;
      this.hotList = []
      this.getCharts()
    },
    getCharts() {
      console.log('VVVVVVVVVVVVVVVVVVVVVVVV')
      var myChart = this.$echarts.init(document.getElementById("main"));
      this.hotList= []
       if (this.active == 0) {
        this.posiList.hotNum.split(",").forEach((item, index) => {
          let hotObj = {};
          hotObj.name = item;
          hotObj.value = this.posiList.hotData.split(",")[index] * 1;
          this.hotList.push(hotObj);
        });
      } else {
        this.posiList.omitNum.split(",").forEach((item, index) => {
          console.log(+this.posiList.omitData.split(",")[index])
          let hotObj = {};
          hotObj.name = item;
          hotObj.value = (+this.posiList.omitData.split(",")[index]);
          this.hotList.push(hotObj);
        });
      }
      myChart.setOption({
        legend: {
          left: "center",
          top: "bottom",
          width: 300,
          height: 20,
          itemWidth: 20,
          itemHeight: 15,
          borderColor: "#000000",
          borderWidth: 1,
          data: this.hotList
        },
        formatter: function(val) {
          return val.split("-").join("\n");
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} :({d}次)"
        },
        series: [
          {
            name: "出现期数",
            type: "pie",
            radius: ["20%", "50%"],
            data: this.hotList,
            labelLine: {
              normal: {
                show: true, // show设置线是否显示，默认为true，可选值：true ¦ false,
                length: 5
              }
            },
            label: {
              normal: {
                formatter: "{b}:{c}次"
              }
            },
            emphasis: {
              label: {
                show: true,
                formatter: "{b}:{c}次"
              }
            }
          }
        ]
      });
    }
  },
  watch: {
    "$store.state.selected": {
      handler: function(newVal, oldVal) {
        if(newVal.key=="07"){
          this.selected = newVal.value
          this.getPosiList()
          this.$nextTick(()=>{
            this.getCharts()
          })
        }
      },
      deep: true
    }
  },
  created() {
    this.getPosiList();
  }
};
</script>
<style lang="less" scoped>
.posiCode_box {
  .lhc_charts_title {
    width: 100%;
    padding: 0 2%;
    height: 5rem;
    float: left;
    font-size: 1.6rem;
    line-height: 5rem;
    background: #fff;
    p {
      float: left;
      font-weight: bold;
      color: #000;
      width: 50%;
    }
    .btn_bar {
      float: right;
      width: 13rem;
      height: 3rem;
      margin: 1rem 0;
      line-height: 3rem;
      border-radius: 0.5rem;
      border: 1px solid #ee8923;
      overflow: hidden;
    }
    p:nth-child(2) .btn_pie {
      display: block;
      width: 50%;
      height: 100%;
      text-align: center;
      float: left;
      color: #ee8923;
      font-size: 1.5rem;
    }
    .active {
      background: #ee8923;
      color: #fff !important;
    }
  }
  .charts_main {
    float: left;
    width: 100%;
    height: 50rem;
    #myChart {
      width: 95%;
      height: 300px;
      margin: 20px auto;
      border: 1px solid #ccc;
    }
  }
  .bar_text {
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    text-align: center;
    bottom: 6.25rem;
    font-size: 1.3rem;
    color: #000;
  }
}
</style>
