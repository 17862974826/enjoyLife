<template>
  <div class="content">
   <h2 class="title">训练成果</h2>
   <div class="show_self">
     <div class="wrapper" v-for="item in showSelf" 
          :key="item.id"
          :style="item.imgUrl">
      </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'showSelf',
  props: ['showSelf']
}
</script>

<style scoped>
  .content {
    padding: 0.4rem 0.3rem;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    margin-top: 0.2rem;
  }
  .title {
    font-size: 0.26rem;
    color: #584f60;
  }
  .show_self {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 0.4rem;
  }
  .wrapper {
    width: 49%;
    margin-bottom: 2%;
    box-sizing: border-box;
    padding-bottom: 49%;
    background-color: #eeedef;
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat; 
  }
</style>

