<template>
  <v-app>
    <v-main>
      <Navbar />
      <v-container class="n-container">
        <Nuxt />
      </v-container>
      <notifications position="bottom center" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    Navbar: () => import("@/components/layout/Navbar"),
  }
}
</script>

<style>
  .n-container {
    margin-top: 100px;
    position: relative;
  }
</style>
