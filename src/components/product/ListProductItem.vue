<template>
  <div class="ListProductItem">
    <div class="row">
      <div class="col-md-4">
        <div class="item">
          <router-link :to="`product/${slug}`" class="item__link">
            <img :src="image" alt="image-product" />
          </router-link>
          <div class="item__badges">
            <span class="badges__sale"> New </span>
          </div>
          <div class="item__actions">
            <a href="#" class="action wishlist">
              <b-icon icon="suit-heart"></b-icon>
            </a>
            <a href="#" class="action compare">
              <b-icon icon="arrow-repeat"></b-icon>
            </a>
            <a href="#" class="action quickview">
              <b-icon icon="search"></b-icon>
            </a>
          </div>
          <div class="item__cart">
            <button type="button" class="item__cart--btn">Add To Cart</button>
          </div>
        </div>
      </div>
      <div class="col-md-8 d-flex align-items-center">
        <div class="content text-start">
          <h5 class="content__title">
            <router-link to="`/product/${slug}`">{{ name }}</router-link>
          </h5>
          <span class="content__price">
            <span class="content__new">{{ formatPrice(amount) }}</span>
            <span class="content__old">{{ formatPrice((amount * 5  / 100) + amount)}}</span>
          </span>
          <div class="content__des">
            <p class="pt-3">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProductItem",
  props: {
    image: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
  methods: {
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped src="@/assets/css/components/product/ListProductItem.css"></style>
