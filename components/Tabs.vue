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
        <h1 class="title is-size-6">{{ content.heading }}</h1>
        <figure class="image is-128x128 mx-2 my-2 is-pulled-right">
          <img :src="content.img" alt="" />
        </figure>
        <p>{{ content.content }}</p>
      </div>
    </div>
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
            "Picture - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt adipisci sint rem iste! Adipisci labore numquam quia aut explicabo aperiam fugit necessitatibus aspernatur, perferendis eum totam ex nihil cum saepe. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nam atque nobis odit sed, in odio pariatur assumenda qui nemo et labore deleniti a, quo maxime? Error at facilis nam!",
          img: "https://via.placeholder.com/150",
        },
        {
          heading: "Areas",
          icon: "fa fa-map-marker",
          content:
            "Areas -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, assumenda provident obcaecati rerum iusto ab labore tempora doloremque laborum nulla nam aliquid delectus, dignissimos aut eum magni molestias architecto quisquam!",
          img: "https://via.placeholder.com/150",
        },
        {
          heading: "Vehicle",
          icon: "fad fa-car",
          content:
            "Vehicle  -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, explicabo aliquid consequuntur laboriosam minima accusamus. Incidunt eveniet deserunt temporibus quidem fuga, sed provident, natus vitae explicabo, molestias reiciendis dolore nulla?",
          img: "https://via.placeholder.com/150",
        },
        {
          heading: "Instructor",
          icon: "fad fa-chalkboard-teacher",
          content:
            "Instructor -- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, voluptates sunt. Libero, praesentium atque debitis aliquam et enim nihil animi ipsam incidunt, in nemo porro aspernatur nesciunt magnam nam iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsam vero pariatur. Omnis, vel ut rem laboriosam cumque neque quis eius officiis fugiat porro, deserunt autem officia voluptates explicabo! Culpa!",
          img: "https://via.placeholder.com/150",
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
