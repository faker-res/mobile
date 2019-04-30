<template>
  <div class="water_box">
    <Title-Header :title="'心水'" :type="'child'"></Title-Header>
    <div class="vp_header">
      <div class="header_left">
        <img src="../../../assets/img/personal/personal1.jpg" alt>
      </div>
      <div class="header_righ">
        <p>mu木</p>
        <p>总积分:24</p>
      </div>
    </div>
    <div class="scroll" ref="scroll">
      <div class="vp_content">
        <div class="content_top">
            <div>本期推荐</div>
            <div>历史推荐</div>
        </div>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../../components/TitleHeader.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      betterScroll: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.betterScroll = new BScroll(this.$refs.scroll, {
        scrollY: true,
        click: true
      });
      this.betterScroll.refresh();
    });
  },
  components: {
    TitleHeader
  }
};
</script>
<style lang="less" scoped>
.water_box {
  width: 100%;
  height: 100%;
  .vp_header {
    width: 100%;
    height: 5rem;
    background-color: white;
    padding: 1rem;
    overflow: hidden;
    .header_left {
      float: left;
      img {
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
      }
    }
    .header_righ {
      margin-left: 1rem;
      float: left;
      font-size: 1.5rem;
      height: 2.5rem;
      line-height: 2.5rem;
      p {
        margin: 0;
      }
    }
  }
  .scroll {
    background: #efeff4;
    height: calc(100% - 4rem - 5rem);
  }
}
</style>
