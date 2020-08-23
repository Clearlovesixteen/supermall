<template>
  <div class="Tabbar-item" @click = "itemClick">
    <div v-if = "!isActive"><slot  name="item-icon"></slot></div>
    <div v-else><slot name="item-active"></slot></div>
    <div :style = "setColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default: "red",
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    setColor(){
      return this.isActive ? {color : this.activeColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link)
    }
  }
};
</script>

<style scoped>
.Tabbar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.Tabbar-item img {
  width: 24px;
  height: 24px;
  margin-bottom: 2px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>