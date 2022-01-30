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
        <div class="tile is-vertical is-9">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-light">
                <Quiz />
              </article>
              <article
                class="tile is-child notification is-warning has-text-centered"
              >
                <h1 class="title is-size-6">Book a lesson!</h1>
                <p>Call on <a href="#">01234 567 890</a></p>
                <p>Email: <a href="#">info@drivingschool.com</a></p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-light">
                <Tabs> </Tabs>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification p-0">
              <Map />
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <h1 class="title is-size-6">Lorem Ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                fugit doloribus, accusantium non suscipit deserunt fuga
                officiis, soluta aperiam ullam porro reprehenderit quisquam.
                Quod beatae minus sit quisquam non magnam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique optio dolorum sequi nobis accusamus animi! Similique
                saepe vero, autem itaque commodi aliquam rem architecto
                dignissimos non unde impedit assumenda animi!
              </p>
            </div>
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
