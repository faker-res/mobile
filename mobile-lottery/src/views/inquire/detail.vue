<template>
    <div class="box">
        <title-header :type="'child'" title="公式"></title-header>
    </div>
</template>
<script>
    import TitleHeader from '../../components/TitleHeader.vue'
    export default {
      name:'detail',
      components:{
        TitleHeader
      },
      data(){
        return{

        }
      }
    }
</script>
<style lang="less" scoped>
    .box{
        width: 100%;
        height: 100%;
        background:#fff;
    }
</style>
