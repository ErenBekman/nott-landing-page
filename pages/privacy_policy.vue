<template>
    <div>
        <!-- <p>
          <strong>{{ $t('privacy_policy.effective_date') }}</strong><br> {{ $t('privacy_policy.description') }}
          <br><strong>{{ $t('privacy_policy.we_collect_information') }}</strong><br> {{ $t('privacy_policy.we_collect_information_details') }}
          <br><strong>{{ $t('privacy_policy.personal_information') }}:</strong><br> {{ $t('privacy_policy.personal_information_details') }}
          <br><strong>{{ $t('privacy_policy.login_information') }}:</strong><br> {{ $t('privacy_policy.login_information_details') }}
          <br><strong>{{ $t('privacy_policy.transaction_information') }}:</strong><br> {{ $t('privacy_policy.transaction_information_details') }}
          <br><strong>{{ $t('privacy_policy.user_generated_content') }}:</strong><br> {{ $t('privacy_policy.user_generated_content_details') }}
          <br><strong>{{ $t('privacy_policy.how_we_use_information') }}</strong>
          <br><strong>{{ $t('privacy_policy.personalization') }}:</strong><br> {{ $t('privacy_policy.personalization_details') }}
          <br><strong>{{ $t('privacy_policy.transaction_processing') }}:</strong><br> {{ $t('privacy_policy.transaction_processing_details') }}
          <br><strong>{{ $t('privacy_policy.communication') }}:</strong><br> {{ $t('privacy_policy.communication_details') }}
          <br><strong>{{ $t('privacy_policy.data_sharing') }}:</strong><br> {{ $t('privacy_policy.data_sharing_details') }}
          <br><strong>{{ $t('privacy_policy.user_responsibility') }}</strong>
          <br><strong>{{ $t('privacy_policy.note_ownership') }}:</strong><br> {{ $t('privacy_policy.note_ownership_details') }}
          <br><strong>{{ $t('privacy_policy.prohibited_activities') }}:</strong><br> {{ $t('privacy_policy.prohibited_activities_details') }}
          <br><strong>{{ $t('privacy_policy.advertising') }}:</strong><br> {{ $t('privacy_policy.advertising_details') }}
          <br><strong>{{ $t('privacy_policy.data_security') }}:</strong><br> {{ $t('privacy_policy.data_security_details') }}
          <br><strong>{{ $t('privacy_policy.changes_to_policy') }}:</strong><br> {{ $t('privacy_policy.changes_to_policy_details') }}
          <br><strong>{{ $t('privacy_policy.contact_us') }}</strong><br> {{ $t('privacy_policy.contact_us_details') }}          
        </p> -->
    
        <h1>{{ $t('sections.contact.privacy_policy') }}</h1>
        <iframe
          :src="pdfUrl"
          width="100%"
          height="1000px"
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
</style>