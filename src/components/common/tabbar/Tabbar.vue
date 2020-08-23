<template>
  <div id="bar">
    <Tabbaritem link = "/home" >
      <img slot = "item-icon" src="~assets/img/homefill1.png" alt="首页">
      <img slot = "item-active" src="~assets/img/homefill.png" alt="">
      <p slot = "item-text">首页</p>
    </Tabbaritem>
    <Tabbaritem link = "/category" >
      <img slot = "item-icon" src="~assets/img/chuanghu1.png" alt="分类">
      <img slot = "item-active" src="~assets/img/chuanghu.png" alt="">
      <p slot = "item-text">分类</p>
    </Tabbaritem>
    <Tabbaritem link = "/cart" >
      <img slot = "item-icon" src="~assets/img/gouwuchekong1.png" alt="购物车">
      <img slot = "item-active" src="~assets/img/gouwuchekong.png" alt="">
      <p slot = "item-text">购物车</p>
    </Tabbaritem>
    <Tabbaritem link = "/profile" >
      <img slot = "item-icon" src="~assets/img/yuan1.png" alt="我的">
      <img slot = "item-active" src="~assets/img/yuan.png" alt="">
      <p slot = "item-text">我的</p>
    </Tabbaritem>
    
  </div>
</template>

<script>
import Tabbaritem from "./Tabbaritem"

export default {
  name: "Tabbar",
  components:{
    Tabbaritem
  }
};
</script>

<style scoped>

#bar {
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  display: flex;
  width: 100%;
}
</style>
