<template>
  <v-row class="main-section">
    <v-col cols="7" class="main-left">
      <span class="main-title">Think <span class="color-main">green</span>,</span>
      <span class="main-title">Study <span class="color-main">smart</span>.</span>
      <!-- <p class="text-uppercase text-h2">Buy and sell notes with us.</p> -->
      <p class="main-subtitle">Buy and sell notes with us.</p>
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

.main-title{
  font-size: 6rem;
  letter-spacing: -0.0083333333em !important;
  line-height: 6rem;
  font-weight: 700;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
  }
}

.main-subtitle{
  font-size: 3.75rem !important;
  font-weight: 300;
  line-height: 3.75rem;
  letter-spacing: -0.0083333333em !important;
  text-transform: uppercase;
  
  @media only screen and (max-width: 600px) {
    font-size: 2rem !important;
    line-height: 3rem;
    text-align: center
  }
}


@media only screen and (max-width: 600px) {
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
  .main-left {
    text-align: center;
  }
  .main-right {
    display: none;
  }
  .btn-join {
    width: 100%;
    padding: 2rem 1rem !important; 
    font-size: 1rem !important;
  }
}
</style>