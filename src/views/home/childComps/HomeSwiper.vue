<template>
  <swiper>
      <swiper-item v-for=" (item , idx) of banners" :key = idx>
        <a :href="item.link">
          <img :src="item.image"  @load="imageLoad">
        </a>
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper , SwiperItem} from 'components/common/swiper/index.js'
export default {
  name: 'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return {
      isLoad:false
    }
  },
  props:{
    banners : {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods:{
    imageLoad(){
      if(!this.Load){
        this.$emit('swiperLoaded')
        this.Load = true
      }
    }
  }
}
</script>

<style scoped>

</style>