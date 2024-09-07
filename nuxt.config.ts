export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: true,
    },
  },
  modules: ["@nuxt/eslint"],
});
