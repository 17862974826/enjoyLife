<template>
  <div class="content">
   <h2 class="title">{{title}}</h2>
   <div class="show_self">
      <div class="img_wrapper" v-for="item in showSelf">
        <div class="wrapper" :style="item.imgUrl"></div>
        <div class="des_wrapper">
          <p class="des_title">{{item.des}}</p>
          <p class="des_num">{{item.num}}</p>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'showSelf',
  props: ['showSelf', 'title']
}
</script>

<style scoped>
  .content {
    padding: 0.3rem 0.2rem 0;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 0.1rem;
  }
  .title {
    font-size: 0.28rem;
    color: #777;
  }
  .show_self {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.3rem;
  }
  .img_wrapper {
    width: 50%;
    display: flex;
  }
  .des_wrapper {
    flex: 1;
    overflow: hidden;
    margin-left: 0.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .des_title {
    margin: 0.3rem 0 0.2rem;
    font-size: 0.23rem;
    color: #838383;
  }
  .des_num {
    font-size: 0.2rem;
    color: #606060
  }
  .wrapper {
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: 0.2rem;
    box-sizing: border-box;
    background-color: #eeedef;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat; 
  }
</style>

