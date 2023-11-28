<template>
    <div class="supporter-section">
     <div class="d-flex align-center justify-left">
      <h1 class="text-uppercase">Supporters of</h1>
      <div class="ml-3 mb-3">
        <v-img :src="require('~/assets/images/logo/nott-dark.svg')" height="100" width="100" contain />
      </div>
     </div>
     <div class="d-flex align-center justify-center">
        <v-img :src="require('~/assets/images/supporters/eccording.svg')" contain width="200" height="200" />
        <v-img :src="require('~/assets/images/supporters/itu.svg')" contain width="200" height="200" />
     </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

</style>