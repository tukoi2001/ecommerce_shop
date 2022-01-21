<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 brand">
          <carousel :autoplay="true" :items="5" :loop="true" :nav="false" :dots="false"> 
            <img :src="require('@/assets/images/brand/1.png')" />
            <img :src="require('@/assets/images/brand/2.png')" />
            <img :src="require('@/assets/images/brand/3.png')" />
            <img :src="require('@/assets/images/brand/4.png')" />
            <img :src="require('@/assets/images/brand/5.png')" />
            <img :src="require('@/assets/images/brand/6.png')" />
          </carousel> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "Brand",
  components: {
    carousel,
  },
};
</script>

<style scoped src="@/assets/css/components/home/Brand.css"></style>
