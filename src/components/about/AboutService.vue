<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h2 class="title">Why Choose Us</h2>
          <p class="sub-title mt-2">
            Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque libero
          </p>
        </div>
      </div>
    </div>

    <div class="row mb-n6">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(item, index) in services" :key="index">
        <div class="single-choose-item text-center mb-6">
          <b-icon class="about__icon" :icon="item.icon"></b-icon>
          <h4 class="cta-title">{{item.title}}</h4>
          <p class="service__des">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutService",
  data() {
      return {
          services: [
              {
                  title: 'Miễn phí ship',
                  icon: 'cash',
                  description: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
              },
              {
                  title: 'Giao hàng nhanh',
                  icon: 'truck',
                  description: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
              },
              {
                  title: 'Giúp đỡ khách hàng 24/7',
                  icon: 'chat-dots',
                  description: 'Amadea Shop is a very slick and clean e-commerce template with endless possibilities.'
              }
          ]
      }
  }
};
</script>

<style scoped src="@/assets/css/components/about/AboutService.css">
</style>