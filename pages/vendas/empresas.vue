<template>
<div>
    <h1 class="text-center text-green mt-10">Empresas - Luanda - Cebola</h1>
    <div class="avo">
        <div class="pai">
            <div class="filho"  v-for="empresa, index in empresas" :key="index">
                <v-card class="mx-auto" max-width="344">
                    <v-img src="/img/provincias/Luanda.jpeg" height="200px" cover></v-img>

                    <v-card-title>
                        {{ empresa.descricao }}
                    </v-card-title>

                    <v-card-subtitle>
                        Talatona
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="green-lighten-2" variant="text">
                            Detalhes
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="empresas[index].show = !empresa.show"></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="empresa.show">
                            <v-divider></v-divider>

                            <v-card-text>
                                A cebola valorizou 15% em 3 dias o preço atual de 20Kg é: 30.000kz
                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data: () => ({
        show: false,
        empresas: [{
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },
            {
                img: ",",
                descricao: "Fert Angola",
                show: false
            },

        ]
    }),
}
</script>

<style lang="scss" scoped>
.avo{
    padding: 20px;
    .pai{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
}
</style>

