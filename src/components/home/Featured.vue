<template>
  <div class="container">
      <div class="text-center featured__box">
          <h2 class="featured__title">
              Featured Collection
          </h2>
          <p class="featured__des">
              Add featured products to weekly lineup
          </p>
      </div>
      <div class="row justify-content-center pb-5" v-if="featureProducts">
          <div class="col-md-3 py-3" v-for="(item, index) in featureProducts" :key="index">
            <featured-product-item
            :slug="item.slug"
            :image="item.imageUrl"
            :name="item.title"
            :amount="item.amount"
            :description="item.description"
            />
          </div>
      </div>
  </div>
</template>

<script>
import ProductService from '@/services/product-service.js'
import FeaturedProductItem from './FeaturedProductItem.vue'
export default {
  components: { FeaturedProductItem },
    name: 'Featured',
    data() {
        return {
            featureProducts: [],
        }
    },
    props: {

    },
    async created() {
        const dataProduct = await ProductService.productsFeatures();
        this.featureProducts = dataProduct;
    },
    computed: { 
        customFields() {
            if (this.featureProducts) {
                return JSON.parse(this.featureProducts.custom_fields);
            }
            return null;
        }
    },
}
</script>

<style scoped src="@/assets/css/components/home/featured.css">

</style>