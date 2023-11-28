<template>
  <v-row class="main-section">
    <v-col cols="7" class="main-left">
      <span class="text-uppercase text-h1 font-weight-bold">Think <span class="color-main">green</span>,</span>
      <span class="text-uppercase text-h1 font-weight-bold">Study <span class="color-main">smart</span>.</span>
      <p class="text-uppercase text-h2">Buy and sell notes with us.</p>
      <v-btn  class="btn-join mt-5">
        <span>Join the club</span>
      </v-btn>
    </v-col>
    <v-col cols="5" class="main-right">
      <div class="circle-img"></div>
      <v-img :src="require('~/assets/images/people/3d-business-young-women-sitting-with-laptop-on-the-table.png')" height="400" width="450" />
    </v-col>
  </v-row>
</template>

<script>
import VueScrollReveal from "scrollreveal";
    export default {
      mounted() {
          VueScrollReveal().reveal(".main-left", {
            origin: "left",
            duration: 1000,
            distance: "25rem",
            delay: 300,
            // reset: true,

          });
          VueScrollReveal().reveal(".main-right", {
            origin: "right",
            duration: 1000,
            distance: "25rem",
            delay: 300,
            // reset: true,
          });
      }
    }
</script>

<style lang="scss" scoped>

</style>