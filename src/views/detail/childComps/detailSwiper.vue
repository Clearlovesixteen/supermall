<template>
  <swiper class="swiper">
		<swiper-item v-for="(item,index) in topImages" :key="index">
			<a :href="item">
				<img :src="item">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";

export default {
  name: "detailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>