<template>
  <section
    class="section"
    data-aos="fade-zoom-in"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine"
    data-aos-duration="100"
  >
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-light">
                <Quiz />
              </article>
              <article class="tile is-child notification is-warning">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam minus animi dignissimos et itaque cupiditate quos sit,
                  ipsum magni dolorem soluta repellat error. Eius ad sit ab
                  ipsam nobis nisi!
                </p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-light">
                <Tabs>
                  <p>Slot...</p>
                </Tabs>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
              <p class="title">Wide tile</p>
              <p class="subtitle">Aligned with the right tile</p>
              <div class="content">
                <!-- Content -->
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article
            class="tile is-child notification is-success"
            style="padding: 0"
          >
            <Map />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
