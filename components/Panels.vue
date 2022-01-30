<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div
          class="column is-4"
          v-for="(n, idx) in 3"
          :key="idx"
          data-aos="fade-zoom-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">Information Panel</div>
            </div>
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                eos assumenda dolore, iure possimus tenetur beatae, dolorum
                pariatur et veniam rerum facilis deserunt nulla quis at!
                Dignissimos animi obcaecati mollitia.
              </p>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">Text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.card-header-title {
  background: #e8e8e8;
}
</style>
