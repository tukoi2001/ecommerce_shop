<template>
  <div class="wrapper">
    <div class="product">
      <div class="container">
        <router-link to="/" class="product__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="product__title">Mua sắm</span>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <left-side-bar />
        </div>
          
        <div class="col-md-9">
          <top-bar>
            <button
              data-role="grid_3"
              type="button"
              class="btn-grid-3"
              title="Grid"
              @click="handleChangeTabGrid()"
              :class="{ active: selectedTab == 'grid-product' }"
            >
              <b-icon icon="grid-3x3-gap-fill"></b-icon>
            </button>
            <button
              data-role="grid_list"
              type="button"
              class="btn-list"
              title="List"
              @click="handleChangeTabList()"
              :class="{ active: selectedTab == 'list-product' }"
            >
              <b-icon icon="list-ul"></b-icon>
            </button>
          </top-bar>
          <keep-alive>
            <transition name="fade">
              <component :is="selectedTab"></component>
            </transition>
          </keep-alive>
        </div>
      </div>
    </div>
    <brand />
    <scroll-top-arrow />
  </div>
</template>

<script>
import ScrollTopArrow from "../components/common/ScrollTopArrow.vue";
import Brand from "../components/home/Brand.vue";
import GridProduct from "../components/product/GridProduct.vue";
import LeftSideBar from "../components/product/LeftSideBar.vue";
import ListProduct from "../components/product/ListProduct.vue";
import TopBar from "../components/product/TopBar.vue";
export default {
  components: {
    TopBar,
    LeftSideBar,
    GridProduct,
    Brand,
    ScrollTopArrow,
    ListProduct,
  },
  name: "Product",
  data() {
    return {
      selectedTab: "grid-product",
    };
  },
  computed: {

  },
  methods: {
    handleChangeTabList() {
      this.selectedTab = "list-product";
    },
    handleChangeTabGrid() {
      this.selectedTab = "grid-product";
    },
  },
};
</script>

<style scoped src="@/assets/css/Product.css"></style>
