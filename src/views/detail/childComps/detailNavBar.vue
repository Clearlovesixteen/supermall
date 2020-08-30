<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="后退">
      </div>
      <div slot = 'center' class="title">
        <div v-for="(item ,index) of titles" :key="index" class="title-item" :class="{active: current === index}" 
        @click="move(index)"> 
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar.vue'

export default {
  name: 'detailNavBar',
  components:{
    NavBar,
  },
  data(){
    return{
      titles:['商品', '参数' , '评论' , '推荐'],
      current:0
    }
  },
  methods:{
    move(index){
      this.current = index;
      this.$emit('titleClick' , index)
    },
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: red;
  }
  .back img{
    margin-top: 10px;
  }
</style>