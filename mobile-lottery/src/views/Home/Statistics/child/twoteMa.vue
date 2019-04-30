<template>
  <div class="total_box" v-if="headerKey=='10'">
    <div id="myChart" :style="{width:'100%',height:'28rem'}"></div>
  </div>
</template>
<script>
export default {
  props: {
    headerKey: {
      type: String
    }
  },
  data() {
    return {
      totalList: {
        name: "大,小,單,雙,合單,合雙,尾大,尾小",
        data: "1,0,0,1,0,2,2,0"
      },
      hotList: {}
    };
  },
  methods: {
    getChart() {
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: this.totalList.name.split(",")
        },
        yAxis: {},
        grid: {
          x: 26,
          y: 26,
          x2: 26,
          y2: 26,
          borderWidth: 1
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.totalList.data.split(","),
            barWidth: 25,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "#ff5629"
              }
            }
          }
        ]
      });
    },
    async getTmData() {
      try {
        let res = await this.$api.statistics.temaLm({ count: this.selected });
        if (res && res.code == 200) {
          this.totalList = res.body;
        }
      } catch (err) {
        console.log(err);
      }
    }
  },
  watch: {
    "$store.state.selected": {
      handler: function(newVal, oldVal) {
        if (newVal.key == "10") {
          this.selected = newVal.value;
          this.getTmData();
          this.$nextTick(() => {
            this.getChart();
          });
        }
      },
      deep: true
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
.total_box {
  #myChart {
    padding-top: 0.8rem;
  }
}
</style>
