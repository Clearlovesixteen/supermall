<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref= 'tabnav'/>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="params" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" />
    </scroll>
      <detail-bottom-bar @addCart = "addToCart"/>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/detailNavBar.vue";
import DetailSwiper from "./childComps/detailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar"

import scroll from "components/common/scroll/scroll";
import GoodsList from "components/content/goods/GoodsList";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";
import { debounce } from "../../common/untils";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      topindex:0
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    scroll,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      // 获取轮播图图片
      this.topImages = res.result.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 保存商品详情数据
      this.detailInfo = data.detailInfo;
      // 保存商品参数数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];

      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    }, 100);
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.getThemeTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    contentScroll(position) {
      // 获取Y值
      const positionY = -position.y;
      // 和主题的值对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.topindex !== i &&
          ((i < length - 1 &&
            positionY > this.themeTopYs[i] &&
            positionY < this.themeTopYs[i + 1]) ||
            (i == length - 1 && positionY > this.themeTopYs[i]))
        ) {
          this.topindex = i;
          this.$refs.tabnav.current = this.topindex;
        }
      }
    },
    addToCart(){
      // 获取商品信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      //添加到购物车 
      this.$store.dispatch('addCart' , product)
    }
  },
};
</script>

<style  scoped>
#detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 93px);
}
</style>