<template>
  <div>
    <div class="row mb-5">
      <div
        class="col-md-12 pb-5"
        v-for="(item, index) in listProducts"
        :key="index"
      >
        <list-product-item
          :slug="item.slug"
          :image="item.imageUrl"
          :name="item.title"
          :amount="item.amount"
          :description="item.description"
        />
      </div>
    </div>
    <div class="" @click="scrollToTop">
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
import ProductService from "@/services/product-service.js";
import ListProductItem from "./ListProductItem.vue";
export default {
  components: { ListProductItem },
  props: {},
  name: "ListProduct",
  data() {
    return {
      listProducts: [],
      currentPage: 1,
      total: 0,
      limit: 3,
    };
  },
  beforeCreate() {
    this.$store.dispatch(
      "actionSetDataProduct",
      JSON.parse(localStorage.getItem("dataProduct"))
    );
  },
  methods: {
    async getProduct() {
      const dataProduct = await ProductService.productsRecommend(
        this.limit,
        this.currentPage
      );
      if (dataProduct.code === 200) {
        this.listProducts = dataProduct.data;
        this.setDataProduct(dataProduct.meta);
        this.$store.dispatch(
          "actionSetDataProduct",
          JSON.parse(localStorage.getItem("dataProduct"))
        );
        this.currentPage = dataProduct.meta.current_page;
        this.total = dataProduct.meta.total;
      }
    },
    setDataProduct(dataProduct) {
      localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
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
    },
  },
};
</script>

<style scoped></style>
