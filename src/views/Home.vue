<template>
  <div class="home">
    <slider/>
    <banner/>
    <featured/>
    <testimonials/>
    <scroll-top-arrow/>
    <recommend-product/>
    <brand/>
  </div>
</template>

<script>
import ScrollTopArrow from '../components/common/ScrollTopArrow.vue'
import Banner from '../components/home/Banner.vue'
import Brand from '../components/home/Brand.vue'
import Featured from '../components/home/Featured.vue'
import RecommendProduct from '../components/home/RecommendProduct.vue'
import Slider from '../components/home/Slider.vue'
import Testimonials from '../components/home/Testimonials.vue'


export default {
  name: 'Home',
  components: {
    Slider,
    Banner,
    Featured,
    Testimonials,
    ScrollTopArrow,
    RecommendProduct,
    Brand,
  },
  // created() {
  //   const customFieldProduct = {
  //           images: ['bup-be-luna-va-ghe-an-1', 'bup-be-luna-va-ghe-an-2', 'bup-be-luna-va-ghe-an-3'],
  //           saleOff: 5,
  //           brand: 'Nhật Bản',
  //           merital: 'Nhựa cao cấp',
  //           age: '3 tuổi trở lên'
  //       }
  //       console.log(customFieldProduct)
  //       const dataStringfy = JSON.stringify(customFieldProduct)
  //       console.log(dataStringfy)
  // }
}
</script>
