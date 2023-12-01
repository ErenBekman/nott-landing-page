<template>
    <div class="contact-section">
      <v-row>
          <v-col cols="6" class="anm-left">
              <div class="circle-content-img"></div>
              <v-img :src="require('~/assets/images/people/business-3d-young-women-standing.png')" contain height="400" width="400" class="content-img" />
          </v-col>
          <v-col cols="6" class="join-section anm-right">
            <div class="join-img">
              <v-img :src="require('~/assets/images/logo/icon_white.svg')" contain width="75" height="75" />
            </div>

            <div class="join-title color-main">Join us today.</div>
            <h1 class="join-subtitle">Save Money, <br> Boost Your Grades.</h1> 
            
            <a href="https://nott.academy/" target="_blank">
              <v-btn text class="btn-join mt-5">
                <span>Join the club</span>
              </v-btn>
            </a>

            <div class="d-flex align-center justify-start mt-5">
              <a href="https://www.instagram.com/nott.academy/" target="_blank">
                <v-btn small icon color="#c1ff02">
                  <v-icon large>mdi-instagram</v-icon>
                </v-btn>
              </a>
              <a href="https://linkedin.com/company/nottacademy/" target="_blank">
                <v-btn small icon color="#c1ff02" class="ml-2">
                  <v-icon large>mdi-linkedin</v-icon>
                </v-btn>
              </a>
              <v-btn small icon color="#c1ff02" class="ml-2" @click="sendEmail">
                <v-icon large>mdi-email</v-icon>
              </v-btn>
            </div>
          </v-col>
      </v-row>
    </div>
</template>


<script>
import VueScrollReveal from "scrollreveal";
    export default {
      methods: {
        sendEmail() {
          const emailAddress = "erkin@nott.academy";
          const subject = "Subject of the email";
          const body = "Body of the email";
          const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailtoUrl;
        },
      },
      mounted() {
        // VueScrollReveal().reveal('.btn-join', {
        //     origin: 'left',
        //     duration: 1000,
        //     distance: '25rem',
        //     delay: 300,
        //     // reset: true,
        //     mobile: false
        // });
      }
    }
</script>



<style lang="scss" scoped>

.contact-section{
  padding: 5rem 0;
}

.join-section{
  position: relative;
}

.join-img{
  position: absolute;
  top: -20px;
  left: -5px;
}

.join-title{
  text-transform: uppercase;
  line-height: 1.2;
  font-size: 7rem !important;
  font-weight: 700;
  position: relative;
  z-index: 1;
}

.join-subtitle{
  font-family: 'BebasNeue-Book', sans-serif;
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 200;
}

@media only screen and (max-width: 600px) {
  .contact-section{
    .row{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .join-section{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .anm-left{
      display: none;
    }

    .join-img{
      display: none;
    }

    .join-title{
      font-size: 6rem !important;
      // line-height: 3rem;
      text-align: center;
    }

    .join-subtitle{
      font-size: 2rem;
    }

    .btn-join{
      width: 100%;
      padding: 2rem 1rem !important; 
      font-size: 1rem !important;
    }

    .content-img{
      width: 200px;
      height: 200px;
    }
  }
}

</style>