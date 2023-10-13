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
  <div class="is-flex is-flex-direction-column is-align-items-center gap-50 p-75">
    <ayoda-header/>
    <icon-section
      title="What we Do"
      text="We solve the problem of inventory waste for small restaurants. We do so using our machine learning model for usage-prediction."
      icon="chart"
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
