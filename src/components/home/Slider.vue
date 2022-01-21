<template>
    <div class="container-fluid px-0 mx-0">
        <div class="main__slider">
            <b-carousel ref="myCarousel" class="img__slider"
                id="carousel-fade"
                fade
                indicators
            >
                <div class="slider__arrow">
                    <div class="slider__arrow--prev">
                        <b-icon class="arrow" @click="prev" icon="chevron-left"></b-icon>
                    </div>
                    <div class="slider__arrow--next">
                        <b-icon class="arrow" @click="next" icon="chevron-right"></b-icon>
                    </div>
                </div>

                <b-carousel-slide 
                img-src="https://template.hasthemes.com/toyqo/toyqo/assets/images/slider/slider1-1.png"
                >
                    <div class="container text-start">
                        <div class="slider__item">
                            <h2 class="slider__title">
                                Get -30% off
                                <span class="slider__des">Latest baby product & toy collections.</span>
                            </h2>
                            <router-link to="/product" class="slider__btn">Shop Now</router-link>
                        </div>
                    </div>
                </b-carousel-slide>

                <b-carousel-slide class="img__slider"
                img-src="https://template.hasthemes.com/toyqo/toyqo/assets/images/slider/slider1-2.png"
                >
                  <div class="container text-start">
                        <div class="slider__item">
                            <h2 class="slider__title">
                                 New Arrivals 
                                <span class="slider__des">Get flat 50% off.</span>
                            </h2>
                            <router-link to="/product" class="slider__btn">Shop Now</router-link>
                        </div>
                    </div>

                </b-carousel-slide>
            </b-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Slider',
    data(){
        return {

            }
        },
    methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      }
    }
}
</script>

<style src="@/assets/css/components/home/slider.css">

</style>