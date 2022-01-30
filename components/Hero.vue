<template>
  <section class="hero">
    <div class="background-image"></div>
    <div class="overlay"></div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div
            class="column is-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-start"
          >
            <p class="title is-size-1 has-text-white">Driving School</p>
            <p class="subtitle has-text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              nihil ipsam maxime ducimus et! Eos consequatur optio quo nesciunt
              delectus, voluptas eum tempore, explicabo consectetur, rerum
              dignissimos quos quia illum.
            </p>
            <NuxtLink
              to="/contact"
              class="button is-large is-orange has-text-white"
              >Book a Lesson</NuxtLink
            >
          </div>
          <div class="column is-6">
            <div class="logo">
              <img
                :src="
                  require(`~/assets/images/logos/driving-school-logo-no-background-white-text.svg`)
                "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Parallax from "vue-parallaxy";
export default {
  components: {
    Parallax,
  },
};
</script>
<style lang="scss">
.hero {
  position: relative;
}
.hero-body .column .logo {
  @include mobile {
    display: none;
  }
}
.logo img {
  opacity: 0.1;
}
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.8;
  background: $navy;
}
.background-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("~/assets/images/patterns/Waiau.svg");
  background-size: contain;
  background-position: left top;
  filter: blur(8px) opacity(40%);
}
.button {
  border: none;
}
</style>
