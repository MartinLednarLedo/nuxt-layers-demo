// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  extends: ["./elements"],
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  typescript: {
    typeCheck: true,
  },
  // When uncommenting new variant on link will be present
  // imports: {
  //   dirs: ["variants"],
  // },
});
