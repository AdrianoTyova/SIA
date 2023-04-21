// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/styles', "~/assets/css/main.sass"],
    build:{
        transpile: ['vuetify']
    }
})
