<template>
    <div class="box">
        <div class="header">
            <div class="left" @click="$router.back()"><van-icon name="arrow-left" color="#fff" size="2.5rem"/></div>
            <div class="tab">
                <span v-for="(item,index) in tab" :key="index"
                      :class="{'check':index===change}"
                      @click="tabClick(index)">
                    {{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'lheimg',
        data(){
          return{
            tab:[
              {title:'彩色图库'},
              {title:'黑白图库'}
            ],
            change:0
          }
        },
      methods:{
        tabClick(index){
            this.change=index
            console.log(this.change)
        }
      },
      created(){

      }
    }
</script>
<style lang="less" scoped>
    .box{
        width: 100%;
        height: 100%;
        .header{
            width: 100%;
            height: 4rem;
            background: #ff3d2e;
            overflow: hidden;
            .left{
                position: absolute;
                left: 0;
                top: 0;
                box-sizing: border-box;
                padding-top:.8rem;
                line-height: 1;
            }
            .tab{
                width: 15rem;
                margin: auto;
                margin-top: 1rem;
                display: flex;
                align-items: center;
                border-radius:5px;
                overflow: hidden;
                background:#fff;
                border:1px #fff solid;
                .check{
                    font-size: 1.5rem;
                    color: #ff3d2e;
                    width: 50%;
                    height: 2.2rem;
                    text-align: center;
                    line-height: 2.2rem;
                    background: #fff;
                }
                span{
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
