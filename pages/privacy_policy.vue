<template>
    <div>
        <h1>{{ $t('sections.contact.privacy_policy') }}</h1>
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
                pdfUrl: '/NOTT_APP_KULLANICI_SÖZLEŞMESİ.pdf'
            }
        }
    }
</script>

<style lang="scss" scoped>
  strong {
    font-family: 'BebasNeue-Book', sans-serif;
    font-size: 2rem;
  }

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