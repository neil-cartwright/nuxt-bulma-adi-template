<template>
  <div class="container" data-aos="fade-zoom-in" data-aos-duration="1000">
    <div class="box">
      <vue-glide
        :perView="4"
        :rewind="false"
        type="carousel"
        :breakpoints="{
          767: {
            perView: 1,
          },
        }"
      >
        <vue-glide-slide v-for="i in 10" :key="i">
          <div class="message is-light p-0">
            <div class="message-header">
              <h1 class="title is-size-6">Pass picture {{ i }}</h1>
            </div>
            <figure class="image is-4by3">
              <img
                v-if="i % 2 == 0"
                :src="require(`~/assets/images/school/girl-passed-test.svg`)"
                alt="pass-picture"
              />
              <img
                v-else
                :src="require(`~/assets/images/school/boy-passed-test.svg`)"
                alt="pass-picture"
              />
            </figure>
          </div>
        </vue-glide-slide>
        <template slot="control">
          <button class="button mx-2" data-glide-dir="<<">
            <span class="icon">
              <i class="fad fa-fast-backward"></i>
            </span>
          </button>
          <button class="button mx-2" data-glide-dir="<">
            <span class="icon">
              <i class="fad fa-backward"></i>
            </span>
          </button>
          <button class="button mx-2" data-glide-dir=">">
            <span class="icon"><i class="fad fa-forward"></i></span>
          </button>
          <button class="button mx-2" data-glide-dir=">>">
            <span class="icon">
              <i class="fad fa-fast-forward"></i>
            </span>
          </button>
        </template>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
};
</script>

<style lang="scss">
div[data-glide-el="controls"] {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  margin-top: 1em;
}
button:hover .icon {
  // color: $dark;
}
</style>
