<template>
  <div class="container">
      <div class="row banner">
          <div class="col-md-6 banner__item">
            <div class="banner__items">
              <router-link to="/product" class="banner__link">
                <img class="banner__img" src="@/assets/images/banner/banner1.jpg" alt="banner1">
              </router-link>
            </div>
          </div>
          <div class="col-md-6 banner__item">
            <div class="banner__items">
              <router-link to="/product" class="banner__link">
                <img class="banner__img" src="@/assets/images/banner/banner2.jpg" alt="banner2">
              </router-link>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name: "Banner"
}
</script>

<style scoped src="@/assets/css/components/home/banner.css">

</style>