n
<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p><strong>Sitepages</strong> ADI Templates {{ date.getFullYear() }}</p>
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
