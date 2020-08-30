<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      ref="contentTab1"
      :titles="['流行','新款','精选']"
      @tabItemClick="tabClick"
      class="tabControl1"
      v-show="isTabShow"
    />
    <scroll
      :probe-type="3"
      class="content"
      ref="scroll"
      :data="[showGoodsList]"
      @pullingUp="loadMore"
      @scroll="contentScroll"
      :pull-up-load="true"
    >
      <home-swiper ref="hSwiper" :banners="banners" @swiperLoaded="swiperLoaded" />
      <recommends-view :recommends="recommends" />
      <feature />
      <tab-control ref="contentTab" :titles="['流行','新款','精选']" @tabItemClick="tabClick" />
      <goods-list :goods="showGoodsList" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backTop"></back-top>
  </div>
</template>


<script>
// 子组件
import homeSwiper from "./childComps/HomeSwiper.vue";
import RecommendsView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";
// 业务组件
import NavBar from "components/common/navBar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/backTop.vue";
// 网络组件
import { getHomeMultidata, getHomeGoods } from "network/home.js";

// 滚动插件的引入
import scroll from "components/common/scroll/scroll.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    homeSwiper,
    RecommendsView,
    Feature,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      currentType: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      showTabControl: true,
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0,
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    //监听图片发射的事件
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  // 保存滚动的位置，并且切换页面的时候，还停留在上次的浏览位置
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.refresh;
  },
  methods: {
    // 网络请求的方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 加载更多
        this.$refs.scroll.finishedPullUp();
      });
    },
    // 事件监听的方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      this.$refs.contentTab1.currentIdx = index;
      this.$refs.contentTab.currentIdx = index;
    },
    contentScroll(position) {
      //返回顶部是否显示
      this.isShowBackTop = -position.y > 500;
      this.isTabShow = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperLoaded() {
      this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
      // console.log(this.tabOffsetTop)
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>



<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #ff8e96;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999; */
  color: #fff;
}
.tabControl1 {
  position: relative;
  z-index: 9;
}
.content {
  width: 100%;
  position: absolute;
  bottom: 49px;
  top: 44px;
  left: 0;
  right: 0;
}
</style>