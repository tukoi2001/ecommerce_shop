<template>
  <div class="product__content">
    <h1 class="product__title">{{ title }}</h1>
    <div class="rating">
      <span class="testimonials__ratings">
        <span class="testimonials__ratings-star text-warning">
          <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
          <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
          <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
          <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
          <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
        </span>
        <span class="testimonials__ratings-num">(10)</span>
      </span>
    </div>
    <div class="product__price">
      <span class="content__new">{{ formatPrice(amount) }}</span>
      <span class="content__old">{{
        formatPrice(
          (amount * customFields.saleOff) / 100 + amount
        )
      }}</span>
    </div>
    <div class="product__available">
      <p>Số lượng sản phẩm: <span>10 sản phẩm</span></p>
    </div>
    <div class="product__brand">
      <p>
        Thương hiệu: <span>{{ customFields.brand }}</span>
      </p>
    </div>
    <div class="product__material">
      <p>
        Chất liệu: <span>{{ customFields.merital }}</span>
      </p>
    </div>
    <div class="product__age">
      <p>
        Độ tuổi sử dụng: <span>{{ customFields.age }}</span>
      </p>
    </div>
    <div class="product__form">
      <p>Số lượng:</p>
      <button type="submit" @click="minusQuantity">
        <b-icon icon="dash"></b-icon>
      </button>
      <input
        type="number"
        name="quantity"
        id=""
        min="1"
        max="50"
        v-model="quantity"
      />
      <button type="submit" @click="addQuantity">
        <b-icon icon="plus"></b-icon>
      </button>
    </div>
    <div class="product__add-to-cart">
        <button type="submit" class="btn btn-dark btn-hover-primary">Thêm vào giỏ hàng</button>
    </div>
    <div class="product__actions d-flex align-items-center justify-content-left py-3">
        <a href="#" class="product__actions-link"><b-icon class="product__actions-icon" icon="arrow-repeat"></b-icon>So sánh</a>
        <a href="#" class="product__actions-link"><b-icon class="product__actions-icon" icon="suit-heart"></b-icon>Yêu thích</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetailContent",
  props: {
      customFields: {
          type: Object,
          default: () => {},
      },
      title: {
          type: String,
          default: "",
      },
        amount: {
            type: Number,
            default: 0,
        }
  },
  data() {
      return {
            quantity: 1,
      }
  },
  methods: {
    formatPrice(value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });
    return formatter.format(value);
    },
    addQuantity() {
      if (typeof this.quantity == 'string') {
        let number = parseInt(this.quantity);
        number += 1;
        this.quantity = number;
      }
      else {
        this.quantity += 1;
      }
    },
    minusQuantity() {
      if (this.quantity < 2) {
        this.quantity = 1;
      }
      else {
        this.quantity -= 1;
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailContent.css">
</style>