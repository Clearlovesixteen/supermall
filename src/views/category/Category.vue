<template>
  <div class="category">
    <NavBar>
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <tab-menu />
    </div>
  </div>
</template>
<script>
import NavBar from "components/common/navBar/NavBar";

import TabMenu from './childCopms/TabMenu';
export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.nav-bar {
  background-color: #e197a3;
  font-weight: 700;
  color: #fff;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;

  display: flex;
}
</style>