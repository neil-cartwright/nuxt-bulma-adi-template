<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li
          v-for="(tab, idx) in tabs"
          :key="idx"
          @click="makeTabActive(idx)"
          :class="{ 'is-tabbed': idx == selectedIndex }"
        >
          <a>
            <span class="icon is-small"
              ><i :class="tab.icon" aria-hidden="true"></i
            ></span>
            <span class="is-hidden-touch">{{ tab.heading }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <div
        class="tab-content"
        :class="{ 'is-tabbed': idx == selectedIndex }"
        v-for="(content, idx) in tabs"
        :key="idx"
      >
        <h1 class="title is-size-6 has-text-orange">{{ content.heading }}</h1>
        <p>{{ content.content }}</p>
        <figure class="image py-3">
          <img :src="require(`~/assets/images/school/${content.img}`)" alt="" />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
import tabsContent from "@/assets/js/tabs-content.js";
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: tabsContent,
    };
  },
  methods: {
    makeTabActive(idx) {
      this.selectedIndex = idx;
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  max-width: 100%;
}
.tab-content {
  display: none;
}
li.is-tabbed a {
  border-bottom: 1px solid $orange;
  color: $orange !important;
}
.tab-content.is-tabbed {
  display: block;
}
.tabs a {
  text-decoration: none !important;
}

img {
  width: 100%;
}
</style>
