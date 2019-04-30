<template>
    <div class="nav">
        <div class="top"></div>
        <ul class="nav-c">
            <li>
                <img src="../../../assets/img/home@2x.png" alt="" v-show="path!='/home'" @click="go('/home')">
                <img src="../../../assets/img/home-click@2x.png" alt="" v-show="path==='/home'">
                <span :class="{'red':path==='/home'}">六合统计</span>
            </li>
            <li>
                <img src="../../../assets/img/caimintoupiao@2x.png" alt="" v-show="path!='/vote'" @click="go('/vote')">
                <img src="../../../assets/img/caimintoupiao_click@2x.png" alt="" v-show="path==='/vote'">
                <span :class="{'red':path==='/vote'}">生效统计</span>
            </li>
            <li>
                <img src="../../../assets/img/share@2x.png" alt="" v-show="path!='/share'" @click="go('/share')">
                <img src="../../../assets/img/share-click@2x.png" alt="" v-show="path==='/share'">
                <span :class="{'red':path==='/share'}">特码历史</span>
            </li>
            <li>
                <img src="../../../assets/img/me@2x.png" alt="" v-show="path!='/personal'" @click="go('/personal')">
                <img src="../../../assets/img/me-click@2x.png" alt="" v-show="path==='/personal'">
                <span :class="{'red':path==='/personal'}">正码历史</span>
            </li>
            <li>
                <img src="../../../assets/img/me@2x.png" alt="" v-show="path!='/personal'" @click="go('/personal')">
                <img src="../../../assets/img/me-click@2x.png" alt="" v-show="path==='/personal'">
                <span :class="{'red':path==='/personal'}">更多</span>
            </li>
        </ul>
    </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods: {
      go (path) {
        this.$router.push(path)
      }
    },
    mounted () {

    },
    computed: {
      path () {
        return this.$route.path
      }
    }
  }
</script>
<style lang="less" scoped>
    .nav {
        width: 100%;
        height: 5rem;
        position: relative;
        left: 0;
        bottom: 0;
        border-top: 1px solid #eaeaea;
        .nav-c {
            width: 100%;
            height: 4.9rem;
            display: flex;
            background: #fafafa;
            li {
                width: calc(100% / 4);
                height: 100%;

                img {
                    display: block;
                    margin: auto;
                    margin-top: .6rem;
                    width: 1.95rem;
                    height: 2.15rem;
                }

                span {
                    display: block;
                    font-size: 1.2rem;
                    margin-top: .4rem;
                    text-align: center;
                }

                .red {
                    color: #ff483d;
                }
            }
        }
    }
</style>
