<template>
  <div class="shop_toolbar_wrapper d-flex flex-column flex-md-row pb-10 mb-n4">
    <div class="shop-top-bar-left mb-4">
      <div class="shop_toolbar_btn">
        <slot></slot>
      </div>
      <div class="shop-top-show">
        <span>Showing {{dataProduct.from}} – {{dataProduct.to}} of {{dataProduct.total}} results</span>
      </div>
    </div>
    <div class="shop-top-bar-right mb-4">
      <h4 class="title me-2">Short By:</h4>

      <div class="shop-short-by">
        <select class="nice-select" aria-label=".form-select-sm example">
          <option selected>Short by Default</option>
          <option value="1">Short by Popularity</option>
          <option value="2">Short by Rated</option>
          <option value="3">Short by Latest</option>
          <option value="3">Short by Price</option>
          <option value="3">Short by Price</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  computed: {
    dataProduct() {
      return this.$store.state.dataProduct;
    }
  },
};
</script>

<style scoped src="@/assets/css/components/product/TopBar.css"></style>
