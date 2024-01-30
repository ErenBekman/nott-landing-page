<template>
  <v-row class="main-section">
    <v-col cols="7" class="main-left" style="position: relative;">
      <span class="main-title">Think <span class="color-main main-second-title">green</span>,</span> <br>
      <span class="main-title">Study <span class="color-main main-second-title">smart</span>.</span>
      <p class="main-subtitle">Buy and sell notes with us.</p>
      <div class="mt-10">
        <span> 
          <span class="main-alttitle">{{ $t('sections.main.signup') }}</span>
          <v-img :src="require('~/assets/images/arrow/arrow.svg')" contain class="arrow-img" />
        </span>
        <a href="https://app.nott.app/" target="_blank">
          <v-btn class="btn-join mt-5">
            <span class="text-capitalize">{{ $t('global.join') }}</span>
          </v-btn>
        </a>
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
.main-title{
  font-size: 6rem;
  letter-spacing: -0.0083333333em !important;
  line-height: 6rem;
  font-weight: 700 !important;
  text-transform: uppercase;

  @media only screen and (max-width: 600px) {
    font-size: 5rem;
    text-align: center;
  }
}

.main-second-title {
  font-size: 6rem;
  letter-spacing: -0.0083333333em !important;
  line-height: 6rem;

  @media only screen and (max-width: 600px) {
    font-size: 5rem;
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
    font-size: 2.5rem !important;
    line-height: 3rem;
    text-align: center;
  }
}


.main-alttitle{
  font-family: 'Just Me Again Down Here', cursive !important;
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5rem;
  position: absolute;
  bottom: 40px;
  right: 350px;
  transform: rotate(15deg); 
  transform-origin: right bottom; 

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
    line-height: 1rem;
    bottom: 60px;
    right: -50px;
  }
}

.arrow-img{
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 0.5rem;
  position: absolute;
  top: 325px;
  right: 400px;

  @media only screen and (max-width: 600px) {
    width: 2rem;
    height: 2rem;
    top: 600px;
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
    padding: 1.5rem 2rem !important; 
  }
  
  .btn-join span {
    font-size: 0.9rem !important;
  }
}
</style>