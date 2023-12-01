<template>
    <div class="supporter-section">
     <div class="d-flex align-center justify-left">
      <h1 class="text-uppercase">Supporters of</h1>
      <div class="ml-3 mb-3">
        <v-img :src="require('~/assets/images/logo/nott-dark.svg')" class="supporter-section-img" contain />
      </div>
     </div>
     <div class="d-flex align-center justify-center">
        <v-img :src="require('~/assets/images/supporters/eccording.svg')" contain class="supporter-images" />
        <v-img :src="require('~/assets/images/supporters/itu.svg')" contain class="supporter-images" />
     </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

.supporter-section-img{
    width: 100px;
    height: 100px;
}

.supporter-images {
    width: 200px;
    height: 200px;
    margin: 0 2rem;
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
            width: 125px;
            height: 125px;
            margin: 0 1rem;
        }
        
    }
}

</style>