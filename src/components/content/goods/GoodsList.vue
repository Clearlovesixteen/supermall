<template>
  <div class="goods">
    <goods-item v-for="(item , index) of goods" :key="index" :goods-item="item" class="goodsItem" />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsItem,
  },
};
</script>

<style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
.goodsItem {
  width: 48%;
}
</style>