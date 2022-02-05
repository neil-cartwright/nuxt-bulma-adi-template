<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6">
            <vue-glide :per-view="1">
              <vue-glide-slide v-for="(n, idx) in 10" :key="idx">
                <div class="content">
                  <blockquote class="is-clearfix">
                    <h3 class="title is-size-6">Recommendations</h3>
                    <p>
                      If you have a library of recommendations from previous
                      customers you can place them here, in this carousel. As
                      your business grows you can send new updated content to
                      your web designer who will update the site, and improve
                      your SEO.
                    </p>

                    <p class="is-pulled-right has-text-weight-bold">
                      Neil, London. 2022
                    </p>
                  </blockquote>
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
          <div class="column is-6">
            <img
              :src="require('~/assets/images/theme/examiner-and-pupil.svg')"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
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
