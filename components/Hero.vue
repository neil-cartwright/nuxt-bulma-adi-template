<template>
  <section class="hero is-halfheight">
    <client-only>
      <parallax>
        <div class="background-image">
          <picture>
            <!-- up to small mobile -->
            <source
              media="(max-width:508px)"
              srcset="~/assets/images/school/examiner-and-pupil-vertical.svg"
            />
            <!-- up to tablet -->
            <source
              media="(max-width:767px)"
              srcset="~/assets/images/school/examiner-and-pupil-4by3.svg"
            />

            <!-- intermediate -->
            <source
              media="(max-width:1023px)"
              srcset="~/assets/images/school/instructor-in-car.svg"
            />
            <!-- widescreen -->
            <img
              src="~/assets/images/school/examiner-and-pupil-panorama.svg"
              alt="Driving School Instructor"
            />
          </picture>
        </div>
      </parallax>
    </client-only>
    <div class="overlay"></div>
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div
            class="column is-6 is-flex is-flex-direction-column is-justify-content-center is-align-items-start"
          >
            <p class="title is-size-1 has-text-white">
              Driving School Websites
            </p>
            <p class="subtitle has-text-white">
              Modern, interactive and fully responsive ADI Websites for
              independent driving instructors.
            </p>
            <NuxtLink
              to="/contact"
              class="button is-large is-orange has-text-white"
              >Find out more</NuxtLink
            >
          </div>
          <div class="column is-6">
            <div class="logo">
              <!-- <img
                :src="
                  require(`~/assets/images/logos/driving-school-logo-no-background-white-text.svg`)
                "
                alt=""
              /> -->
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
  opacity: 0.4;
  background: $navy;
}
.background-image {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    height: 100%;
    @include mobile {
      object-position: right top;
    }
    @include tablet-only {
      object-position: center;
    }
  }
}

.button {
  border: none;
}
.hero .Masthead {
  position: absolute !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  min-height: 100%;
}
</style>
