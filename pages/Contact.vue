<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-6">
          <div class="content">
            <h1 class="title is-size-4">Contact Details</h1>
            <p>
              If you'd like a seperate contact details page it goes here. Let
              people know the best way to contact you, and what to do if you're
              in the car teaching and can't answer calls.
            </p>
            <p>
              <strong>Email</strong>
              <a href="mailto:neil@sitepages.co.uk">neil@sitepages.co.uk</a>
              using your mail client.
            </p>
            <p>
              <strong>Call</strong>
              <a href="tel:07917042740">07917 042 740</a> using your mobile
              phone. Please leave a message if I don't answer and I'll phone
              back as soon as I'm free.
            </p>
          </div>
        </div>
        <div class="column is-6">
          <img
            :src="require('~/assets/images/theme/examiner.svg')"
            alt="driving instructor"
          />
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
