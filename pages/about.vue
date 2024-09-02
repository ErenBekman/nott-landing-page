<template>
   <v-row>
      <v-col cols="12">
        <h2>{{ $t('about.title') }}</h2>
        <p class="description">{{ $t('about.description') }}</p>
      </v-col>

      <v-col cols="12">
        <h2>{{ $t('about.mission') }}</h2>
        <p class="description">{{ $t('about.mission_description') }}</p>
      </v-col>
    
      <v-col cols="12">
        <h2>{{ $t('about.vision') }}</h2>
        <p class="description">{{ $t('about.vision_description') }}</p>
      </v-col>

      <v-col cols="12">
        <h2>{{ $t('about.features.title') }}</h2>
        <v-card dense v-for="(item, i) in 5" :key="i">
            <v-card-text class="mt-5">
              <h2>{{ $t(`about.features.${i+1}.title`) }}</h2>
              <div class="description">{{ $t(`about.features.${i+1}.description`) }}</div>
            </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </template>
  
  <script>
    export default {  
    }
  </script>
  
  <style lang="scss" scoped>

  .description {
    font-family: 'BebasNeue-Book', sans-serif;
    font-size: 1.5rem;
  }
  </style>