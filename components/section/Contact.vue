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
            <h1 class="join-subtitle">Save Money,</h1> 
            <h1 class="join-subtitle">Boost Your Grades.</h1>

            <a href="https://nott.academy/" target="_blank">
              <v-btn  class="btn-join mt-2">
                <span>Join the club</span>
              </v-btn>
            </a>

            <div class="d-flex align-center justify-start mt-5">
              <a href="https://www.instagram.com/nott.academy/" target="_blank">
                <v-btn small icon color="#c1ff02" @click="">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
              </a>
              <a href="https://linkedin.com/company/nottacademy/" target="_blank">
                <v-btn small icon color="#c1ff02">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </a>
              <v-btn small icon color="#c1ff02" @click="sendEmail">
                <v-icon>mdi-email</v-icon>
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
        VueScrollReveal().reveal('.btn-join', {
            origin: 'left',
            duration: 1000,
            distance: '25rem',
            delay: 300,
            // reset: true,
        });
      }
    }
</script>



<style lang="scss" scoped>
</style>