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
              <div class="card-header-title">Driving Instructor</div>
            </div>
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  :src="require(`~/assets/images/theme/examiner-and-pupil.svg`)"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                eos assumenda dolore, iure possimus tenetur beatae, dolorum
                pariatur et veniam rerum facilis deserunt nulla quis at!
                Dignissimos animi obcaecati mollitia.
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
              <div class="card-header-title">DVSA Approved</div>
            </div>
            <div class="card-image">
              <figure class="image">
                <img
                  :src="require(`~/assets/images/theme/dvla-form.jpg`)"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                eos assumenda dolore, iure possimus tenetur beatae, dolorum
                pariatur et veniam rerum facilis deserunt nulla quis at!
                Dignissimos animi obcaecati mollitia.
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
              <div class="card-header-title">Get your licence</div>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                eos assumenda dolore, iure possimus tenetur beatae, dolorum
                pariatur et veniam rerum facilis deserunt nulla quis at!
                Dignissimos animi obcaecati mollitia.
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
</style>
