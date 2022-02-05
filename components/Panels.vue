<template>
  <section class="section has-background-light">
    <div class="container">
      <div class="columns">
        <div
          class="column is-4"
          data-aos="fade-zoom-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">Driving Instructor Websites</div>
            </div>

            <div class="card-image">
              <figure class="image">
                <img
                  :src="require(`~/assets/images/theme/examiner-and-pupil.svg`)"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                Professional websites helping busy ADIs reach their customers.
                Site content created and updated by working ADI and Writing and
                Publishing graduate.
              </p>
            </div>
          </div>
        </div>

        <div
          class="column is-4"
          data-aos="fade-zoom-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">SEO friendly</div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img
                  :src="require(`~/assets/images/theme/dvsa-form.jpg`)"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                All sites are interactive and responsive, look great on the most
                popular handheld phones and tablets as well as desktop PCs.
                Interactive quiz widgets with topical questions are included.
                SEO friendly designed for maximum content exposure to search
                engines.
              </p>
            </div>
          </div>
        </div>

        <div
          class="column is-4"
          data-aos="fade-zoom-in"
          data-aos-offset="50"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <div class="card">
            <div class="card-header">
              <div class="card-header-title">Designed for impact</div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img
                  :src="require(`~/assets/images/school/young-man-on-car.jpg`)"
                  alt="Placeholder image"
                  class="is-object-fit-cover"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                5 free professional stock images with each site or use your own
                great photos and graphics. Images optimised for fast download
                speeds and meta data supplied for SEO. Intuitive and seamless
                <abbr title="single page application">SPA</abbr> style
                navigation. Logo design available.
              </p>
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
.card {
  min-height: 100%;
}
</style>
