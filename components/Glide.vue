<template>
  <div class="container">
    <div class="box">
      <vue-glide
        :perView="4"
        :rewind="false"
        type="carousel"
        :breakpoints="{
          767: {
            perView: 2,
          },
        }"
      >
        <vue-glide-slide v-for="i in 10" :key="i">
          <div class="notification">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eius
              non nihil maiores iusto fugit enim, ut porro, minima repellendus
              qui quae placeat deserunt, numquam aut nisi deleniti et officiis.
              Slide
              {{ i }}
            </p>
          </div>
        </vue-glide-slide>
        <template slot="control">
          <button class="button my-2" data-glide-dir="<<">start</button>
          <button class="button my-2" data-glide-dir="<">prev</button>
          <button class="button my-2" data-glide-dir=">">next</button>
          <button class="button my-2" data-glide-dir=">>">end</button>
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

<style>
div[data-glide-el="controls"] {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  margin-top: 1em;
}
* {
  /* outline: 1px solid red; */
}
</style>
