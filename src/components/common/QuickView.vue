<template>
  <div class="wrapper">
    <div style="width: 100%; height:100%" @click.stop="hideQuickView"></div>
    <div class="quick-view">
      <div class="container">
      <div class="row quick-view-row">
        <div class="col-md-6 quick-view-item">
          <img :src="dataQuickView.img" alt=""/>
        </div>
        <div class="col-md-6 quick-view-item pt-5">
          <div class="product__content">
            <h1 class="product__title">{{ dataQuickView.title }}</h1>
            <div class="rating mb-3">
              <span class="testimonials__ratings">
                <span class="testimonials__ratings-star text-warning">
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                </span>
                <span class="testimonials__ratings-num">(10)</span>
              </span>
            </div>
            <div class="product__price mb-3">
              <span class="content__new">{{ formatPrice(dataQuickView.amount) }}</span>
            </div>
            <div class="product__des">
              <p>{{dataQuickView.des}}</p>
            </div>
            <div class="product__form mt-4">
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
            <div class="product__add-to-cart mt-2">
              <button type="submit" class="btn btn-dark btn-hover-primary">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div
              class="product__actions d-flex align-items-center justify-content-left py-3"
            >
              <a href="#" class="product__actions-link"
                ><b-icon
                  class="product__actions-icon"
                  icon="arrow-repeat"
                ></b-icon
                >So sánh</a
              >
              <a href="#" class="product__actions-link"
                ><b-icon
                  class="product__actions-icon"
                  icon="suit-heart"
                ></b-icon
                >Yêu thích</a
              >
            </div>
          </div>
        </div>
        <div class="close">
          <span><b-icon class="close__icon" icon="x-circle" @click.stop="hideQuickView"></b-icon></span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "QuickView",
  data() {
    return {
      quantity: 1,
    };
  },
  props: {
    dataQuickView: {
      type: Object,
      default: () => {},
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
    addQuantity() {
      if (typeof this.quantity == "string") {
        let number = parseInt(this.quantity);
        number += 1;
        this.quantity = number;
      } else {
        this.quantity += 1;
      }
    },
    minusQuantity() {
      if (this.quantity < 2) {
        this.quantity = 1;
      } else {
        this.quantity -= 1;
      }
    },
    hideQuickView() {
      this.$emit('hideQuickView');
    }
  },
};
</script>

<style scoped src="@/assets/css/components/common/QuickView.css"></style>
