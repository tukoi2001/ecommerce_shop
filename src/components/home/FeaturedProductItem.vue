<template>
  <div class="featuredproductitem">
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
        <a href="#" @click.prevent="show = true" class="action quickview">
          <b-icon icon="search"></b-icon>
        </a>
      </div>
      <div class="item__cart">
        <button type="button" class="item__cart--btn">Add To Cart</button>
      </div>
    </div>
    <div class="content">
      <h5 class="content__title">
        <router-link :to="`product/${slug}`">{{ name }}</router-link>
      </h5>
      <span class="content__price">
        <span class="content__new">{{ formatPrice(amount) }}</span>
        <!-- <span class="content__old">{{ (amount * discount / 100) + amount }}</span> -->
      </span>
    </div>
    <transition name="fade">
      <quick-view
      v-if="show"
      :dataQuickView="dataQuickView"
      @hideQuickView="hideQuickView"
    />
    </transition>
  </div>
</template>

<script>
import QuickView from '../common/QuickView.vue';
export default {
  components: { QuickView },
  name: "FeaturedProductItem",
  data() {
    return {
      dataQuickView: {
        img: '',
        title: '',
        amount: '',
        des: ''
      },
      show: false,
    }
  },
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
      default: ""
    }
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
    hideQuickView() {
      this.show = false;
    }
  },
  mounted() {
    this.dataQuickView.img = this.image;
    this.dataQuickView.title = this.name;
    this.dataQuickView.amount = this.amount;
    this.dataQuickView.des = this.description;
  }
};
</script>

<style scoped src="@/assets/css/components/home/featuredproductitem.css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>