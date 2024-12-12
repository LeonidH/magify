// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/icon'],
  css: ['@@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          additionalData: '@use "@@/assets/scss/variables/_global.scss" as *;'
        }
      }
    }
  },
  future: {
    compatibilityVersion: 4
  },
  icon: {
    serverBundle: {
      collections: ['cib', 'fa6-brands'],
    },
    customCollections: [
      {
        prefix: 'custom-icon',
        dir: './assets'
      }
    ]
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-11-25'
})