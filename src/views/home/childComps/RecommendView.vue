<template>
  <div class="recommend-wrap">
    <div v-for="(item , index) of recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="图片" class="recommend-img" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style  scoped>
.recommend-wrap {
  display: flex;
  background-color: #fff;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #ededed;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>