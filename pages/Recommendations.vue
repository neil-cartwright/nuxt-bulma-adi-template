<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column is-6">
            <vue-glide :per-view="1">
              <vue-glide-slide v-for="(n, idx) in 10" :key="idx">
                <div class="content">
                  <blockquote class="is-clearfix">
                    <h3 class="title is-size-6">lorem Ipsum</h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Esse ab eaque ut provident sunt iste vero eum minima
                      commodi. A hic earum ab eos blanditiis unde, dignissimos
                      officiis repellat rerum!
                    </p>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nemo et harum eum commodi, incidunt dicta pvoluptate
                      accusamus similique blanditiis, facere, odit ullam fugit
                      excepturi quae dolorem hic! Consectetur, quia asperiores.
                    </p>
                    <p class="is-pulled-right has-text-weight-bold">
                      Lorem, Ipsum 2022
                    </p>
                  </blockquote>
                </div>
              </vue-glide-slide>
              <template slot="control">
                <button class="button my-2 mx-1" data-glide-dir="<<">
                  start
                </button>
                <button class="button my-2 mx-1" data-glide-dir="<">
                  prev
                </button>
                <button class="button my-2 mx-1" data-glide-dir=">">
                  next
                </button>
                <button class="button my-2 mx-1" data-glide-dir=">>">
                  end
                </button>
              </template>
            </vue-glide>
          </div>
          <div class="column is-6">
            <img
              :src="require('~/assets/images/theme/examiner-and-pupil.svg')"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { Glide, GlideSlide } from "vue-glide-js";
export default {
  name: "recommendations",
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  layout: "default",
  transition: {
    name: "home",
    mode: "out-in",
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
