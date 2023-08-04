import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

export default defineNuxtPlugin((nuxt) => {
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'md',
            aliases,
            sets: {
              md,
            },
          },
    })
    
    nuxt.vueApp.use(vuetify);
})