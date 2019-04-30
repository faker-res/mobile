<template>
  <div class="fans_box">
    <Title-Header :title="'我的粉丝'" :type="'child'"></Title-Header>
    <div class="fansList">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
<script>
import TitleHeader from "../../../components/TitleHeader.vue";
export default {
  data() {
    return {
      fansList: [
        { name: "岁月如歌", src: require() },
        { name: "木头", src: require() },
        { name: "何木子", src: require() },
        { name: "毒日头", src: require() }
      ]
    };
  },
  components: {
    TitleHeader
  }
};
</script>
<style>
</style>
