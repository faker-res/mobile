<template>
  <div class="share_box">
    <title-header :title="'分享朋友'"></title-header>
    <div class="content">
      <div class="qrCode">
        <img src="../../assets/img/share/erweima.png" alt>
      </div>
      <p>扫描二维码或者在App Store搜索"六合直通车"下载安装,新用户注册就有积分相送</p>
      <div class="shareList">
        <ul>
          <li v-for="(shareItem,shareIndex) in shareList" :key="shareIndex">
            <img :src="shareItem.src" alt>
            <p>{{shareItem.name}}</p>
          </li>
        </ul>
      </div>
    </div>
    <NavButton></NavButton>
  </div>
</template>
<script>
import TitleHeader from "../../components/TitleHeader.vue";
import NavButton from "../../components/NavButton.vue";
export default {
  name: "share",
  data() {
    return {
      shareList: [
        { name: "微信", src: require("../../assets/img/share/btn_weixin.png"), path: "" },
        { name: "QQ", src: require("../../assets/img/share/btn_kongjian.png"), path: "" },
        { name: "空间", src:require("../../assets/img/share/btn_QQ.png"), path: "" },
        { name: "朋友圈", src:require("../../assets/img/share/btn_pengyouquan.png"), path: "" }
      ]
    };
  },
  components: {
    TitleHeader,
    NavButton
  }
};
</script>
<style lang="less" scoped>
.share_box {
  width: 100%;
  height: 100%;
  .content {
    padding: 0 2.5rem;
    height: calc(100% - 4rem - 5rem);
    .qrCode {
      text-align: center;
      padding-top: 8.3rem;
    }
    p {
      font-family: "PingFang SC";
      font-size: 1.4rem;
      color: #333333;
      text-align: center;
      margin: 0;
      margin-top: 2.7rem;
    }
    .shareList {
      width: 100%;
      margin-top:4.7rem;
      ul {
        overflow: hidden;
        padding: 0;
        margin: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        li {
          width:calc(100%/4);
          text-align: center;
          img{
            width:6rem;
            height: 6rem;
          }
          p{
            margin:0;
            margin-top:1rem;
          }
        }
      }
    }
  }
}
</style>

