<template>
    <div class="box">
        <title-header :type="'child'" title="查询助手"></title-header>
        <div class="select-head">
            <div class="date">
                <van-button plain hairline size="mini">上一年</van-button>
                <span>2019</span>
                <van-button plain hairline size="mini">下一年</van-button>
            </div>
            <div class="chose">
                <van-checkbox v-model="checked" style="margin-right: 0.5rem;">
                    <img
                            slot="icon"
                            slot-scope="props"
                            :src="props.checked ? icon.active : icon.normal"
                    >
                </van-checkbox>
                仅展示出现的期数
            </div>
        </div>
        <div class="t-head">
            <span>年份/期数</span>
            <span>一</span>
            <span>二</span>
            <span>三</span>
            <span>四</span>
            <span>五</span>
            <span>六</span>
            <span>特码</span>
        </div>
        <div class="scroll" ref="scroll">
            <div class='content'>
                <table>
                    <tbody>
                        <tr v-for="(item,index) in list" :key="index" :class="{'tr-one':index%2 == 0}">
                            <td><span>{{item.one}}</span></td>
                            <td><span>{{item.two}}</span></td>
                            <td><span>{{item.three}}</span></td>
                            <td><span>{{item.four}}</span></td>
                            <td><span>{{item.five}}</span></td>
                            <td><span>{{item.six}}</span></td>
                            <td><span>{{item.seven}}</span></td>
                            <td><span>{{item.eight}}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
  import TitleHeader from '../../components/TitleHeader.vue'
  import BScroll from 'better-scroll'
  export default {
    name: 'inquire',
    components:{
      TitleHeader
    },
    data () {
      return {
        checked:false,
        betterScroll: null,
        icon: {
          normal: require('../../assets/img/select.png'),
          active: require('../../assets/img/selected.png')
        },
        list:[
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
          {one:2019046,two:12,three:17,four:10,five:21,six:13,seven:16,eight:22,},
        ]
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
        background: #fff;
        .select-head{
            width: 100%;
            height: 3.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 .5rem;
            .chose {
                height: 2rem;
                font-size: 1.2rem;
                line-height: 2rem;
                display: flex;
                img{
                    width: 1.4rem;
                }
                span {
                    color: #ff3b2f;
                }
            }
            .date{
                span{
                    font-size: 1.3rem;
                    margin: 0 .5rem;
                }
            }
        }
        .t-head{
            width: 100%;
            height: 3.5rem;
            display: flex;
            span{
                display: block;
                width: 4.2rem;
                height: 3.5rem;
                font-size: 1.4rem;
                line-height: 3.5rem;
                color: #fff;
                background: #ff8d27;
                border-right: 1px solid #ffb878;
                text-align: center;
            }
            span:last-of-type{
                border: none;
            }
            span:first-of-type{
                width: 8rem;
            }
        }
        .scroll{
            width: 100%;
            height: calc(100% - 11rem);
            overflow: hidden;
            .content{
                width: 100%;
                min-height: calc(100% + .5rem);
                table{
                    width: 100%;
                    border: none;
                    padding: 0;
                    margin: 0;
                    tbody{
                        width: 100%;
                        .tr-one{
                            width: 100%;
                            background: #efeff4;
                        }
                        tr{
                            width: 100%;
                            td{
                                width: 4.2rem;
                                height: 3.5rem;
                                line-height: 3.5rem;
                                text-align: center;
                                font-size: 1.2rem;
                                span{
                                    padding: 3px;
                                    border-radius:50% ;
                                }
                                .check{
                                    padding: 3px;
                                    border-radius:50% ;
                                    background: #ff3b2f;
                                    color: #fff;
                                }

                            }
                            td:first-of-type{
                                width: 8rem;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
