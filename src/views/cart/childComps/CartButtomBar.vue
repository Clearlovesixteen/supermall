<template>
  <div class="bottom-bar">
    <div class="check" @click="checkClick">
      <checkbutton class="buttom" :is-check="isSelectAll" />
      <span>全选</span>
    </div>
    <span class="left">合计：{{totalPrice}}￥</span>
    <div class="right">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import checkbutton from "components/content/checkButtom";

export default {
  name: "CartButtomBar",
  components: {
    checkbutton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => item.flag)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList
        .filter((item) => item.flag)
        .reduce((preValue, item) => preValue + item.count, 0);
    },
    isSelectAll() {
      if (!this.$store.state.cartList.length) {
        return false;
      }
      return !this.$store.state.cartList.filter((item) => !item.flag).length;
    },
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach((item) => (item.flag = false));
      } else {
        this.$store.state.cartList.forEach((item) => (item.flag = true));
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 45px;
  position: absolute;
  bottom: 50px;
  background-color: #726c6c;
  color: white;
  font-weight: 700;
}
.check {
  display: inline-block;
}
.buttom {
  vertical-align: top;
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.right {
  width: 100px;
  text-align: center;
  background-color: tomato;
  line-height: 45px;
  float: right;
}
.left {
  line-height: 45px;
  margin-left: 20px;
}
</style>