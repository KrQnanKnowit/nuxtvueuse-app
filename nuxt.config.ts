// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css:['~/assets/css/main.css'],
    router: {
        options: {
            
        }
    },
    modules: [
        '@vueuse/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        }
    }
})
