<script>
import AyodaHeader from "./components/AyodaHeader.vue";
import SectionText from "./components/SectionText.vue";

export default {
  name: "App",
  components: {
    AyodaHeader,
    SectionText
  },
  methods: {
    getIcon(icon) {
      const images = require.context('./assets/img/icons/', false, /\.svg$/)
      return images('./' + icon + ".svg")
    }
  }
}
</script>

<template>
  <div class="is-flex is-flex-direction-column is-align-items-center gap-100 p-75">
    <ayoda-header />
    <section class="is-flex is-align-items-center is-justify-content width-80vw gap-100">
      <section-text
        title="What We Do"
        text="
          Our mission is to reduce food waste in the restaurant industry down to an iota.
          We're tackling this issue using our custom built machine learning models that take in information,
          such as sales, weather, and local events data to provide estimates for what foot traffic will look
          like in different markets at different times. These estimates can make all the difference for restaurants,
          particularly those just starting out, by giving them clarity on how much inventory to buy ahead of time.
        "
      />
      <img :src="getIcon('dashboard')" style="height: 350px;" />
    </section>

    <section class="is-flex is-align-items-center is-justify-content width-80vw gap-100">
      <img :src="getIcon('tie')" style="height: 100px;" />
      <section-text
        title="Why Us"
        text="
          Ayoda is the tailor-fit solution for your tailor-fit needs. Each instance of Ayoda is trained specifically
          on your geographic market, with customizations available for any variables that could affect your businesses
          day to day traffic. If your business has years of sales data we can train our model directly on that. If you're
          the new place on the block we also offer pre-trained models using data from other restaurants in your area.
        "
      />
    </section>

    <section class="is-flex is-align-items-center is-justify-content width-80vw gap-100">
      <section-text
        title="Why Now"
        text="
          In the aftermath of covid, many small businesses have closed, or have been on the brink of shutting down. With times as uncertain as ever, every little bit counts, and Ayoda aims to help businesses by saving on potential waste
        "
      />
      <img :src="getIcon('money')" style="height: 100px;" />
    </section>
  </div>
</template>
