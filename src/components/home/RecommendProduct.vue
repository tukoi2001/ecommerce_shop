<template>
  <div class="wrapper">
    <div class="container">
      <div class="text-start featured__box">
        <h2 class="featured__title">Sản phẩm đề xuất</h2>
      </div>
      <div class="row justify-content-center pb-5" v-if="featureProducts">
        <div
          class="col-md-3 py-3"
          v-for="(item, index) in featureProducts"
          :key="index"
        >
          <featured-product-item
            :slug="item.slug"
            :image="item.imageUrl"
            :name="item.title"
            :amount="item.amount"
            :description="item.description"
          />
        </div>
      </div>
      <div @click="scrollToTop">
        <b-pagination
        v-model="currentPage"
        :total-rows="total"
        :per-page="limit"
        first-text="First"
        prev-text="Prev"
        next-text="Next"
        last-text="Last"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/services/product-service.js";
import FeaturedProductItem from "./FeaturedProductItem.vue";
export default {
  components: { FeaturedProductItem },  
  name: "RecommendProduct",
  data() {
    return {
      featureProducts: [],
      currentPage: 1,
      total: 0,
      limit: 12,
    };
  },
  props: {},
  async created() {
      this.getProduct()
  },
  computed: {
    customFields() {
      if (this.featureProducts) {
        return JSON.parse(this.featureProducts.custom_fields);
      }
      return null;
    },
  },
  methods: {
    async getProduct() {
      const dataProduct = await ProductService.productsRecommend( this.limit, this.currentPage);
      if (dataProduct.code === 200) {
        this.featureProducts = dataProduct.data;
        this.currentPage = dataProduct.meta.current_page;
        this.total = dataProduct.meta.total;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 2100,
        behavior: "smooth",
      });
    },
  },
  watch: {
    async currentPage() {
    await this.getProduct();
    }
  }
};
</script>

<style scoped src="@/assets/css/components/home/RecommendProduct.css">
</style>