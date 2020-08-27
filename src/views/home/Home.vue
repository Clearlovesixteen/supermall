<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        <p>购物街</p>
      </div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommends-view :recommends="recommends" />
    <feature />
    <tab-control :titles = "['流行' , '新款' , '精选']"  class="tabcontrol" @tabItemClick = "tabClick" />
    <goods-list :goods="showGoods" />
    <ul>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
      <li>xxxxx</li>
    </ul>
  </div>
</template>
<script>
// 子组件
import homeSwiper from "./childComps/HomeSwiper.vue";
import RecommendsView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
// 业务组件
import NavBar from "components/common/navBar/NavBar.vue";
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue'
// 网络组件
import { getHomeMultidata  , getHomeGoods} from "network/home.js";

export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    RecommendsView,
    Feature,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType:'pop',
      goods:{
        'pop':{page:0 , list:[]},
        'new':{page:0 , list:[]},
        'sell':{page:0 , list:[]}
      }
    };
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    // 网络请求的方法
    getHomeMultidata(){
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type , page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page+=1
      })
    },
      // 事件监听的方法
    tabClick(index){
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  }
};
</script>



<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: #ff8e96;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
}
.tabcontrol{
  position: sticky;
  top: 44px;
  z-index: 9999;
}
</style>