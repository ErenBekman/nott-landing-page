<template>
   <div class="faq-section">
        <h1 class="text-uppercase faq-title">
            {{ $t('faq.title') }} <span class="faq-subtitle">{{ $t('faq.subtitle') }} </span>
            <span class="emoji" role="img" aria-label="emoji"> 💡 </span>
        </h1>
        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item,i) in items" :key="i" class="rounded-sm">
                <v-expansion-panel-header>
                    {{ item.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    {{ item.subtitle }}
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        id: 1,
                        title: this.$t("faq.1.title"),
                        subtitle: this.$t("faq.1.subtitle"),
                    },
                    {
                        id: 2,
                        title: this.$t("faq.2.title"),
                        subtitle: this.$t("faq.2.subtitle"),
                    },
                    {
                        id: 3,
                        title: this.$t("faq.3.title"),
                        subtitle: this.$t("faq.3.subtitle"),
                    },
                    {
                        id: 4,
                        title: this.$t("faq.4.title"),
                        subtitle: this.$t("faq.4.subtitle"),
                    },
                    {
                        id: 5,
                        title: this.$t("faq.5.title"),
                        subtitle: this.$t("faq.5.subtitle"),
                    },
                    {
                        id: 6,
                        title: this.$t("faq.6.title"),
                        subtitle: this.$t("faq.6.subtitle"),
                    },
                    {
                        id: 7,
                        title: this.$t("faq.7.title"),
                        subtitle: this.$t("faq.7.subtitle"),
                    },
                    {
                        id: 8,
                        title: this.$t("faq.8.title"),
                        subtitle: this.$t("faq.8.subtitle"),
                    },
                    {
                        id: 9,
                        title: this.$t("faq.9.title"),
                        subtitle: this.$t("faq.9.subtitle"),
                    },
                    {
                        id: 10,
                        title: this.$t("faq.10.title"),
                        subtitle: this.$t("faq.10.subtitle"),
                    },
                    {
                        id: 11,
                        title: this.$t("faq.11.title"),
                        subtitle: this.$t("faq.11.subtitle"),
                    },
                ],
            }
        },
    }
</script>

<style lang="scss">

.faq-section {
    text-align: center;
    margin-top: 5rem;
}

.v-expansion-panel-header {
    font-family: 'Inter', sans-serif !important;
    font-size: 1.2rem;
    font-weight: 400 !important;
}

.v-expansion-panel-content__wrap {
    font-family: 'Inter', sans-serif !important;
    font-size: 1rem;
    font-weight: 200 !important;
    text-align: left;
}

.faq-title {
    font-size: 2.5rem;
}

.faq-subtitle{
    background: linear-gradient(90deg, #B2EA09 0%, #c1ff02 100%); 
    -webkit-background-clip: text; 
    -webkit-text-fill-color: transparent; 
}

@media only screen and (max-width: 600px) {
    .faq-section{
        h1{
            font-size: 2rem;
        }

        .faq-subtitle{
            font-size: 2rem;
        }

        .emoji {
            display: none;
        }
    }
}


</style>