<template>
  <div id="home">
    <nav-bar class="home-nav"> 
      <div slot="center">
        <p>购物街</p>
      </div>
    </nav-bar>
    <home-swiper :banners = "banners" />
    <recommends-view :recommends = "recommends" /> 
  </div>
</template>
<script>
import NavBar from 'components/common/navBar/NavBar.vue';
import {getHomeMultidata} from 'network/home.js';
import homeSwiper from './childComps/HomeSwiper.vue';
import RecommendsView from './childComps/RecommendView';


export default {
  name: 'Home',
  components: {
    NavBar,
    homeSwiper,
    RecommendsView
  },
  data(){
    return {
      banners: [],
      recommends: []
    }
  },
  created() { 
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      console.log(this.recommends)
    })
  },
  
}

</script>



<style scoped>
  .home-nav{
    background-color: #ff8e96;
  }
</style>