<template>
  <div class="title">
    <div v-if="type==='child'" class="left" @click="$router.back()">
      <van-icon name="arrow-left" color="#fff" size="2.5rem"/>
    </div>
    <span>{{title}}</span>
    <!--        <div class="right"><van-icon name="arrow-left" color="#fff" size="2.5rem"/></div>-->
    <div class="right">
      <p @click="showProup" v-if="JSON.stringify(rightData)!='{}' &&rightData">
        <span>
          <span v-if="rightData.key=='year'">选择年份</span>
          <span v-else>期数:{{selected}}</span>
        </span>
        <select v-model="selected">
          <option
            :value="rightItem | filterData"
            v-for="(rightItem,rightIndex) in rightData.value"
            :key="rightIndex"
          >{{rightItem}}</option>
        </select>
      </p>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import data from "../views/Home/Statistics/components/data.js";
export default {
  mixins: [data],
  props: {
    type: {
      type: String,
      default: "parent"
    },
    title: {
      type: String,
      default: ""
    },
    rightData: {
      type: Object
    },
    headerKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showProup() {
      this.show = true;
      this.$emit("change_proup", this.show);
    }
  },
  filters: {
    filterData: function(data) {
      if (!data) return;
      return parseInt(data.replace(/[^0-9]/gi, ""));
    }
  },
  watch: {
    selected: function(newVal, oldVal) {
      this.$store.commit("sendSlected", {
        key: this.headerKey,
        value: this.selected.toString()
      });
    },
    headerKey: function(newVal, oldVal) {
      this.selected = "100";
      this.$store.commit("sendSlected", {
        key: this.headerKey,
        value: this.selected.toString()
      });
    }
  },
  store
};
</script>
<style lang="less" scoped>
.title {
  width: 100%;
  height: 4rem;
  background: #ff3d2e;
  color: #fff;
  text-align: center;
  line-height: 4rem;
  font-size: 1.7rem;
  letter-spacing: 3px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 5;
  .left {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    padding-top: 0.8rem;
    line-height: 1;
  }
  .right {
    box-sizing: border-box;
    position: absolute;
    font-size: 1.4rem;
    right: 0;
    top: 0;
    width: 20%;
    line-height: 4rem;
    height: 4rem;
    p {
      position: relative;
      height: 100%;
      margin: 0;
      select {
        text-align: center;
        text-align-last: center;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        padding: 0 2%;
        height: 100%;
        opacity: 0;
        option{
          text-align: center;
        }
      }
    }
    .proupList {
      li {
        text-align: center;
      }
    }
  }
}
</style>
