// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-icon',],
    css: ['vuetify/styles', '~/assets/css/main.sass', '~/assets/css/menu.scss', '~/assets/css/font/metropolis/metropolis.css'],
    build: {
        transpile: ['vuetify']
    },
    plugins: [
        '~/plugins/axios.js'
    ],
})
