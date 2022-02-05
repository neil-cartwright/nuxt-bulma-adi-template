<template>
  <section
    class="section"
    data-aos="fade-zoom-in"
    data-aos-offset="100"
    data-aos-easing="ease-in-sine"
    data-aos-duration="1000"
  >
    <div class="container">
      <div class="tile is-ancestor">
        <!-- ancestor -->
        <div class="tile is-vertical is-8">
          <!-- left 2/3 -->
          <div class="tile">
            <!-- top left tile -->
            <div class="tile is-parent is-vertical">
              <!-- quiz -->
              <article class="tile notification is-child is-light">
                <Quiz />
              </article>
              <!-- contact details -->
              <article
                class="tile is-child notification has-background-light has-text-centered"
              >
                <ContactDetails />
              </article>
            </div>
            <!-- tabs not on tablet, as causing margins to clash -->
            <div class="tile is-parent is-hidden-tablet-only">
              <article class="tile notification is-child is-light">
                <Tabs />
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child p-0">
              <Map />
            </article>
          </div>
        </div>

        <div class="tile is-parent is-vertical">
          <article class="tile notification is-child is-light">
            <Specials />
          </article>
          <article class="tile is-child">
            <Signs />
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Quiz from "@/components/Quiz";
import Specials from "@/components/Specials";
import Tabs from "@/components/Tabs";
import ContactDetails from "@/components/ContactDetails";
import Signs from "@/components/Signs";
import Map from "@/components/Map";

export default {
  components: {
    Quiz,
    Specials,
    Tabs,
    Signs,
    ContactDetails,
    Map,
  },
};
</script>
