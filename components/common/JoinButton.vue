<template>
    <div>
        <a :href="href" target="_blank">
          <v-btn class="btn-join" @click="openDownload">
            <span>
              {{ download ? $t('global.download_now') : $t('global.join') }}
            </span>
          </v-btn>
        </a>
    </div>
</template>

<script>
    export default {
        props:{
            href:{
                type: String,
                default: "https://app.nott.app/"
            },
            download:{
                type: Boolean,
                default: false
            }
        },
        methods:{
            async openDownload() {
                if (!this.download) {
                    return;
                }
                const response = await this.$axios.$get(`/invite`);

                if (response.success && response.url) {
                    window.open(response.url, '_blank');
                    return;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>