<template>
    <div class="box">
        <title-header :type="'child'" :title="title"></title-header>
        <game-shake></game-shake>
    </div>
</template>

<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import GameShake from './shake.vue'
  export default {
    name: 'games',
    components:{
      TitleHeader,GameShake
    },
    data(){
      return{
        title:this.$route.query.title
      }
    }
  }
</script>

<style lang="less" scoped>
    .box{
        width: 100%;
        height: 100%;
    }
</style>
