<template>
  <div>
    <Hero />
    <Panels />
    <Tiles />
    <Glide />
    <Section />
  </div>
</template>

<script>
import "aos/dist/aos.css";
import aos from "aos";
import Hero from "@/components/Hero.vue";
import Panels from "@/components/Panels.vue";
import Tiles from "@/components/Tiles.vue";
import Glide from "@/components/Glide";
import Section from "@/components/Section";

export default {
  components: {
    Hero,
    Panels,
    Tiles,
    Glide,
    Section,
  },
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
