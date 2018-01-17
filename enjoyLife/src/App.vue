<template>
  <div id="app">
      <keep-alive exclude="login">
    	   <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
