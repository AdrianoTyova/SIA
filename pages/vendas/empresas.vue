<template>
<div>
    <h1 class="text-center text-green mt-10">Empresas - Luanda - Cebola</h1>
    <div class="avo">
        <div class="pai">
            <div class="filho" v-for="empresa, index in empresas" :key="index">
                <v-card class="mx-auto" max-width="344" elevation="5">
                    <v-img :src="empresa.img" height="200px" cover></v-img>

                    <v-card-title>
                        {{ empresa.descricao }}
                    </v-card-title>

                    <v-card-subtitle>
                        Talatona
                    </v-card-subtitle>

                    <v-card-actions>
                        <ModalEmpresaDetail :empresa="empresa" />

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
                img: "/img/empresas/fetiAngola.png",
                descricao: "FertíAngola",
                show: false
            },
            {
                img: "/img/empresas/carrinho2.jpeg",
                descricao: "Carrinho",
                show: false
            },
            {
                img: "/img/empresas/kero2.jpeg",
                descricao: "Kero",
                show: false
            },
            {
                img: "/img/empresas/agrolider.png",
                descricao: "AgroLider",
                show: false
            },
            {
                img: "/img/empresas/agrotrading.jpeg",
                descricao: "Agrogest",
                show: false
            },
            {
                img: "/img/empresas/hodro.jpeg",
                descricao: "Hidrobem",
                show: false
            },
            {
                img: "/img/empresas/brasa.jpeg",
                descricao: "Brasafrica",
                show: false
            },
            {
                img: "/img/empresas/turi.png",
                descricao: "Turiagro",
                show: false
            },
            {
                img: "/img/provincias/Luanda.jpeg",
                descricao: "AgroLuanda",
                show: false
            },

        ]
    }),
}
</script>

<style lang="scss" scoped>
.avo {
    padding: 20px;

    .pai {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
}

@media (max-width: 1200px) {
    .avo {
        .pai {
            grid-template-columns: repeat(3, 1fr);
        }
    }
}

@media (max-width: 670px) {
    .avo {
        .pai {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media (max-width: 450px) {
    .avo {
        .pai {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
