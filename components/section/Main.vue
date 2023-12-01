<template>
  <v-row class="main-section">
    <v-col cols="7" class="main-left" style="position: relative;">
      <span class="main-title">Think <span class="color-main main-second-title">green</span>,</span> <br>
      <span class="main-title">Study <span class="color-main main-second-title">smart</span>.</span>
      <p class="main-subtitle">Buy and sell notes with us.</p>
      <div class="mt-10">
        <span> 
          <span class="main-alttitle mb-7">Sign up</span>
          <span class="main-alttitle">from here</span>
          <v-img :src="require('~/assets/images/arrow/arrow.svg')" contain class="arrow-img" />
        </span>
        <v-btn  class="btn-join mt-5">
          <span>Join the club</span>
        </v-btn>
      </div>
    </v-col>
    <v-col cols="5" class="main-right">
      <div class="circle-img"></div>
      <v-img :src="require('~/assets/images/people/3d-business-young-women-sitting-with-laptop-on-the-table.png')" contain class="main-right-img" />
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
            mobile: false

          });
          VueScrollReveal().reveal(".main-right", {
            origin: "right",
            duration: 1000,
            distance: "25rem",
            delay: 300,
            // reset: true,
            mobile: false
          });
      }
    }
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'BebasNeue-Regular';
  src: url('~/assets/fonts/BebasNeue Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'BebasNeue-Book';
  src: url('~/assets/fonts/BebasNeueBook.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.main-title{
  font-family: 'BebasNeue-Regular', sans-serif;
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

.main-second-title {
  font-family: 'BebasNeue-Regular', sans-serif;
  font-size: 6rem;
  letter-spacing: -0.0083333333em !important;
  line-height: 6rem;

  @media only screen and (max-width: 600px) {
    font-size: 3rem;
    line-height: 3rem;
    text-align: center;
  }
}

.main-subtitle{
  font-family: 'BebasNeue-Book', sans-serif;
  font-size: 3rem;
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


.main-alttitle{
  font-family: 'Just Me Again Down Here', cursive !important;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5rem;
  position: absolute;
  bottom: 40px;
  right: 300px;
  transform: rotate(15deg); 
  transform-origin: right bottom; 

  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
    line-height: 1rem;
    bottom: 80px;
    right: -50px;
  }
}

.arrow-img{
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.5rem;
  position: absolute;
  top: 350px;
  right: 350px;

  @media only screen and (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    bottom: 0;
    right: -30px;
  }
}


.main-right-img{
  width: 450px;
  height: 400px;
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
    position: relative;
    text-align: center;
  }

  .main-right{
    display: none;
  }
  .btn-join {
    width: 100%;
    padding: 2rem 1rem !important; 
    font-size: 1rem !important;
  }
}
</style>