<template>
    <div class="box">
        <title-header title="连胜榜" :type="'child'"></title-header>
        <div class="tab">
            <ul>
                <li v-for="(item,index) in tab" :key="index" :class="{'check':change===index}" @click="tabClick(index)">
                    {{item.title}}
                </li>
            </ul>
        </div>
        <van-notice-bar class="notice" background="#ffffff" color="black" :text="text"
                        left-icon="volume-o"></van-notice-bar>
        <div class="chose">
            <van-checkbox v-model="checked">
                <img
                        slot="icon"
                        slot-scope="props"
                        :src="props.checked ? icon.active : icon.normal"
                >
            </van-checkbox>
            仅展示<span>046</span>期发布心水的用户
        </div>
        <div class="scroll" ref="scroll">
            <div class="content">
                <ul>
                    <li>
                        <div class="header-pic"><img :src="defaultImg"><span>Name</span></div>
                        <div class="right">
                            <div class="detail">
                                <span class="t1">特码大小</span><br>
                                <span class="t2">已连胜：1</span>
                                <span class="t3">已查数：5555</span>
                                <span class="t4">大小</span>
                            </div>
                            <div class="but">本期还未发布</div>
                        </div>
                    </li>
                    <li>
                        <div class="header-pic"><img :src="defaultImg"><span>Name</span></div>
                        <div class="right">
                            <div class="detail">
                                <span class="t1">特码大小</span><br>
                                <span class="t2">已连胜：1</span>
                                <span class="t3">已查数：5555</span>
                                <span class="t4">大小</span>
                            </div>
                            <div class="but">本期还未发布</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav-more :arr="navList" :child="navList"></nav-more>
    </div>
</template>

<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import NavMore from '../../components/NavMore.vue'
  import BScroll from 'better-scroll'

  export default {
    name: 'victory',
    components: {
      TitleHeader,
      NavMore
    },
    data () {
      return {
        text: '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。',
        change: 0,
        checked: true,
        betterScroll: null,
        icon: {
          normal: '//img.yzcdn.cn/icon-normal.png',
          active: '//img.yzcdn.cn/icon-active.png'
        },
        defaultImg: require('../../assets/img/personal/06190b4.png'),
        navList: [
          {
            src: require('../../assets/img/market/bh@2x.png'),
            checkSrc: require('../../assets/img/market/bh-click--@2x.png'),
            title: '大小'
          },
          {
            src: require('../../assets/img/market/bh@2x.png'),
            checkSrc: require('../../assets/img/market/bh-click--@2x.png'),
            title: '单双'
          },
          {
            src: require('../../assets/img/market/bh@2x.png'),
            checkSrc: require('../../assets/img/market/bh-click--@2x.png'),
            title: '生肖'
          },
          {
            src: require('../../assets/img/market/bh@2x.png'),
            checkSrc: require('../../assets/img/market/bh-click--@2x.png'),
            title: '号码'
          },
          {
            src: require('../../assets/img/market/bh@2x.png'),
            checkSrc: require('../../assets/img/market/bh-click--@2x.png'),
            title: '更多'
          }
        ],
        tab: [
          { title: '时间' },
          { title: '查看数' },
          { title: '连胜' }
        ]
      }
    },
    methods: {
      tabClick (index) {
        this.change = index
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
    }
  }
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;

        .notice {
            color: black;
            background: #eae9e9;
            height: 2rem;
            font-size: 1.2rem;
        }

        .chose {
            width: 100%;
            height: 2rem;
            font-size: 1.2rem;
            line-height: 2rem;
            background: #dedede;
            padding: 0 1rem;
            display: flex;

            span {
                color: #ff3b2f;
            }
        }

        .tab {
            width: 95%;
            height: 2.7rem;
            border-radius: 5px;
            border: 1px solid #ff3b2f;
            overflow: hidden;
            margin: 1rem auto;

            ul {
                width: 100%;
                height: 100%;
                display: flex;

                li {
                    width: calc(100% / 3);
                    height: 100%;
                    text-align: center;
                    border-right: 1px solid #ff3b2f;
                    font-size: 1.4rem;
                    line-height: 2.7rem;
                    color: #616162;
                }

                li:nth-of-type(3) {
                    border: none;
                }

                .check {
                    background: #ff3b2f;
                    color: #ffffff;
                }
            }
        }

        .scroll {
            width: 100%;
            height: calc(100% - 18rem);
            overflow: hidden;
            .content {
                width: 100%;
                min-height: calc(100% + .5rem);

                ul {
                    width: 100%;

                    li {
                        width: 100%;
                        height: 7.5rem;
                        display: flex;
                        background: #fff;
                        margin-top: 1rem;

                        .header-pic {
                            width: 7.5rem;
                            height: 7.5rem;
                            border-right: 1px solid #ccc;

                            img {
                                width: 5rem;
                                display: block;
                                margin: auto;
                                border-radius: 50%;
                            }

                            span {
                                display: block;
                                font-size: 1.2rem;
                                text-align: center;
                                margin-top: .5rem;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                        }

                        .right {
                            padding: 0 .6rem;
                            width: calc(100% - 8rem);

                            .detail {
                                position: relative;
                                height: 4rem;
                                box-sizing: border-box;

                                .t1 {
                                    font-size: 1.4rem;
                                    color: #000;
                                }

                                .t2 {
                                    font-size: 1.2rem;
                                    color: #000;
                                }

                                .t3 {
                                    font-size: 1.2rem;
                                    color: #000;
                                    margin-left: 5rem;
                                }

                                .t4 {
                                    position: absolute;
                                    right: 0;
                                    top: 0;
                                    height: 4rem;
                                    width: 2rem;
                                    font-size: 1.4rem;
                                    display: flex;
                                    align-items: center;
                                    text-align: center;
                                    color: #fff;
                                    background: #eeb267;
                                }
                            }

                            .but {
                                width: 100%;
                                border-radius: 5px;
                                text-align: center;
                                background: #f3f1f1;
                                color: #9c9c9e;
                                padding: .2rem 0;
                                font-size: 1.5rem;
                                margin-top: .5rem;
                                border: 1px solid #ccc;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
