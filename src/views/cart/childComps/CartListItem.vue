<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <CheckButton :is-check="product.flag" @click.native="checkis" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>


<script>
import CheckButton from "components/content/checkButtom.vue";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    checkis() {
      this.product.flag = !this.product.flag;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-name img {
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  text-align: left;
}
.item-msg {
  text-align: left;
  color: var(--color-high-text);
  font-size: 13px;
  margin-top: 7px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 110px;
  display: block;
  border-radius: 5px;
}
.item-info {
  width: 100%;
  text-align: center;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 7px;
}
.info-bottom {
  bottom: 10px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-bottom .item-price {
  color: orangered;
}
.item-count {
  margin-top: 10px;
  display: flex;
  text-align: center;
  height: 25px;
  width: auto;
}
.item-count div {
  height: 23px;
  line-height: 23px;
  outline: none;
  background-color: #fff;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.7);
  border-collapse: collapse;
  width: 30px;
}
.item-count div:last-child {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
}
.item-count div:first-child {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
.item-count div:nth-child(2) {
  border-right: none;
  border-left: none;
}
</style>