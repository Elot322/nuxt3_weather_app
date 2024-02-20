export default defineNuxtConfig({
  app: {
    baseURL: '/'
  },
  runtimeConfig: { 
    public: {TOKEN: process.env.TOKEN}, 
  },
  devtools: { enabled: true },
  imports: {
    autoImport: false
  },
  css: ['./assets/global.scss']
})
