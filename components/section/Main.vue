<template>
  <v-row class="main-section">
    <v-col cols="7" class="main-left" style="position: relative;">
      <span class="main-title">Think <span class="color-main main-second-title">green</span>,</span> <br>
      <span class="main-title">Study <span class="color-main main-second-title">smart</span>.</span>
      <p class="main-subtitle">Buy and sell notes with us.</p>
      <div class="main-join-container">
        <JoinButton />
        <div class="main-join"> 
          <span class="main-alttitle">
            {{ $t('sections.main.signup') }}
          </span>
          <v-img 
            :src="require('~/assets/images/arrow/arrow.svg')" 
            class="main-arrow-img" 
            contain 
          />
        </div>
      </div>
    </v-col>
    <v-col cols="5" class="main-right">
      <div class="circle-img"></div>
      <v-img 
        :src="require('~/assets/images/people/3d-business-young-women-sitting-with-laptop-on-the-table.png')" 
        class="main-right-img" 
        contain 
      />
    </v-col>
  </v-row>
</template>

<script>
import VueScrollReveal from "scrollreveal";
    export default {
      components:{
        JoinButton: () => import("@/components/common/JoinButton")
      },
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

.main-join-container{
  display: flex;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  .main-join {
    margin-left: 2rem;
    margin-bottom: 3rem;
    width: 100px;
    height: 100px;
    position: relative;

    .main-alttitle{
      font-family: 'Just Me Again Down Here', cursive !important;
      font-weight: 300;
      font-size: 2rem;
      line-height: 2rem;
      position: absolute;
      transform: rotate(30deg);
      -webkit-transform: rotate(30deg);
      -moz-transform: rotate(30deg);
      -o-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
    }
    
    .main-arrow-img{
      width: 3.5rem;
      height: 2.5rem;
      margin-top: 4rem;
    }
  }

}


.main-right {
  position: absolute;
  top: 75;
  right: 0;
}

.main-right-img{
  width: 450px;
  height: 400px;
}

.circle-img{
  background-color: #c1ff02;
  border-radius: 50%;
  position: absolute;
  width: 300px;
  height: 300px;
  top: 75px;
  right: 0;
}


@media only screen and (max-width: 600px) {
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // padding: 0 1rem;
    margin-top: 2rem;
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

  .main-join-container{
    // margin-top: 1rem !important;
    .main-join {
      margin-left: 0 !important;
  
      .main-alttitle{
        font-size: 2rem !important;
        line-height: 1rem !important;
      }
      
      .main-arrow-img{
        width: 2rem !important;
        height: 2rem !important;
      }
    }
  }
}

@media only screen and (min-width: 1500px) {
  .circle-img{
    right: 240px;
  }
}
</style>