<template>
    <div class="supporter-section">
     <div class="d-flex align-center justify-left">
      <h1 class="text-capitalize supporter-title">{{ $t('sections.supporter.title') }}</h1>
      <div class="ml-3 mb-3">
        <v-img :src="require('~/assets/images/logo/nott-dark.svg')" class="supporter-section-img" contain />
      </div>
     </div>
     <div class="supporter-images-container">
        <v-img v-for="supporter in supporters" :key="supporter.id" :src="supporter.img" contain class="supporter-images" />        
     </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                supporters: [
                    {id: 1, img: require('~/assets/images/supporters/eccording.svg') },
                    {id: 2, img: require('~/assets/images/supporters/itu.svg') },
                    {id: 3, img: require('~/assets/images/supporters/aws.svg') },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

.supporter-title {
    font-size: 2.5rem;
}

.supporter-section-img{
    width: 100px;
    height: 100px;
    text-transform: capitalize;
}

.supporter-images-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}


.supporter-images {
    width: 200px;
    height: 200px;
    margin: 0 4rem;
    max-width: 100%;
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

        
    }
}

</style>