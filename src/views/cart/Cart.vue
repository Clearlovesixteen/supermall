<template>
  <div class="cart">
    <Navbar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </Navbar>
    <cart-list />

    <cart-buttom-bar />
  </div>
</template>
<script>
import Navbar from 'components/common/navBar/NavBar.vue'

import CartList from './childComps/CartList'
import CartButtomBar from './childComps/CartButtomBar'

import { mapGetters } from 'vuex'

export default {
  name: 'Cart',
  components:{
    Navbar,
    CartList,
    CartButtomBar
  },
  computed:{
    // 两种语法
    ...mapGetters({
      length: 'cartLength'
    })
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: #ec93a2;
    color: #fff;
    font-weight: 700;
  }
</style>