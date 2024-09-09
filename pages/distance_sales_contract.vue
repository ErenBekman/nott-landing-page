<template>
    <div>
        <h1>{{ $t('sections.contact.distance_sales_contract') }}</h1>
        <iframe
        :src="pdfUrl"
        class="pdf"
        type="application/pdf"
        >
        Bu PDF'yi görüntüleyemiyorsanız, lütfen dosyayı indirin:
        <a :href="pdfUrl">PDF İndir</a>
        </iframe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pdfUrl: '/NOTT_APP_MESAFELİ_SATIŞ.pdf'
            }
        }
    }
</script>

<style lang="scss" scoped>
.pdf {
    width: 100%;
    height: 1000px;
}

@media only screen and (max-width: 600px) {
    .pdf {
        height: 500px;
    }
}
</style>