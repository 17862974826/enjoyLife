<template>
  <div id="app">
  	<transition 
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
      <keep-alive>
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
