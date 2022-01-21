<template>
  <div class="wrapper">
    <div class="container text-center">
        <h2 class="testimonials__title">Testimonials</h2>
        <p class="testimonials__des">What they say</p>
      <div class="row">
        <div class="col-12">
            <div class="testimonials__image d-flex justify-content-center align-items-center">
                <div class="testimonials__item"  v-for="(item, index) in listBabys" :key="index">
                    <img @click="showContent(index)" :class="{active: currentContent== index}" :src="item.image" :alt="item.alt">
                </div>
            </div>
        </div>
      </div>

      <div class="row">
          <div class="col-12 testimonials__content">
              <p class="testimonials__para">
                  {{showCurrentContent.longText}}
              </p>
              <span class="testimonials__ratings">
                  
                  <span class="testimonials__ratings-star text-warning">
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                  </span>
                  <span class="testimonials__ratings-num text-light">({{ showCurrentContent.rate }})</span>
              </span>
              <h4 class="testimonials__author">
                  {{ showCurrentContent.author }}
              </h4>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Testimonials",
  components: {

  },
  data() {
    return {
        currentContent: 0,
        listBabys: [
            {
                image: require("@/assets/images/testimonials/baby1.jpg"),
                alt: 'baby-1'
            },
            {
                image: require("@/assets/images/testimonials/baby2.jpg"),
                alt: 'baby-2'
            },
            {
                image: require('@/assets/images/testimonials/baby3.jpg'),
                alt: 'baby-3'
            },
            {
                image: require('@/assets/images/testimonials/baby4.jpg'),
                alt: 'baby-4'
            },
        ],
        listAnswers: [
            {
                longText: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
                author: 'Cristal Aryan',
                rate: 4
            },
            {
                longText: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
                author: 'Anamika lusy',
                rate: 5
            },
            {
                longText: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
                author: 'Tinsy Nilom',
                rate: 9
            },
            {
                longText: 'Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque',
                author: 'Jems Jhon',
                rate: 3
            },
        ],
        
    };
  },
  methods: {
    showContent(index) {
        this.currentContent = index;
    }
  },
  computed: {
      showCurrentContent() {
          let index = this.currentContent;
          return this.listAnswers[index];
      }
  }
};
</script>

<style scoped src="@/assets/css/components/home/testimonials.css">
</style>