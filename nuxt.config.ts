import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'app/',
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-04-29',
})
