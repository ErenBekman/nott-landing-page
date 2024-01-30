<template>
  <div>
    <MainSection />
    <SupporterSection />
    <WhySection />
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
    },
    head() {
      const title = `Nott - Nott Academy`;
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