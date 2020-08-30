<template>
  <div v-if="shop" class="ShopAll">
    <div class="logo">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-midd">
      <div class="shopleft">
        <div>
          <p class="top">{{shop.sells}}</p>
          <p class="bottom">总销量</p>
        </div>
        <div>
          <p class="top">{{shop.goodsCount}}</p>
          <p class="bottom">全部宝贝</p>
        </div>
      </div>
      <div class="shopright">
        <div v-for="item in shop.score" :key="item">
          <span>{{item.name}}</span>
          <span>{{item.score}}</span>
          <span></span>
          <span class="gao" :class="{di:!item.isBetter}">{{item.isBetter ? '高':'低'}}</span>
        </div>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.ShopAll {
  border-top: 6px solid #eeeeee;
  width: 100%;
}
.logo {
  height: 120px;
  line-height: 120px;
}
.logo img {
  width: 80px;
  border-radius: 50%;
  vertical-align: middle;
  margin: 0px 20px;
  box-shadow: 0px 0px 5px 2px rgba(175, 171, 171, 0.62);
}
.shop-midd {
  width: 100%;
  height: 90px;
}
.shopleft div {
  width: 28%;
  float: left;
  text-align: center;
  padding-top: 30px;
}
.top {
  font-size: 18px;
  font-weight: 700;
}
.bottom {
  font-size: 12px;
}
.shopright {
  float: right;
  width: 44%;
}
.shopright div {
  margin-top: 5px;
}
.shopright span {
  margin-right: 5px;
}
.gao {
  display: inline-block; 
  color: white;
  background-color: var(--color-high-text);
  margin-right: 5px;
}
.di {
  background-color: yellowgreen;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>