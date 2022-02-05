<template>
  <div class="card learn-some-road-signs is-road-signs-component match-height">
    <div class="card-header">
      <p class="card-header-title">Learn some road signs</p>
    </div>
    <div class="card-header-icon">{{ counter + 1 }} / {{ signs.length }}</div>

    <div class="card-content is-clearfix">
      <transition name="fade">
        <div v-if="hasContentChanged">
          <div class="level is-flex is-justify-content-center is-flex">
            <div class="level-item">
              <figure class="image is-128x128">
                <!-- image require tag here causing slow compile -->
                <img v-bind:src="image" v-bind:alt="signs[counter].meaning" />
              </figure>
            </div>
          </div>

          <div class="level">
            <div class="level-item">
              <span class="learn-some-road-signs-answer">
                <span>{{ signs[counter].meaning }}</span>
              </span>
            </div>
          </div>
        </div>
        <!-- hascontentchanged -->
      </transition>
    </div>
    <!-- card content -->

    <div class="card-footer">
      <div class="card-footer-item">
        <span class="next">
          <button class="button" v-on:click="previous">
            <span class="icon is-large">
              <i class="fas fa-angle-double-left"></i>
            </span>
            &nbsp;&nbsp;Previous
          </button>
        </span>
      </div>

      <div class="card-footer-item">
        <span class="next">
          <button class="button" v-on:click="next">
            Next&nbsp;&nbsp;
            <span class="icon is-large">
              <i class="fas fa-angle-double-right"></i>
            </span>
          </button>
        </span>
      </div>
    </div>
    <!-- footer -->
  </div>
  <!-- card -->
</template>

<style scoped>
.card {
  border-radius: 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<script>
import signs from "@/assets/js/signs.js";

export default {
  data: function () {
    return {
      signs: signs,
      counter: 0,
      isActivated: false,
      hasContentChanged: 1,
    };
  },
  computed: {
    // https://blog.lichter.io/posts/dynamic-images-vue-nuxt/
    image() {
      const filename = this.signs[this.counter].src;
      return require(`../assets/images/signs/${filename}`);
    },
  },
  methods: {
    next: function () {
      this.counter++;
      if (this.counter >= this.signs.length) {
        this.counter = 0;
      }
      this.hasContentChanged = 1;
      // setTimeout(() => {
      //   this.hasContentChanged = 1;
      // }, 500);
    },
    previous: function () {
      this.counter--;
      if (this.counter < 0) {
        this.counter = this.signs.length - 1;
      }
      this.hasContentChanged = 1;
      // setTimeout(() => {
      //   this.hasContentChanged = 1;
      // }, 500);
    },
  },
  mounted() {
    console.log(signs);
  },
}; // default
</script>
