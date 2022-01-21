<template>
  <div id="app">
    <the-header/>
    <router-view/>   
   
   <the-footer/>
   <last-footer/>
  </div>
</template>

<script>
import LastFooter from './components/common/LastFooter.vue';
import TheFooter from './components/common/TheFooter.vue';
import TheHeader from './components/common/TheHeader.vue';

export default {
  components: {TheHeader, TheFooter, LastFooter},
  mounted() {
    const data = localStorage.getItem('userInfoGlobal');
    if(data && data !== '') {
      this.$store.dispatch('actionSetUserInfo', JSON.parse(localStorage.getItem('userInfoGlobal')));
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&family=Roboto:wght@100;300;400;500;900&display=swap');
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.875;
}
</style>
