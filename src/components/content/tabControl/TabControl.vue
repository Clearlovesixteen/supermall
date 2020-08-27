<template>
  <div id="tabControl">
    <div
      v-for="(item , index) in titles"
      :class="{active: index === currentIdx}"
      :key="index"
      class="tab-control-item"
      @click="tabItemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIdx: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    tabItemClick(index) {
      this.currentIdx = index;
      this.$emit("tabItemClick", index);
    },
  },
};
</script>

<style  scoped>
#tabControl {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
}
.active {
  color: red;
}
.active > span {
  border-bottom: 2px solid red;
  padding: 5px;
}
</style>