<template>
  <div id="app">
  	<transition 
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <keep-alive exclude="publish dynamic mine">
    	   <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
