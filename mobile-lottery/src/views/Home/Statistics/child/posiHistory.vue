<template>
  <div class="posiHis_box" v-if="headerKey=='04'">
    <div class="posiHis_title">
      <p>当前统计期数:100</p>
    </div>
    <div class="posiHis_charts1">
      <div class="posiHis_small_tit">
        <p>
          <span>
            <img src="../../../../assets/img/home/statistics/icon-huo.png" alt>
          </span>
          正码历史热图（所选期数范围内出现的次数）
        </p>
      </div>
      <div class="posiHis_main">
        <div id="myCharts" :style="{width:'100%',height:'20rem'}"></div>
      </div>
    </div>
    <div class="posiHis_charts2">
      <div class="posiHis_small_tit">
        <p>
          <span>
            <img src="../../../../assets/img/home/statistics/ico_count_4@2x.png" alt>
          </span>
          正码历史热图（所选期数范围内出现的次数）
        </p>
      </div>
      <div class="posiHis_main">
        <div id="myCharts2" :style="{width:'100%',height:'20rem'}"></div>
      </div>
    </div>
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
      posiList: {},
    };
  },
  methods: {
    getChartsData() {
      var myChart = this.$echarts.init(document.getElementById("myCharts"));
      var myChart2 = this.$echarts.init(document.getElementById("myCharts2"));
      var endPercent = (6 / this.posiList.hotNum.length) * 100;
      myChart.setOption({
        xAxis: {
          type: "category",
          data: this.posiList.hotNum.split(","),
          axisLine: {
            lineStyle: {
              color: "#3a3a3a",
              width: 2
            }
          },
          axisTick:{
            inside:true
          },
          axisLabel: {
            show: true,
            textStyle: {
                color: '#777777'
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#3a3a3a",
              width: 2
            }
          },
          axisTick:{
            inside:true
          },
          axisLabel: {
            show: true,
            textStyle: {
                color: '#777777'
            }
         }
        },
        grid: {
          top: "16%", // 等价于 y: '16%'
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        series: [
          {
            data: this.posiList.hotData.split(","),
            type: "line",
            symbolSize: 10,
            itemStyle: {
              normal: {
                // 拐点上显示数值
                label: {
                  show: true
                },
                borderColor: "red", // 拐点边框颜色
                lineStyle: {
                  width: 2, // 设置线宽
                  type: "solid" //'dotted'虚线 'solid'实线
                }
              }
            }
          }
        ],
        dataZoom: [
          //给x轴设置滚动条
          {
            show: true,
            realtime: true,
            y: 36,
            type: "inside",
            height: 20,
            start: 0,
            end: 20
          }
        ]
      });
      myChart2.setOption({
        xAxis: {
          type: "category",
          data: this.posiList.omitNum.split(","),
          axisLine: {
            lineStyle: {
              color: "#3a3a3a",
              width: 2
            }
          },
          axisTick:{
            inside:true
          },
          axisLabel: {
            show: true,
            textStyle: {
                color: '#777777'
            }
         }
        },
        yAxis: {
          type: "value",
           axisLine: {
            lineStyle: {
              color: "#3a3a3a",
              width: 2
            }
          },
          axisTick:{
            inside:true
          },
          axisLabel: {
            show: true,
            textStyle: {
                color: '#777777'
            }
         }
        },
        grid: {
          top: "16%", // 等价于 y: '16%'
          left: "3%",
          right: "3%",
          bottom: "3%",
          containLabel: true
        },
        series: [
          {
            data: this.posiList.omitData.split(","),
            type: "line",
            symbolSize: 10,
            itemStyle: {
              normal: {
                // 拐点上显示数值
                label: {
                  show: true,
                  color:"#4d98ff"
                },
                borderColor: "#4d98ff", // 拐点边框颜色
                lineStyle: {
                  width: 2, // 设置线宽
                  color:"#4d98ff",
                  type: "solid" //'dotted'虚线 'solid'实线
                }
              }
            }
          }
        ],
        dataZoom: [
          //给x轴设置滚动条
          {
            show: true,
            realtime: true,
            y: 36,
            type: "inside",
            height: 20,
            start: 0,
            end: 20
          }
        ]
      });
    },
    async getTip(){
      try{
        let res = await this.$api.statistics.getTip({
          count:this.selected
        })
        if(res && res.code ==200){
          this.posiList = res.body
        }
      }catch(err){
        console.log(err)
      }
    }
  },
  watch: {
   "$store.state.selected": {
      handler: function(newVal, oldVal) {
        if(newVal.key=="04"){
          this.$nextTick(()=>{
            this.getChartsData()
          })
          this.selected = newVal.value
          this.getTip()
        }
      },
      deep: true
    }
  },
  mounted() {
    this.getTip()
  }
};
</script>
<style lang='less' scoped>
.posiHis_box {
  .posiHis_title {
    width: 100%;
    height: auto;
    background: #e7e7e7;
    p {
      text-align: center;
      font-size: 1.7rem;
      line-height: 5rem;
    }
  }
  .posiHis_charts1,
  .posiHis_charts2 {
    .posiHis_small_tit {
      width: 100%;
      float: left;
      height: auto;
      background: #e7e7e7;
      p {
        font-size: 1.2rem;
        height: 3rem;
        line-height: 3rem;
        span {
          display: block;
          float: left;
          padding: 0.5rem;
          width: 3rem;
          height: 100%;
          img {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
    .posiHis_main {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
  }
}
</style>
