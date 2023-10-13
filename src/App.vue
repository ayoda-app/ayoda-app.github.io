<script>
import AyodaHeader from "./components/AyodaHeader.vue";
import IconSection from "./components/IconSection.vue";

export default {
  name: "App",
  components: {
    AyodaHeader,
    IconSection
  }
}
</script>

<template>
  <div class="is-flex is-flex-direction-column is-align-items-center gap-150 p-75">
    <ayoda-header/>
    <icon-section
      title="What We Do"
      text="
        Our mission is to reduce food waste in the restaurant industry down to an iota.
        We're tackling this issue using our custom built machine learning models that take in information,
        such as sales, weather, and local events data to provide estimates for what foot traffic will look
        like in different markets at different times. These estimates can make all the difference for restaurants,
        particularly those just starting out, by giving them clarity on how much inventory to buy ahead of time.
      "
      icon="dashboard"
      icon-height="500px"
      icon-align="right"
    />
    <icon-section
      title="Why Us"
      text="Ayoda is the tailor-fit solution for your tailor-fit needs. Each instance of Ayoda is trained on your own inventory data to predict your own needs."
      icon="tie"
      icon-align="left"
    />
    <icon-section
      title="Why Now"
      text="In the aftermath of covid, many small businesses have closed, or have been on the brink of shutting down. With times as uncertain as ever, every little bit counts, and Ayoda aims to help businesses by saving on potential waste"
      icon="money"
      icon-align="right"
    />
  </div>
</template>
