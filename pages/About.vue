<template>
  <div>
    <div class="container">
      <section class="section">
        <div class="columns">
          <div class="column">
            <div class="content">
              <h1 class="title is-size-6">About</h1>
              <p class="has-text-weight-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis nulla placeat voluptate, maxime non molestiae
                voluptatem perferendis mollitia labore ea id libero dolorum
                laborum eligendi quaerat, harum, totam ut impedit?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                accusantium incidunt a dolorem. Inventore ducimus at veritatis
                laboriosam cum nihil natus excepturi, similique quam rerum
                repellat rem ut tenetur nam.
              </p>
              <p>
                Veritatis, error officia earum dolores quidem asperiores
                excepturi harum quas dignissimos ut qui magnam facere delectus
                consequuntur magni quis! Recusandae saepe expedita ad
                reprehenderit tenetur perspiciatis ipsam quod vel unde.
              </p>
              <p>
                Ipsa, neque optio! Ut dicta atque facere laudantium maiores,
                corporis sed iure est alias dolore esse impedit nisi,
                reprehenderit eius veniam animi, obcaecati exercitationem? Sit
                ab ad nobis et cupiditate.
              </p>
              <p>
                Perspiciatis dolore labore eaque eos earum officia fugiat
                assumenda reiciendis culpa. Voluptate ipsa, delectus eos culpa
                eveniet praesentium beatae commodi iusto officia nostrum debitis
                nobis. Iusto aliquam fugiat totam molestiae.
              </p>
            </div>
          </div>
          <div class="column is-6">
            <img :src="require('~/assets/images/theme/examiner.svg')" alt="" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  layout: "default",
  transition: {
    name: "home",
    mode: "out-in",
  },
};
</script>
<style lang="scss">
.Masthead {
  min-height: 100vh;
}
</style>
