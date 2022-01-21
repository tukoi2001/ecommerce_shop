<template>
  <div class="product__box">
    <div class="product__image-box">
      <img class="product__img" :src="imageUrl" />
      <div class="product__badges" v-if="customFields && customFields.saleOff">
        <span class="badges__sale"> - {{ customFields.saleOff }}% </span>
      </div>
    </div>

    <div
      class="list-image"
      v-if="customFields && customFields.images && customFields.images.length"
    >
      <img class="product__img-item" :src="imageUrl" />
      <img
        class="product__img-item"
        v-for="(image, index) in customFields.images"
        :key="index"
        :src="require(`@/assets/images/products/${image}.jpg`)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailImage",
  props: {
      customFields: { 
          type: Object,
          default: () => {},
      },
      imageUrl: { 
          type: String,
          default: "",
      }
  }
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailImage.css">
</style>