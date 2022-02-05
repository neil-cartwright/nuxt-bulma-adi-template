<template>
  <section class="section page-section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="content">
            <h1 class="title is-size-6">Areas</h1>
            <p>
              Here you can add content about which areas you work in. People
              tend to type in the area they're looking for when looking for
              driving lessons. Include as much local information as you can,
              including postcodes. If you have local pictures add them too.
            </p>
            <h1 class="title is-size-6">Test centres</h1>
            <p>Include also which test centres you use.</p>
          </div>
        </div>
        <div class="column is-">
          <Map />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
