import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: 'favicon.ico',
          sizes: 'any'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: 'favicon-96x96.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: 'apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: 'site.webmanifest'
        }
      ]
    }
  },
  modules: ['@nuxt/image']
});