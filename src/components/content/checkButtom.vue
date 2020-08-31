<template>
  <div class="check-button" :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt />
  </div>
</template>

<script>
export default {
  name: "checkButton",
  props: {
    isCheck: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check-button {
  background-color: #ccc;
  border-radius: 50%;
}
.check {
  background-color: red;
}
</style>