<template>
    <div class="box" ref="box">
        <transition :name="$store.state.pageAnimation">
            <router-view class="app-transition-router"></router-view>
        </transition>
    </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {

      }
    },
    methods:{

    },
    mounted () {

    }
  }
</script>
<style lang="less" scoped>
    .fold-left-enter-active {
        animation-name: fold-left-in;
        animation-duration: .3s;
    }

    .fold-left-leave-active {
        animation-name: fold-left-out;
        animation-duration: .3s;
    }

    .fold-right-enter-active {
        animation-name: fold-right-in;
        animation-duration: .3s;
    }

    .fold-right-leave-active {
        animation-name: fold-right-out;
        animation-duration: .3s;
    }


  
    @keyframes fold-left-in {
        0% {
            transform: translate3d(100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-left-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }

    @keyframes fold-right-in {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-right-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(100%, 0, 0);
        }
    }

    .box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        .app-transition-router {
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
</style>
