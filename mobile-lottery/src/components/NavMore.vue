<template>
  <div class="box">
    <ul class="nav-c">
      <li v-for="(item,index) in arr" :key="index" @click="go(item,index)">
        <img :src="item.src" alt v-show="change!==index">
        <img :src="item.checkSrc" alt v-show="change===index">
        <span :class="{'red':change===index}">{{item.title}}</span>
      </li>
    </ul>
    <ul class="nav-b" :style="{top:-topNum+'rem'}" ref="nav" v-show="ifShow">
      <li v-for="(item,index) in child" :key="index" @click="childGo(item)">
        <img :src="item.src" alt>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavMore",
  props: {
    arr: {
      type: Array
    },
    child: {
      type: Array
    }
  },
  data() {
    return {
      change: 0,
      topNum: null,
      ifShow: false
    };
  },
  methods: {
    go(item, index) {
      this.change = index;
      if (item.title === "更多") {
        this.ifShow = true;
        this.$nextTick(() => {
          this.topNum = this.$refs.nav.offsetHeight / 10 + 0.5;
        });
        return false;
        this.$emit("success", item.title);
      } else {
        this.change = index;
        this.ifShow = false;
        if ((item.name, item.key)) {
          this.$emit("success", item.key, item.name);
        } else {
          this.$emit("success", item.title);
        }
      }
    },
    childGo(item) {
      this.ifShow = false;
      if ((item.name, item.key)) {
        this.$emit("success", item.key, item.name);
      } else {
        this.$emit("success", item.title);
      }
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.box {
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
        margin-top: 0.6rem;
        width: 1.95rem;
        height: 2.15rem;
      }

      span {
        display: block;
        font-size: 1.2rem;
        margin-top: 0.4rem;
        text-align: center;
      }

      .red {
        color: #ff483d;
      }
    }
  }

  .nav-b {
    width: 96%;
    border: 1px solid #eaeaea;
    display: flex;
    flex-wrap: wrap;
    background: #fafafa;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    li {
      width: calc(100% / 4);
      height: 100%;
      margin-bottom: 1rem;
      img {
        display: block;
        margin: auto;
        margin-top: 0.6rem;
        width: 1.95rem;
        height: 2.15rem;
      }

      span {
        display: block;
        font-size: 1.2rem;
        margin-top: 0.4rem;
        text-align: center;
      }

      .red {
        color: #ff483d;
      }
    }
  }
}
</style>
