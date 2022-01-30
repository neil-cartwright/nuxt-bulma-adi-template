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
            <span>{{ tab.heading }}</span>
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
        <figure class="has-text-centered mb-2">
          <img :src="content.img" alt="" />
        </figure>
        <h1 class="title is-size-6">{{ content.heading }}</h1>
        <p>{{ content.content }}</p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedIndex: 0,
      tabs: [
        {
          heading: "About",
          icon: "fad fa-user",
          content:
            "Picture - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt adipisci sint rem iste! Adipisci labore numquam quia aut explicabo aperiam fugit necessitatibus aspernatur, perferendis eum totam ex nihil cum saepe.",
          img: "https://loremflickr.com/320/240?lock=1",
        },
        {
          heading: "Areas",
          icon: "fa fa-map-marker",
          content:
            "Areas -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure.",
          img: "https://loremflickr.com/320/240?lock=2",
        },
        {
          heading: "Vehicle",
          icon: "fad fa-car",
          content:
            "Vehicle  -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure.",
          img: "https://loremflickr.com/320/240?lock=3",
        },
        {
          heading: "Instructor",
          icon: "fad fa-chalkboard-teacher",
          content:
            "Instructor -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure.",
          img: "https://loremflickr.com/320/240?lock=4",
        },
      ],
    };
  },
  methods: {
    makeTabActive(idx) {
      this.selectedIndex = idx;
    },
  },
};
</script>
<style scoped>
.tab-content {
  display: none;
}
li.is-tabbed a {
  border-bottom: 1px solid #485fc7;
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
