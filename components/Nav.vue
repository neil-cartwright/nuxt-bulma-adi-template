<template>
  <nav
    class="navbar is-fixed-top is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxtLink class="navbar-item has-text-weight-bold" to="/">
          <img
            :src="
              require(`~/assets/images/logos/driving-school-logo-no-background.svg`)
            "
            alt=""
          />
        </nuxtLink>
        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': navOpen }"
          @click="toggleDropDownNav"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': navOpen }"
      >
        <div class="navbar-start">
          <a href="tel:07917042740" class="navbar-item">
            <span class="icon is-medium">
              <i class="fad fa-phone-alt"></i>
            </span>
            07917 042 740</a
          >
        </div>

        <div class="navbar-end">
          <nuxt-link to="/about" class="navbar-item"> About </nuxt-link>

          <nuxt-link class="navbar-item" to="/recommendations">
            Recommendations
          </nuxt-link>

          <div
            class="navbar-item has-dropdown"
            :class="{ 'is-active': dropDownActive }"
          >
            <a class="navbar-link" @click="toggleDropDown"> More </a>

            <div
              class="navbar-dropdown"
              :class="{ 'is-hidden': !dropDownActive }"
            >
              <nuxt-link to="/contact" class="navbar-item"> Contact </nuxt-link>
              <nuxt-link to="/prices" class="navbar-item"> Prices </nuxt-link>
              <hr class="navbar-divider" />
              <nuxt-link to="/areas" class="navbar-item"> Areas </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
      dropDownActive: false,
      navHidden: false,
      lastScrollTop: 0,
    };
  },
  watch: {
    // closes navbar when page change
    $route() {
      this.navOpen = false;
      this.dropDownActive = false;
    },
  },
  methods: {
    toggleDropDownNav() {
      this.navOpen = !this.navOpen;
    },
    toggleDropDown() {
      this.dropDownActive = !this.dropDownActive;
    },
  },
};
</script>
<style lang="scss">
.navbar-brand .navbar-item img {
  height: 4rem;
  max-height: inherit;
}

// animate navbar
@include until($desktop) {
  .navbar-menu {
    display: block;
    opacity: 0;

    position: absolute; /* or float: left; width: 100%;*/
    left: 0;
    right: 0;

    transform: translateX(-50%);
    transition: all 0.4s ease-in-out;
    pointer-events: none;
  }

  .navbar-menu.is-active {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }
}

// lose inherent styling on hover/active navbar
.navbar .navbar-brand > a.navbar-item:hover,
.navbar a.navbar-item:hover,
.navbar a.navbar-item:hover,
.navbar a.navbar-item:focus,
.navbar-brand > a.navbar-item:focus {
  background: transparent !important;
  opacity: 0.8;
}
.nuxt-link-exact-active {
  text-decoration: underline;
}

// headroom scrolls navbar up via npm package headroom.js
.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}
</style>
