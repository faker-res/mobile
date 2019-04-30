<template>
    <div class="box">
        <title-header :title="'领取红包'" type="child"></title-header>
        <div class="mark" v-show="markShow"></div>
        <transition name="bounce">
            <img class="take" v-show="takeShow" src="../../assets/img/games/lingquhongbao@2x.png" @click="takeEnev()">
        </transition>
    </div>
</template>
<script>
  import TitleHeader from '../../components/TitleHeader.vue'

  export default {
    name: 'red-enevlope',
    components: {
      TitleHeader
    },
    data () {
      return {
        markShow: false,
        takeShow: false
      }
    },
    methods: {
      setShow () {
        setTimeout(() => {
          this.markShow = true
          this.takeShow = true
        }, 1000)
      },
      async takeEnev () {
        // console.log(localStorage)
        let params = {}
        try {
          let res = await this.$api.games.takeLope(params)
          console.log(res)
        } catch (e) {
          console.log(e)
        }
      }
    },
    created () {
      this.setShow()
    }
  }
</script>
<style lang="less" scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    .box {
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/games/content@2x_37.png);
        background-position-y: 4rem;
        background-size: 100%;

        .mark {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.3);
        }

        .take {
            display: block;
            width: 20rem;
            position: absolute;
            z-index: 3;
            left: 50%;
            top: 50%;
            margin-top: -25%;
            margin-left: -25%;
        }
    }
</style>
