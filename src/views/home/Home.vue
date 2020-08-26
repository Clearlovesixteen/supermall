<template>
  <div id="home">
    <nav-bar class="home-nav"> 
      <div slot="center">
        <p>购物街</p>
      </div>
    </nav-bar>
    <home-swiper :banners = banners ></home-swiper>
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar.vue';
import {getHomeMultidata} from 'network/home.js';
import homeSwiper from './childComps/HomeSwiper.vue'


export default {
  name: 'Home',
  components: {
    NavBar,
    homeSwiper
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() { 
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
  
}

</script>



<style scoped>
  .home-nav{
    background-color: #ff8e96;
  }
</style>