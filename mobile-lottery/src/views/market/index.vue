<template>
    <div class="box">
        <title-header :type="'child'" title="淘料市场"></title-header>
        <div class="scroll" ref="scroll">
            <div class="content">
                <div class="notice">
                    说明：淘料市场为第三方入住平台，只提供资料参考信息！资料内容与六合宝典无关，不代表六合宝典的我观点。
                </div>
                <div class="list">
                    <ul>
                        <li v-for="(item,index) in imgList" :key="index">
                            <img :src="item.src" alt @click="$router.push(item.path)">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import BScroll from 'better-scroll'

  export default {
    name: 'index',
    components: {
      TitleHeader
    },
    data () {
      return {
        betterScroll: null,
        imgList: [
          {src:require('../../assets/img/market/lhw@2x.png'), path:'liuhe'},
          {src:require('../../assets/img/market/lsb@2x.png'), path:'victory'},
          {src:require('../../assets/img/market/wdgz@2x.png')},
          {src:require('../../assets/img/market/fbsx@2x.png')}
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
    }
  }
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;
        background: #efeff4;

        .scroll {
            width: 100%;
            height: calc(100% - 4rem);

            .content {
                width: 100%;
                background: #efeff4;
                min-height: calc(100% + 1rem);

                .notice {
                    width: 35.5rem;
                    background: url("../../assets/img/market/shuoming@2x_53.png") 0 0 no-repeat;
                    background-size: 100%;
                    height: 6.65rem;
                    margin: auto;
                    font-size: 1.1rem;
                    padding: 1.8rem 1rem;
                    color: #7b7b7b;
                }

                .list {
                    width: 35.2rem;
                    margin: auto;

                    ul {
                        width: 100%;

                        li {
                            width: 100%;
                            margin-top: 2rem;
                            img {
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
