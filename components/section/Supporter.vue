<template>
    <div class="supporter-section">
     <div class="d-flex align-center justify-left">
      <h1 class="supporter-title">
        {{ $t('sections.supporter.title') }}
      </h1>
      <div class="supporter-section-container">
        <v-img 
            :src="require('~/assets/images/logo/nott-dark.svg')" 
            class="supporter-section-img" 
            contain 
        />
      </div>
     </div>
     <div class="supporter-images-container">
        <v-img 
            v-for="supporter in supporters" 
            :key="supporter.id" 
            :src="supporter.img" 
            class="supporter-images"
            @click="goToSupporter(supporter.link)"
            contain 
        />        
     </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                supporters: [
                    {id: 1, img: require('~/assets/images/supporters/eccording.svg'), link: 'https://ecording.org/en/' },
                    {id: 2, img: require('~/assets/images/supporters/itu.svg'), link: 'https://itucekirdek.com/' },
                    {id: 3, img: require('~/assets/images/supporters/aws.svg'), link: 'https://aws.amazon.com/' },
                ]
            }
        },
        methods: {
            goToSupporter(link){
                window.open(link, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>

.supporter-section {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    @media only screen and (max-width: 600px) {
        margin-top: 4rem !important;
    }
}

.supporter-title {
    font-size: 3rem;
}

.supporter-section-img{
    width: 100px;
    height: 100px;
}

.supporter-section-container{
    margin: 0 0 20px 10px;
}

.supporter-images-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}


.supporter-images {
    width: 200px;
    height: 125px;
    margin: 5px;
    // margin: 0 4rem;
    max-width: 100%;

    &:hover{
        transform: scale(1.1);
    }
}

@media only screen and (max-width: 600px) {
    .supporter-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 5rem;
        

        h1{
            font-size: 1.5rem;
        }

        .supporter-images{
            width: 100%;
            height: 125px;
            margin: 2rem auto;
        }

        .supporter-images-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
        }

        .supporter-title {
           font-size: 2rem;
        }
        
        .supporter-section-container{
           margin: 0 0 25px 10px;
        }
    }
}

</style>