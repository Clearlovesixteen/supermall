<template>
  <div id="app">
    <router-view></router-view>
    <tabBar></tabBar>
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
