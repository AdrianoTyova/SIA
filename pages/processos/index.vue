<template>
<div>
    <div class="d-flex justify-space-around align-center mt-8">
        <h1 class="text-green">Processo Evolutivo</h1>
        <nuxt-link to="/vendas/provincias">
            <v-btn small elevation="3" color="green">Vender</v-btn>
        </nuxt-link>
    </div>
    <v-card class="pa-10 ma-10" elevation="0">
        <v-timeline align="start">
            <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
                <v-card>
                    <v-card-title :class="['text-h6', `bg-${item.color}`]">
                        {{ item.titulo }}
                    </v-card-title>
                    <v-card-text class="bg-white text--primary">
                        <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                        <v-btn :color="item.color" variant="outlined">
                            Button
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                color: 'red-lighten-2',
                icon: 'mdi-star',
                titulo: "Materiais"
            },
            {
                color: 'brown-darken-2',
                icon: 'mdi-book-variant',
                titulo: "Terra"

            },
            {
                color: 'blue-darken-3',
                icon: 'mdi-airballoon',
                titulo: "Agua"

            },
            {
                color: 'green-lighten-1',
                icon: 'mdi-layers-triple',
                titulo: "Fertilizantes"

            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Pulverização"

            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Adubação"


            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Colheita"
            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Armazenamento"
            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Embalagem"
            },
        ],
    }),
}
</script>
<style>
a{
    text-decoration: none;
}
</style>