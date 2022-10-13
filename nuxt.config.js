export default {
  head: {
    title: 'membership-web-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/styles/main.css'],
  plugins: [],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/strapi',
    'nuxt-webfontloader',
  ],
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337/api',
  },
  webfontloader: {
    google: {
      families: ['Poppins:300,400,700,900&display=swap'],
    },
  },
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {},
}
