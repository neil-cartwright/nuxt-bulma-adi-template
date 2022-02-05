n
<template>
  <footer class="footer has-background-dark">
    <div class="has-text-white">
      <p>Sitepages | ADI Templates {{ date.getFullYear() }}</p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  },
};
</script>
<style lang="scss">
footer {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
