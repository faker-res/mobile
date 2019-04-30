<template>
    <div class="box">
        <div class="notice">
            <span style="color: #ff452d;">提示：</span>每期只能进行一次“摇一摇”
        </div>
        <div class="content"><img src="../../assets/img/games/shouji_yyy@2x.png" alt=""></div>
        <div class="title">摇一摇，幸运号码等你来</div>
    </div>
</template>

<script>
  export default {
    name: 'shake',
    data () {
      return {
        shake: 4000,
        last_update: 0,
        x: 0,
        y: 0,
        z: 0,
        last_x: 0,
        last_y: 0,
        last_z: 0,
      }
    },
    methods: {
      motionHandler (eventData) {
        let acceleration = eventData.accelerationIncludingGravity
        // let arr = '2010-03-15 10:30:00'.split(/[- :]/)
        // let curTime =  new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]).getTime()
        let curTime = new Date().getTime();
        if ((curTime - this.last_update) > 10) {
          let diffTime = curTime - this.last_update
          this.last_update = curTime
          this.x = acceleration.x
          this.y = acceleration.y
          this.z = acceleration.z
          let speed = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / diffTime * 10000
          if (speed > this.shake) {
            alert('你中奖啦！')  // Do something
          }
          this.last_x = this.x
          this.last_y = this.y
          this.last_z = this.z
        }
      },
      shakeFn () {
        if (window.DeviceMotionEvent) {
          window.addEventListener('devicemotion', this.motionHandler, false)
        } else{
          alert("您的浏览器不支持DeviceOrientation");
        }
      }
    },
    mounted () {
      this.shakeFn()
    }
  }
</script>

<style lang="less" scoped>
    .box {
        width: 100%;
        height: 100%;

        .notice {
            width: 35.5rem;
            background: url("../../assets/img/games/juanlian_s@2x.png") 0 0 no-repeat;
            background-size: 100%;
            height: 4.35rem;
            margin: auto;
            margin-top: 1rem;
            font-size: 1.4rem;
            line-height: 4.35rem;
            color: #7b7b7b;
            text-align: center;
        }

        .content {
            img {
                display: block;
                width: 80%;
                margin: auto;
            }
        }

        .title {
            width: 30.5rem;
            height: 5.25rem;
            background: url("../../assets/img/games/zhuangshi@2x.png") 0 0 no-repeat;
            background-size: 100% 100%;
            margin: auto;
            text-align: center;
            line-height: 5.25rem;
            margin-top: 10rem;
            color: #fff;
        }
    }
</style>
