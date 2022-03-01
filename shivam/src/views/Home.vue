<template>
  <div class="home">
    <Carousel
      :navigation="false"
      :pagination="false"
      :startAutoPlay="true"
      :timeout="true"
      class="carousel"
      v-slot="{ currentSlide }"
    >
      <Slide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slidInfo">
          <img class="imager" :src="require(`../assets/${slide}.jpg`)" alt="" />
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Slide from "../components/Slide.vue";
export default {
  name: "Home",
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const carouselSlides = ["slider-1", "slider-2", "slider-3"];
    return { carouselSlides };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}
.slideInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  max-height: 50%;
  height: 50%;
}
.imager {
  min-width: 80%;
  height: 50%;
  object-fit: cover;
}
</style>
