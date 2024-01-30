<template>
  <div class="error-page">
    <h1 v-if="error.statusCode === 404"> 
      <v-img :src="require('~/assets/images/logo/nott-dark.svg')" class="error-img" contain />
        {{ pageNotFound }}  
      </h1>
      <h1 v-else> {{ otherError }} </h1>
      <nuxt-link to="/"> Home page </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return { title }
  }
}
</script>

<style scoped>

.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.error-img {
  width: 100px;
  height: 100px;
  text-align: center;
  margin: auto;
}

</style>
