<template>
    <div class="box">
        <title-header title="公式" :type="'child'"></title-header>
        <div class="img"><img src="../../assets/img/lottery/kaijiang_banner@2x.png" alt></div>
        <div class="scroll" ref="scroll">
            <div class="content">
                <ul>
                    <li @click="$router.push('/formulaDetail')"><span>046期</span>五七肖特（无错规律）</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import BScroll from 'better-scroll'
  export default {
    name: 'index',
    components:{
      TitleHeader
    },
    data(){
      return{
        betterScroll: null,
      }
    },
    mounted(){
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
    .box{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            display: block
        }
        .scroll{
            width: 100%;
            height: calc(100% - 9.5rem);
            overflow: hidden;
            background: #fff;
            .content{
                width: 100%;
                min-height: calc(100% + .5rem);
                ul{
                    width: 100%;
                    li{
                        width: 100%;
                        height: 4.5rem;
                        line-height: 4.5rem;
                        padding: 0 1rem;
                        font-size: 1.5rem;
                        border-bottom: 1px solid #f7f7f9;
                        span{
                            background: #ff8827;
                            padding: 2px 4px;
                            color: #fff;
                            border-radius: 5px;
                            font-size: 1.4rem;
                            margin-right: 1rem;
                        }
                    }
                }
            }
        }
    }
</style>
