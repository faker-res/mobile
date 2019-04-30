<template>
    <div class="view-page" ref="_box">
        <div class="content">
            <mt-button type="primary" @click="go('/childtwo')">go</mt-button>
        </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'children',
    data () {
      return {
        msg: 'children'
      }
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
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
