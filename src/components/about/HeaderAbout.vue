<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-5 mb-6">
        <img class="about__img" :src="img" alt="" />
      </div>

      <div class="col-lg-7 mb-6 d-flex align-items-center px-5">
        <div class="about-content">
          <h2 class="about-title">About Us</h2>
          <p>
            For those that rather the full immersion of the in store experience
            we welcome your company and look forward to meeting you face to
            face. Being located in the 47 street diamond district, known to be
            the largest diamond.
          </p>
          <p>
            Based in the heart of New York’s Diamond District, also known as the
            NYC diamond district, I. D. Jewelry has some of the most
            competitively priced in the market. It is our goal to supply our
            clients.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderAbout",
  data() {
    return {
      img: require("@/assets/images/about/about.jpg"),
    };
  },
};
</script>

<style scoped src="@/assets/css/components/about/HeaderAbout.css">
</style>