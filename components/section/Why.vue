<template>
    <div class="why-section">
        <v-card class="card-border" outlined>
            <v-card-title class="mt-10">
                <v-img :src="require('~/assets/images/people/3d-business-man-and-woman-working-with-laptop.png')" contain height="200" width="200" class="img-1" />
            </v-card-title>
 
            <v-card-text class="d-flex flex-column justify-center align-center why-title">
                <h1 class="text-h2 font-weight-bold text-uppercase">What</h1>
                <h2 class="text-h4 text-uppercase">We do</h2>
                <p class="text-center mt-5 grey-text">
                    Nott is a <b> sustainable education platform </b> that facilitates the buying and selling of lecture notes for university students and moves their study processes to digital.
                </p>
            </v-card-text>        
        </v-card>

        <v-card class="card-border" outlined>
            <v-card-title class="mt-10">
                <v-img :src="require('~/assets/images/people/3d-business-young-woman-standing-with-laptop.png')" contain height="200" width="200" class="img-2" />
            </v-card-title>

            <v-card-text class="d-flex flex-column justify-center align-center why-title">
                <h1 class="text-h2 font-weight-bold text-uppercase">Why</h1>
                <h2 class="text-h4 text-uppercase">We do it</h2>
                <p class="text-center mt-5 grey-text">
                    Every year <b > 180,000 trees are sacrificed </b> for notes’ exchanges, that’s why we came up with a more sustainable & digitalized solution.
                </p>
            </v-card-text>
        </v-card>
        
        <v-card class="card-border" outlined>
            <v-card-title class="mt-10">
                <v-img :src="require('~/assets/images/people/business-3d-three-young-women-with-phones.png')" contain height="200" width="200" class="img-3" />
            </v-card-title>

            <v-card-text class="d-flex flex-column justify-center align-center why-title">
                <h1 class="text-h2 font-weight-bold text-uppercase whiter-text">Who</h1>
                <h2 class="text-h4 text-uppercase">We do it for</h2>
                <p class="text-center mt-5 grey-text">
                    For university & college students who wants to sell & buy notes for a better professional future - <b class="whiter-text"> it is for every grade. </b>
                </p>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import VueScrollReveal from "scrollreveal";
    export default {
    mounted() {
        VueScrollReveal().reveal('.img-1', {
            origin: 'left',
            duration: 1000,
            distance: '25rem',
            delay: 300,
            // reset: true,
            mobile: false
        });

        VueScrollReveal().reveal('.img-2', {
            origin: 'bottom',
            duration: 1000,
            distance: '25rem',
            delay: 300,
            // reset: true,
            mobile: false
        });

        VueScrollReveal().reveal('.img-3', {
            origin: 'right',
            duration: 1000,
            distance: '25rem',
            delay: 300,
            // reset: true,
            mobile: false
        });
     },
    }
</script>

<style lang="scss" scoped>

.why-title {
    color: #fff !important;
}

.why-title p{
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 200 !important;
}

.why-title p b {
    font-family: 'Inter', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    // color: yellow;
}

.why-title h2 {
    font-family: 'BebasNeue-Book', sans-serif !important;
    font-size: 3rem !important;
    margin-top: 10px;
}

.whiter-text {
    color: #fff;
}

.grey-text {
    color:#f9f9f9;
    font-weight: 400;
}

@media only screen and (max-width: 600px) {
    .why-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        .card-border{
            border: none !important;
            margin: 1rem 0 !important;
        }

        .img-1, .img-2, .img-3{
            width: 100px;
            height: 100px;
        }

        h1{
            font-size: 1.5rem;
        }

        h2{
            font-size: 1rem;
        }
    }
}
</style>