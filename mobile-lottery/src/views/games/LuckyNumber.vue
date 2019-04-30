<template>
    <div class="box">
        <title-header :type="'child'" title="幸运号码"></title-header>
        <img src="../../assets/img/games/banner.png" alt="">
        <div class="scroll" ref="scroll">
            <div class="content">
                <ul class="list">
                    <li v-for="(item,index) in listTop" :key="index">
                        <img :src="item.src" alt @click="goDetail(item.title)">
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import BScroll from 'better-scroll'
  export default {
    name: 'LuckyNumber',
    components: {
      TitleHeader
    },
    data () {
      return {
        betterScroll: null,
        listTop:[
          {src: require('../../assets/img/games/yaoyiyao@2x.png'), title: '摇一摇'},
          {src: require('../../assets/img/games/shengxiao@2x.png'), title: '生肖卡牌'},
          {src: require('../../assets/img/games/xuanji@2x.png'), title: '玄机锦囊'},
          {src: require('../../assets/img/games/lianren@2x.png'), title: '恋人特码'},
          {src: require('../../assets/img/games/chaxun@2x.png'), title: '查询助手'},
          {src: require('../../assets/img/games/zhuanpan@2x.png'), title: '波肖转盘'},
          {src: require('../../assets/img/games/riqi@2x.png'), title: '搅珠日期'},
          {src: require('../../assets/img/games/cesuan@2x.png'), title: '天机测算'},
          {src: require('../../assets/img/games/youxi@2x.png'), title: '幸运摇奖'},
        ]
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.betterScroll = new BScroll(this.$refs.scroll, {
          scrollY: true,
          click: true
        })
        this.betterScroll.refresh()
      })
    },
    methods:{
      goDetail(t){
        this.$router.push({path:'/games',query:{title:t}})
      }
    }
  }
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            display: block;
        }

        .scroll {
            width: 100%;
            height: calc(100% - 17rem);
            overflow: hidden;
            .content {
                width: 100%;
                min-height: calc(100% + .5rem);

                .list {
                    width: 100%;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    li {
                        width: calc(100% / 3);
                        box-sizing: border-box;
                        margin-top: 2.5rem;

                        img {
                            display: block;
                            width: 6rem;
                            height: 6rem;
                            margin: auto;
                        }

                        span {
                            display: block;
                            color: #555;
                            font-size: 1.4rem;
                            line-height: 1.4rem;
                            margin-top: 1.2rem;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>
