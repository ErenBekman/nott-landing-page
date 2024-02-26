<template>
  <div>
    <MainSection />
    <SupporterSection class="mt-4" />
    <WhySection />
    <EnvoySection />
    <FaqSection />
    <ContactSection />
  </div>
</template>

<script>
  export default {
    components: {
      MainSection: () => import("@/components/section/Main"),
      ContactSection: () => import("@/components/section/Contact"),
      SupporterSection: () => import("@/components/section/Supporter"),
      WhySection: () => import("@/components/section/Why"),
      FaqSection: () => import("@/components/section/Faq"),
      EnvoySection: () => import("@/components/section/Envoy"),
    },
    head() {
      const title = `Nott - Nott App`;
      const description = `100% Trusted, Search, Find, Sell Notes.`;
      return {
        title,
        meta: [{ hid: "description", name: "description", content: description }],
      };
  },

  }
</script>

<style lang="scss" scoped>
</style>