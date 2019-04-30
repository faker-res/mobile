<template>
    <div class="view-page" ref="_box">
        <div class="content">
        </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    created () {
      // this.lotteryList()
    },
    mounted () {
      this.$nextTick(()=>{
        let scroll = new BScroll(this.$refs._box, {
          scrollY: true,
          click: true
        })
        scroll.refresh()
      })
    },
    methods: {
      go(path){
        this.$router.push(path)
      },
      async lotteryList () {
        try {
          let params = {}
          let res = await this.$api.lottery.lottery(params)
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }
    },
    components: {
    }
  }
</script>
<style lang="less" scoped>
    .view-page {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .content{
            min-height: 101vh;
            span {
                font-size: 1.6rem;
                display: block;

            }
        }

    }
</style>
