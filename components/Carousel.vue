<template>
  <slider
    animation="fade"
    :duration="1000"
    :interval="8000"
    :speed="1000"
    :autoplay="true"
    :stopOnHover="false"
    :indicators="false"
    :control-btn="false"
    height="400px"
  >
    <slider-item v-for="(i, index) in list" :key="index" :style="i">
      <img v-if="i.image" :src="require(`~/assets/images/${i.image}`)" alt="" />
    </slider-item>
  </slider>
</template>
<script>
// https://github.com/shhdgit/vue-easy-slider/blob/master/README.md
import { Slider, SliderItem } from "vue-easy-slider";

export default {
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      list: [
        {
          width: "100%",
          height: "500px",
          image: "young-man-on-car.jpg",
        },
        {
          width: "100%",
          height: "600px",
          image: "girl-driving.jpg",
        },
        {
          width: "100%",
          height: "700px",
          image: "dvla-form.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.slider {
  height: 100%;
  z-index: 0;

  img {
    object-fit: contain;
  }
}
</style>
