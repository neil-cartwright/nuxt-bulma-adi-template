<template>
  <div>
    <h1 class="title is-size-5 is-uppercase">Services and offers</h1>
    <div class="content" v-if="theSpecial">
      <span class="tag my-2 has-background-orange has-text-white">
        {{ theSpecial.special }}
      </span>
      <p class="is-size-7">{{ theSpecial.details }}</p>
    </div>
    <span class="tags">
      <span
        class="tag"
        :class="{ 'has-background-orange': idx == 0 }"
        v-for="(special, idx) in specials"
        :key="idx"
        @click="showSpecial($event, special)"
        >{{ special.special }}</span
      >
    </span>
  </div>
</template>

<script>
import specialOffers from "@/assets/js/special-offers.js";
export default {
  data() {
    return {
      theSpecial: "",
      specials: specialOffers,
    };
  },
  methods: {
    showSpecial(e, special) {
      this.theSpecial = special;
      let tags = document.querySelectorAll(".tags .tag");
      tags.forEach((t) => {
        t.classList.remove("has-background-orange");
      });
      e.currentTarget.classList.add("has-background-orange");
    },
  },
  mounted() {
    this.theSpecial = this.specials[0];
  },
};
</script>

<style lang="scss" scoped>
.tags .tag {
  background: $navy;
  color: $white;
}
.tags .tag:hover {
  background-color: $orange;
  cursor: pointer;
}
.has-background-orange {
  background-color: $orange !important;
}
</style>
