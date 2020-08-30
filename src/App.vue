<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view />
    </keep-alive>
    
    <tabBar />
  </div>
</template>


<script>
import tabBar from "./components/common/tabbar/Tabbar"


export default {
  name: 'app',
  components: {
    tabBar,
  },
}
</script>

<style>
  @import './assets/css/base.css';

</style>
