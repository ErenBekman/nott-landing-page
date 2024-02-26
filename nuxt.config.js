import colors from 'vuetify/es5/util/colors';
require("dotenv").config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s",
    title: "Nott - Nott App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "UTF-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
      {
        hid: "description",
        name: "description",
        content: "100% Trusted, Search, Find, Sell Nott.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
  },

  loadingIndicator: {
    name: "folding-cube",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/theme.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/notify", ssr: false },
    { src: "~/plugins/vue-confetti.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n","@nuxtjs/axios"],

  i18n: {
    lazy: true,
    langDir: "lang/",
    locales: [
      {
        code: "en",
        flag: "us",
        english: "English",
        name: "English",
        file: "english.js",
      },
      {
        code: "tr",
        flag: "tr",
        english: "Turkish",
        name: "Türkçe",
        file: "turkish.js",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },

  axios: {
    baseURL: process.env.BASE_URL || "https://api.nott.app/api",
    withCredentials: true,
    credentials: true,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
