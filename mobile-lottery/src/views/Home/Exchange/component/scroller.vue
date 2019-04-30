<template>
  <div ref="wrapper" class="list-wrapper">
      <div>
          <div class="scroll-content">
      <slot></slot>
      <div>
        <PullingWord v-show="!inPullUp&&dataList.length>0" :loadingWord="beforePullUpWord"></PullingWord>
        <Loading v-show="inPullUp" :loadingWord="PullingUpWord"></Loading>
      </div>
    </div>

    <transition name="pullDown">
      <Loading class="pullDown" v-show="inPullDown" :loadingWord="PullingDownWord"></Loading>
    </transition>
      </div>
  </div>
</template>

<script >
import BScroll from "better-scroll";
import Loading from "./loading.vue";
import PullingWord from "./pulling-word.vue";

const PullingUpWord = "正在拼命加载中...";
const beforePullUpWord = "上拉加载更多";
const finishPullUpWord = "加载完成";

const PullingDownWord = "加载中...";

export default {
  props: {
    dataList: {
      type: Array,
      default: []
    },
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    pullDownRefresh: {
      type: null,
      default: false
    },
    pullUpLoad: {
      type: null,
      default: false
    }
  },
  data() {
    return {
      betterScroll: null,
      inPullUp: false,
      inPullDown: false,
      beforePullUpWord,
      PullingUpWord,
      PullingDownWord,
      continuePullUp: true
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.initScroll();
      this.betterScroll.on("scroll", () => {
        console.log('上拉加载')
        if (this.continuePullUp) {
          this.beforePullUp();
          this.$emit("onPullUp", "当前状态：上拉加载");
        }
      });

      this.betterScroll.on("pullingDown", () => {
        console.log('下拉刷新')
        this.beforePullDown();
        this.$emit("onPullDown", "当前状态：下拉加载更多");
      });
    });
  },
  methods: {
    initScroll() {
      console.log("234234");
      if (!this.$refs.wrapper) {
        return;
      }
      this.betterScroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollY: true,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      });
      this.betterScroll.refresh()
    },
    beforePullUp() {
      this.PullingUpWord = PullingUpWord;
      this.inPullUp = true;
    },
    beforePullDown() {
      this.disable();
      this.inPullDown = true;
    },
    finish(type) {
      this["finish" + type]();
      this.enable();
      this["in" + type] = false;
    },
    disable() {
      this.betterScroll && this.betterScroll.disable();
    },
    enable() {
      this.betterScroll && this.betterScroll.enable();
    },
    refresh() {
      this.betterScroll && this.betterScroll.refresh();
    },
    finishPullDown() {
      this.betterScroll && this.betterScroll.finishPullDown();
    },
    finishPullUp() {
      this.betterScroll && this.betterScroll.finishPullUp();
    }
  },

  watch: {
    dataList() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  components: {
    Loading,
    PullingWord
  }
};
</script>

<style lang="less" scoped>
.list-wrapper {
  overflow: hidden;
  background: #fff;
}

.list-content {
  z-index: 10;
  background: #fff;
}
.content {
  min-height: calc(100% - 4rem);
}

.list-item {
  height: 60px;
  line-height: 60px;
  font-size: 18px;
  padding-left: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.pulldown-wrapper {
  position: absolute;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all;
}

.pullup-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
}

.pullDown {
  position: absolute;
  top: 0;
  left: 0;
}

.pullDown-enter-active {
  transition: all 0.2s;
}

.pullDown-enter,
.pullDown-leave-active {
  transform: translateY(-100%);
  transition: all 0.2s;
}
</style>