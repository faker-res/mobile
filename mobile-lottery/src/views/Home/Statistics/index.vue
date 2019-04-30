<template>
  <div class="statis_box">
    <Title-Header
      :type="'child'"
      :title="headerName"
      :rightData="rightData"
      v-on:change_proup="changeProup"
      :headerKey="headerKey"
    ></Title-Header>
    <div class="scroll" ref="scroll">
      <div>
        <Tongji  :headerKey="headerKey" v-on:sendText="listenToData"></Tongji>
        <ZodiacBs  :headerKey="headerKey"  v-on:sendText="listenToData" :attribute="attribute"></ZodiacBs>
        <ZodiacZm  :headerKey="headerKey" ref="child"></ZodiacZm>
        <WaveCode  :headerKey="headerKey"></WaveCode>
        <TotalScore  :headerKey="headerKey"></TotalScore>
        <SpecialCode  :headerKey="headerKey"></SpecialCode>
        <PosiHistory  :headerKey="headerKey"></PosiHistory>
        <Mantissa  :headerKey="headerKey"></Mantissa>
        <ZodiacTm  :headerKey="headerKey"></ZodiacTm>
        <WaveTeCode  :headerKey="headerKey"></WaveTeCode>
        <TwoteMa :headerKey="headerKey"></TwoteMa>
        <WeishuCode :headerKey="headerKey"></WeishuCode>
        <ZhengweiCode :headerKey='headerKey'></ZhengweiCode>
        <NumberBand :headerKey="headerKey"></NumberBand>
        <JiaqingCode :headerKey='headerKey'></JiaqingCode>
        <LianMa :headerKey="headerKey"></LianMa>
        <LianXiao :headerKey="headerKey"></LianXiao>
      </div>
    </div>
    <NavMore :arr="navList" :child="moreList" @success="a"></NavMore>
  </div>
</template>
<script>
import Tongji from "./child/tongji.vue";
import ZodiacBs from "./child/zodiacBose.vue";
import NavMore from "../../../components/NavMore.vue";
import TitleHeader from ".././../../components/TitleHeader.vue";
import ZodiacZm from "./child/zodiacZhengma.vue";
import TotalScore from './child/totalScore.vue'
import WaveCode from './child/waveCode.vue'
import SpecialCode from './child/specialCode.vue'
import PosiHistory from './child/posiHistory.vue'
import Mantissa from './child/mantissa.vue'
import ZodiacTm from './child/zodiacTema.vue'
import WaveTeCode from './child/waveTeCode.vue'
import TwoteMa from './child/twoteMa.vue'
import WeishuCode from './child/weishuCode.vue'
import ZhengweiCode from './child/zhengweiCode.vue'
import NumberBand from './child/numberBand.vue'
import JiaqingCode from './child/jiaqingCode.vue'
import LianMa from './child/lianMa.vue'
import LianXiao from './child/lianXiao.vue'

import BScroll from "better-scroll";
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/markPoint");

export default {
  data() {
    return {
      betterScroll: null,
      moilts: false,
    
      navList: [
        {
          src: require("../../../assets/img/home/statistics/back.png"),
          checkSrc: require("../../../assets/img/home/statistics/xuan-tj@2x.png"),
          title: "六合统计",
          name:'六合统计',
          key:'01'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_su@2x.png"),
          checkSrc: require("../../../assets/img/home/statistics/xuan-shu.png"),
          title: "生肖波色",
          name:'属性参照',
          key:'02'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_te@2x.png"),
          checkSrc: require("../../../assets/img/home/statistics/xuan-te.png"),
          title: "特码历史",
          name:'特码历史',
          key:'03'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          checkSrc: require("../../../assets/img/home/statistics/xuan-zheng.png"),
          title: "正码历史",
          name:'正码历史',
          key:'04'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_all@2x.png"),
          checkSrc: require("../../../assets/img/home/statistics/ico_count_all@2x.png"),
          title: "更多"
        }
      ],
      moreList: [
        {
          src: require("../../../assets/img/home/statistics/back.png"),
          title: "六合统计",
          name:'六合统计',
          key:'01'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_su@2x.png"),
          title: "生肖波色",
          name:'属性参照',
          key:'02'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_te@2x.png"),
          title: "特码历史",
          name:'特码历史',
          key:'03'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          title: "正码历史",
          name:'正码历史',
          key:'04'
        },
        {
          src: require("../../../assets/img/home/statistics/back.png"),
          title: "尾数大小",
          name:'尾数大小统计图',
          key:'05'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_su@2x.png"),
          title: "生肖特码",
          name:'生肖特码冷热图',
          key:'06'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_te@2x.png"),
          title: "生肖正码",
          name:'生肖正码冷热图',
          key:'07'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          title: "波色特码",
          name:'波色特码冷热图',
          key:'08'
        },
        {
          src: require("../../../assets/img/home/statistics/back.png"),
          title: "波色正码",
          name:'波色正码冷热图',
          key:'09'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_su@2x.png"),
          title: "特码两面",
          name:'特码两面分析图',
          key:'10'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_te@2x.png"),
          title: "特码尾数",
          name:'特码尾数冷热图',
          key:'11'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          title: "正码尾数",
          name:"正码尾数冷热图",
          key:'12'
        },
        {
          src: require("../../../assets/img/home/statistics/back.png"),
          title: "正码总分",
          name:'特码两面分析图',
          key:'13'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_su@2x.png"),
          title: "号码波段",
          name:'号码波段分析图',
          key:'14'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_te@2x.png"),
          title: "家禽野兽",
          name:'尾数大小分析图',
          key:'15'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          title: "连码走势",
          name:'连码走势图',
          key:'16'
        },
        {
          src: require("../../../assets/img/home/statistics/ico_count_fen@2x.png"),
          title: "连肖走势",
          name:'连肖走势图',
          key:'17'
        }
      ],
      attribute: [
        {
          name: "红波",
          value: [
            "01",
            "02",
            "07",
            "08",
            "12",
            "13",
            "18",
            "19",
            "23",
            "24",
            "29",
            "30",
            "34",
            "35",
            "40",
            "45",
            "46"
          ]
        },
        {
          name: "蓝波",
          value: [
            "03",
            "04",
            "09",
            "10",
            "14",
            "15",
            "20",
            "25",
            "26",
            "31",
            "36",
            "37",
            "41",
            "42",
            "47",
            "48"
          ]
        },
        {
          name: "绿波",
          value: [
            "05",
            "06",
            "11",
            "16",
            "17",
            "21",
            "22",
            "27",
            "28",
            "32",
            "33",
            "38",
            "39",
            "43",
            "44",
            "49"
          ]
        },
        { name: "鼠", value: ["10", "22", "34", "46"] },
        { name: "牛", value: ["09", "21", "33", "45"] },
        { name: "虎", value: ["08", "20", "32", "44"] },
        { name: "兔", value: ["07", "19", "31", "43"] },
        { name: "龙", value: ["06", "18", "30", "42"] },
        { name: "蛇", value: ["05", "17", "29", "41"] },
        { name: "马", value: ["04", "16", "28", "40"] },
        { name: "羊", value: ["03", "15", "27", "39"] },
        { name: "猴", value: ["02", "14", "26", "38"] },
        { name: "鸡", value: ["01", "13", "25", "37", "49"] },
        { name: "狗", value: ["12", "24", "36", "48"] },
        { name: "猪", value: ["11", "23", "35", "47"] },
        { name: "金", value: ["01", "13", "25", "37", "49"] },
        {
          name: "木",
          value: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"]
        },
        {
          name: "水",
          value: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"]
        },
        {
          name: "火",
          value: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"]
        },
        {
          name: "土",
          value: ["01", "13", "25", "37", "49", "01", "13", "25", "37", "49"]
        }
      ],
   
      headerName: "六合统计",
      headerKey:'01',
      year:'2017',
      mantList:[],
      rightData:""
    };
  },
  methods: {
    changeProup(data) {
      this.show = data;
    },
    a(key,name) {
      this.headerKey = key;
      this.headerName = name
    },
    listenToData(data){
      this.rightData = data
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  },
  updated(){
    
  },
  components: {
    TitleHeader,
    NavMore,
    Tongji,
    ZodiacBs,
    ZodiacZm,
    WaveCode,
    TotalScore,
    SpecialCode,
    PosiHistory,
    Mantissa,
    ZodiacTm,
    WaveTeCode,
    TwoteMa,
    WeishuCode,
    ZhengweiCode,
    NumberBand,
    JiaqingCode,
    LianXiao,
    LianMa
  }
};
</script>
<style lang='less' scoped>
.statis_box {
  width: 100%;
  height: auto;
  overflow: hidden;
  .scroll {
    width: 100%;
    height: calc(100% - 4rem - 5rem);
    overflow:hidden;
  }
}
</style>
