// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },
  googleFonts: {
    families: {
      Outfit: true,
    },
  },
  imports: {
    autoImport: true,
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/robots",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: false,
  },
});