<template>
  <div class="lhc_zodiac" v-if="headerKey=='02'">
    <div v-for="(attrItem,attrIndex) in attribute" :key="attrIndex">
      <div class="lhc_tongji_title">
        <span>{{attrItem.name}}</span>
      </div>
      <div class="lhc_tongji_con lhc_tj_bt">
        <div class="lhc_tongji_cont">
          <span
            :class="{
                'con_red':attrValItem=='01' || attrValItem=='02' || attrValItem=='07' || attrValItem=='08' || attrValItem=='12' || attrValItem=='13'|| attrValItem=='18' || attrValItem=='19'|| attrValItem=='23' || attrValItem=='24' ||attrValItem=='29' || attrValItem=='30' || attrValItem=='34' || attrValItem=='35' || attrValItem=='40' || attrValItem=='45'|| attrValItem=='46',
                'con_blue': attrValItem=='03'|| attrValItem=='04' || attrValItem=='09' || attrValItem=='10' || attrValItem=='14'|| attrValItem=='15' || attrValItem=='20'|| attrValItem=='25' || attrValItem=='26' ||
                attrValItem=='31' || attrValItem=='36' || attrValItem=='37' || attrValItem=='41' || attrValItem=='42' || attrValItem=='47'|| attrValItem=='48',
                'con_green': attrValItem=='05'|| attrValItem=='06' || attrValItem=='11' || attrValItem=='16' || attrValItem=='17'|| attrValItem=='21' || attrValItem=='22'|| attrValItem=='27' || attrValItem=='28' ||
                attrValItem=='32' || attrValItem=='33' || attrValItem=='38' || attrValItem=='39' || attrValItem=='43' || attrValItem=='44' || attrValItem=='49'
                }"
            v-for="(attrValItem,attrValIndex) in attrItem.value"
            :key="attrValIndex"
          >
            <em>{{attrValItem}}</em>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from '../components/data.js'
export default {
  mixins:[data],
  props: {
    attribute: {
      type: Array
    },
    headerKey: {
      type: String
    }
  },
  
};
</script>
<style lang="less" scoped>
.lhc_zodiac {
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
          line-height:3rem;
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

