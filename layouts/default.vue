<template>
  <div>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: "default",
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
<style>
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>
