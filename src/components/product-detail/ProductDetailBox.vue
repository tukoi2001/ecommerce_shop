<template>
  <div class="wrapper">
    <div class="container">
      <a
        href="#"
        @click.prevent="handleChangeTab(item.slug)"
        class="btn btn__link"
        :class="{active: currentTab === item.slug}"
        v-for="(item, index) in tabs"
        :key="index"
        >{{ item.name }}<a/>
      </a>
      <div class="row px-3">
        <transition name="fade">
          <product-detail-box-des
            v-if="currentTab === 'mo-ta'"
            class="product"
            :customFieldsBox="customFieldsBox"
            :description="description"
          />
          <product-detail-comment
            class="product py-3"
            v-if="currentTab === 'danh-gia'"
          />
          <product-detail-policy
            class="product py-3"
            v-if="currentTab === 'chinh-sach'"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDetailBoxDes from "./ProductDetailBoxDes.vue";
import ProductDetailComment from "./ProductDetailComment.vue";
import ProductDetailPolicy from "./ProductDetailPolicy.vue";
export default {
  components: {
    ProductDetailBoxDes,
    ProductDetailPolicy,
    ProductDetailComment,
  },
  name: "ProductDetailBox",
  props: {
    customFields: {
      type: Object,
      default: () => {},
    },
    des: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      tabs: [
        {
          name: "Mô tả",
          slug: "mo-ta",
        },
        {
          name: "Đánh giá sản phẩm",
          slug: "danh-gia",
        },
        {
          name: "Chính sách giao hàng",
          slug: "chinh-sach",
        },
      ],
      customFieldsBox: {},
      description: "",
      currentTab: "mo-ta",
    };
  },
  methods: {
    handleChangeTab(slug) {
      this.currentTab = slug;
    },
  },
  mounted() {
    this.customFieldsBox = this.customFields;
    this.description = this.des;
  },
};
</script>

<style scoped src="@/assets/css/components/product-detail/ProductDetailBox.css">
</style>