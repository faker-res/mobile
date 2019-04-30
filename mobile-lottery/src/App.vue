<template>
    <div id="app">
       <transition  :name="$store.state.loginAnimation">
            <router-view class="app-transition-router"></router-view>
       </transition>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        oHtml: null,
        width: null
      }
    },
    created () {
      this.oHtml = document.getElementsByTagName('html')[0]
      this.width = this.oHtml.clientWidth
      this.oHtml.style.fontSize = 10 * (this.width / 375) + 'px'
    },
  }
</script>
<style lang="less">
    * {
        list-style: none;
        text-decoration: none;
    }

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 10px;
    }

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
    
          
    .fold-top-enter-active {
        animation-name: fold-top-in;
        animation-duration: .3s;
    }

    .fold-top-leave-active {
        animation-name: fold-top-out;
        animation-duration: .3s;
    }

             
    .fold-bottom-enter-active {
        animation-name: fold-bottom-in;
        animation-duration: .3s;
    }

    .fold-bottom-leave-active {
        animation-name: fold-bottom-out;
        animation-duration: .3s;
    }


     @keyframes fold-bottom-in {
        0% {
            transform: translate3d(0, 100%, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-bottom-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, -100%, 0);
        }
    }

      
    @keyframes fold-top-in {
        0% {
            transform: translate3d(0, -100%, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fold-top-out {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, 100%, 0);
        }
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
    .app-transition-router {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
        position: fixed;
        transform: translate3d(0, 0, 0);
        z-index: 1;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
    }
</style>
