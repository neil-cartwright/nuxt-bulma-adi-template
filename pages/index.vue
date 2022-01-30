<template>
  <div>
    <Hero />
    <Panels />
    <Tiles />
    <Glide />
  </div>
</template>

<script>
import "aos/dist/aos.css";
import aos from "aos";
export default {
  name: "Index",
  layout: "default",
  transition: {
    name: "home",
    mode: "out-in",
  },
  mounted() {
    aos.init();
  },
};
</script>
