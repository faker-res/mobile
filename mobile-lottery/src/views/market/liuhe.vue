<template>
    <div class="box">
        <div class="header">
            <div class="left" @click="$router.back()">
                <van-icon name="arrow-left" color="#fff" size="2.5rem"/>
            </div>
            <div class="tab">
                <span v-for="(item,index) in tab" :key="index"
                      :class="{'check':index===change}"
                      @click="tabClick(index)">
                    {{item.title}}</span>
            </div>
        </div>
        <van-notice-bar class="notice" background="#ffffff" color="black" :text="text" left-icon="volume-o"></van-notice-bar>
        <div class="scroll">
            <div class="content"></div>
        </div>
        <nav-more :arr="navList" :child="navList"></nav-more>
    </div>
</template>

<script>
  import NavMore from '../../components/NavMore.vue'
  export default {
    name: 'liuhe',
    data () {
      return {
        tab: [
          { title: '周榜' },
          { title: '月榜' }
        ],
        navList:[
          {src:require('../../assets/img/market/bh@2x.png'), checkSrc:require('../../assets/img/market/bh-click--@2x.png'), title:'大小'},
          {src:require('../../assets/img/market/bh@2x.png'), checkSrc:require('../../assets/img/market/bh-click--@2x.png'), title:'单双'},
          {src:require('../../assets/img/market/bh@2x.png'), checkSrc:require('../../assets/img/market/bh-click--@2x.png'), title:'生肖'},
          {src:require('../../assets/img/market/bh@2x.png'), checkSrc:require('../../assets/img/market/bh-click--@2x.png'), title:'号码'},
          {src:require('../../assets/img/market/bh@2x.png'), checkSrc:require('../../assets/img/market/bh-click--@2x.png'), title:'更多'}
        ],
        change: 0,
        text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。'
      }
    },
    components: {
      NavMore
    },
    methods: {
      tabClick (index) {
        this.change = index
        console.log(this.change)
      },
    }
  }
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;
        .notice{
            color: black;
            background: rgb(255, 255, 255);
            height: 2rem;
            font-size: 1.2rem;
        }
        .scroll{
            width:100%;
            height:calc(100% - 11rem);
        }
        .header {
            width: 100%;
            height: 4rem;
            background: #ff3d2e;
            overflow: hidden;

            .left {
                position: absolute;
                left: 0;
                top: 0;
                box-sizing: border-box;
                padding-top: .8rem;
                line-height: 1;
            }

            .tab {
                width: 15rem;
                margin: auto;
                margin-top: 1rem;
                display: flex;
                align-items: center;
                border-radius: 5px;
                overflow: hidden;
                background: #fff;
                border: 1px #fff solid;

                .check {
                    font-size: 1.5rem;
                    color: #ff3d2e;
                    width: 50%;
                    height: 2.2rem;
                    text-align: center;
                    line-height: 2.2rem;
                    background: #fff;
                }

                span {
                    width: 50%;
                    text-align: center;
                    font-size: 1.5rem;
                    height: 2.2rem;
                    line-height: 2.2rem;
                    background: #ff3d2e;
                    color: #fff;
                }
            }
        }

    }
</style>
