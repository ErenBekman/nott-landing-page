<template>
    <div class="why-section">
        <v-card class="card-border" outlined v-for="item in items" :key="item.id">
            <v-card-title class="mt-10">
                <v-img 
                    :src="item.image" 
                    contain 
                    height="200" 
                    width="200" 
                    :class="`img-${item.id}`"
                />
            </v-card-title>
 
            <v-card-text class="d-flex flex-column justify-center align-center why-title">
                <h1 class="text-h2 font-weight-bold text-uppercase" v-text="item.title" />
                <h2 class="text-h4 text-uppercase" v-text="item.subtitle" />
                <p class="text-center mt-5 grey-text">
                    {{ item.description }}
                </p>
            </v-card-text>        
        </v-card>
    </div>
</template>

<script>
import VueScrollReveal from "scrollreveal";
    export default {
        data() {
            return {
                items: [
                {
                    id: 1,
                    image: require('~/assets/images/people/3d-business-man-and-woman-working-with-laptop.png'),
                    title: this.$t('sections.why.what.title'),
                    subtitle: this.$t('sections.why.what.subtitle'),
                    description: this.$t('sections.why.what.description'),
                },
                {
                    id: 2,
                    image: require('~/assets/images/people/3d-business-young-woman-standing-with-laptop.png'),
                    title: this.$t('sections.why.why.title'),
                    subtitle: this.$t('sections.why.why.subtitle'),
                    description: this.$t('sections.why.why.description'),
                },
                {
                    id: 3,
                    image: require('~/assets/images/people/business-3d-three-young-women-with-phones.png'),
                    title: this.$t('sections.why.who.title'),
                    subtitle: this.$t('sections.why.who.subtitle'),
                    description: this.$t('sections.why.who.description'),
                }
            ]
            }
        },
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

.why-section{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:space-between;
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