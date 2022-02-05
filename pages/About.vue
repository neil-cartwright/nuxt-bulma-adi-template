<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column">
            <div class="content">
              <h1 class="title is-size-6">About</h1>
              <p>
                If you want to share your ADI story with your potential
                customers you can do it here. Why did you become an instructor?
                What do you enjoy the most about it? What gives you the biggest
                buzz about the job?
              </p>
              <h2 class="title is-size-6">Motivated learners</h2>
              <p>
                Motivated learners tend to shop around for their instructor,
                rather than pick the first one they find. With a great website
                you're more likely to reach drivers who turn up every week, pay
                on time and don't mess you around. They want to know what (who!)
                they're buying before they commit. Use this page to prove to
                them that you're worth it.
              </p>
              <p>
                If you have a good quality photograph of yourself you can add it
                here.
              </p>
              <h1 class="title is-size-6">Further information</h1>
              <p>
                If you have more information to provide about your your
                specialist skills and experiences add it here.
              </p>
              <h1 class="title is-size-6">Vehicle make and model</h1>
              <p>
                Many customers are keen to know about which type of car they'll
                be using. Provide this info here if you like.
              </p>
            </div>
          </div>
          <div class="column is-6">
            <img :src="require('~/assets/images/theme/examiner.svg')" alt="" />
          </div>
        </div>
      </div>
    </section>
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
<style lang="scss" scoped>
section.section {
  // padding-bottom: 0;
}
</style>
