<template>
  <div>
    <div class="row mb-5">
      <div class="col-md-4 pb-3" v-for="(item, index) in gridProducts" :key="index">
        <featured-product-item
            :slug="item.slug"
            :image="item.imageUrl"
            :name="item.title"
            :amount="item.amount"
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
</template>

<script>
import FeaturedProductItem from '../home/FeaturedProductItem.vue';
import ProductService from "@/services/product-service.js";
export default {
  components: { FeaturedProductItem },
  name: "ListProduct",
  data() {
    return {
      gridProducts: [],
      currentPage: 1,
      total: 0,
      limit: 9,
    }
  },
  props: {
    
  },
  computed: {
    customFields() {
      if (this.gridProducts) {
        return JSON.parse(this.gridProducts.custom_fields);
      }
      return null;
    },
  },
  methods: {
    async getProduct() {
      const dataProduct = await ProductService.productsRecommend(this.limit, this.currentPage);
      if (dataProduct.code === 200) {
        this.gridProducts = dataProduct.data;
        this.setDataProduct(dataProduct.meta)
        this.$store.dispatch('actionSetDataProduct', JSON.parse(localStorage.getItem('dataProduct')))
        this.currentPage = dataProduct.meta.current_page;
        this.total = dataProduct.meta.total;
      }
    },
    setDataProduct(dataProduct) {
      localStorage.setItem('dataProduct', JSON.stringify(dataProduct))
    },
    scrollToTop() {
      window.scrollTo({
        top: 220,
        behavior: "smooth",
      });
    },
  },
  async created() {
    await this.getProduct();
  },
  watch: {
    async currentPage() {
      await this.getProduct();
    }
  }
};
</script>

<style scoped src="@/assets/css/components/product/GridProduct.css"></style>
