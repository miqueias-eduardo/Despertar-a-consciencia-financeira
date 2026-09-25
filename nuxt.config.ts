export default defineNuxtConfig({
  compatibilityDate: '2026-09-15',

  devtools: {
    enabled: true
  },

  css: [
    '~/assets/styles/global.css',
    '~/assets/styles/modules.css',
    '~/assets/styles/video.css'
  ],

  runtimeConfig: {
    resendApiKey: ''
  }
})
