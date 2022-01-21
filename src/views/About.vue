<template>
  <div class="wrapper">
    <div class="about">
      <div class="container">
        <router-link to="/" class="me__home">
          <b-icon icon="house"></b-icon>
        </router-link>
        <span>/</span>
        <span class="me__title">Về chúng tôi</span>
      </div>
    </div>
    <div class="container">
      <header-about />
      <about-service/>
    </div>
    <testimonials/>
    <about-team/>
  </div>
</template>

<script>
import AboutService from '../components/about/AboutService.vue';
import AboutTeam from '../components/about/AboutTeam.vue';
import HeaderAbout from "../components/about/HeaderAbout.vue";
import Testimonials from '../components/home/Testimonials.vue';

export default {
  components: { HeaderAbout, AboutService, Testimonials, AboutTeam },
  name: "About",

};
    
</script>

<style scoped src="@/assets/css/about.css">
</style>