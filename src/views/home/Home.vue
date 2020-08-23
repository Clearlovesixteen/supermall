<template>
  <div id="home">
    <nav-bar class="home-nav"> 
      <div slot="center"><p>购物街</p></div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar.vue';
import {getHomeMultidata} from 'network/home.js';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  created() { 
    getHomeMultidata().then(res => {
      this.banners = res.data.banner
      this.recommends = res.data.recommend
    })
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  }
}

</script>



<style scoped>
  .home-nav{
    background-color: #ff8e96;
  }
</style>