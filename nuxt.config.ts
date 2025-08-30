import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  components: ['~/components/UI', '~/components/Layout'],
  composables: ['~/composables'],
  app: {
    head: {
      title: "Calm Land | Your Quiet Space",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Omar Hossam" },
        { name: "description", content: "Calm Land, Your Peace Space to share your thought with the world" },
      ],
      link: [
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/fontawesome.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/solid.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/brands.min.css" },
      ],
    }
  },
  nitro: {
    storage: {
      db: {
        driver: 'fs',
        base: './.data/db'
      }
    },
    experimental: {
      database: true
    }
  },
})
