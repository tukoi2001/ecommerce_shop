<template>
  <div class="wrapper">
    <div class="header__me">
      <div class="container">
        <router-link to="/" class="me__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="me__title">{{ product.title }}</span>
      </div>
    </div>

    <div class="container">
      <div class="row product">
        <div class="col-md-5">
          <product-detail-image
            :customFields="customFields"
            :imageUrl="product.imageUrl"
          />
        </div>

        <div class="col-md-7">
          <product-detail-content
            :customFields="customFields"
            :title="product.title"
            :amount="product.amount"
          />
        </div>
      </div>

      <!-- Banner -->
      <product-detail-banner/>
      <!-- Box -->
      <product-detail-box
        :customFields="customFields"
        :des="product.description"
      />

    </div>
    <featured/>
  </div>
</template>

<script>
import ProductService from "@/services/product-service.js";
import ProductDetailImage from '../components/product-detail/ProductDetailImage.vue';
import ProductDetailContent from '../components/product-detail/ProductDetailContent.vue';
import ProductDetailBanner from '../components/product-detail/ProductDetailBanner.vue';
import ProductDetailBox from '../components/product-detail/ProductDetailBox.vue';
import Featured from '../components/home/Featured.vue';
export default {
  components: { ProductDetailImage, ProductDetailContent, ProductDetailBanner, ProductDetailBox, Featured },
  name: "ProductDetail",
  data() {
    return {
      product: null,
    };
  },
  async created() {
    const slug = this.$route.params.slug;
    const res = await ProductService.productDetail(slug);
    if (res.code === 200) {
      this.product = res.data;
    }
  },
  computed: {
    customFields() {
      if (this.product) {
        return JSON.parse(this.product.custom_fields);
      }
      return null;
    },
  },  
};
</script>

<style scoped src="@/assets/css/productdetail.css"></style>
