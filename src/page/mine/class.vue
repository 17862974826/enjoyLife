<template>
  <div class="class-wrap">
    <h2 class="total">总运动： {{totalTime}}个月</h2>
    <h3 class="grade">{{letterLevel}}等级</h3>
    <div class="grade-data">
      <div class="grade-num">{{letterLevel}}{{level}}.0</div>
      <div class="progress-bar">
        <div class="progress-small" :style="{ width: percent + '0%' }"></div>
      </div>
    </div>
    <div class="grade-bottom">
      <p class="running">RO <span class="run-span">跑步</span></p>
      <p class="running">WO <span class="run-span">健走</span></p>
      <p class="running">CO <span class="run-span">骑行</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'class',
    data () {
      return {
        level: '1',
        percent: '0',
        totalTime: '0',
        letterLevel: 'A',
        classfiy: 0
       
      }
    },
    props: {
      grade: Number,
      playTime: Number
    },
    watch: {
      grade () {
        if (this.grade) {
          this.classfiy = this.grade
          this.classfiy = '' + this.classfiy
          this.percent = this.classfiy.substr(this.classfiy.length - 1)
          this.level = this.classfiy.substr(0, 1)
          this.letterLevel = (+this.level + 10).toString(36).toUpperCase()
        }
      },
      playTime () {
        if (this.playTime) {
          this.totalTime = this.playTime
        }
      }
    }
  }
</script>
<style scoped>
  .class-wrap{
    height: 3.9rem;
    color: #60adfe;
  }
  .total{
    line-height: 1rem;
    font-size: .3rem;
    margin-left: .28rem;
  }
  .grade{
    font-size: .28rem;
    margin-left: .28rem;
    line-height: .8rem;
  }
  .grade-data{
    display: flex;
    height: .5rem;
  }
  .grade-num{
    width: .88rem;
    height: .44rem;
    line-height: .44rem;
    font-size: .28rem;
    color: #fff;
    text-align: center;
    border-radius: .16rem;
    background: #60adfe;
    margin: 0 .28rem;
  }
  .progress-bar{
    flex: 1;
    height: .3rem;
    margin-top: .1rem;
    border-radius: .2rem;
    background: #dddddd;
  }
  .progress-small{
    width: 10%;
    height: .3rem;
    border-radius: .2rem;
    background: #60adfe;
  }
  .grade-bottom{
    display: flex;
    margin-top: .8rem;
    justify-content: space-around;
  }
  .running{
    font-size: .3rem;
  }
  .run-span{
    font-size: .26rem;
  }
</style>