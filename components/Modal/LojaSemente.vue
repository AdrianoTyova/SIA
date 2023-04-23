<template>
<v-row justify="center">
    <v-dialog v-model="dialog" width="1024">
        <template v-slot:activator="{ props }">
            <v-btn color="green" v-bind="props" class="mt-3">
                Selecionar
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <v-container>
                    <div class="d-flex justify-space-between">
                        <div class="imgProdutoModal" :style="verImg()">
                        </div>
                        <div class="legendaProdutoModal">
                            <h1 class="text-green">{{ produto.descricao }}</h1>
                            <p class="text-grey-darken-2">Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio</p>
                        </div>
                    </div>
                    <div class="recomendados">
                        <h1 class="text-green text-center">Semententes</h1>
                        <div class="produtosAvo d-flex justify-center align-center">
                            <div class="produtosPai pt-8">
                                <div class="produtosFilho" v-for="produt, index in produtos" :key="index">
                                    <div class="produtosImg" :style="verImg2(produt.img)">
                                    </div>
                                    <div class="produtoslegenda">
                                        <ModalSementeDetail :produto="produt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Fechar
                </v-btn>
                <!-- <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Comprar
                </v-btn> -->
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    props: {
        produto: Object
    },

    data: () => ({
        dialog: false,
        produtos: [{
                img: "/img/produtos/LataTomate.jpeg",
                descricao: "Cenoura",
            },
            {
                img: "/img/produtos/LataTomate2.jpeg",
                descricao: "Batata",
            },
            {
                img: "/img/produtos/SementeTomate5.jpeg",
                descricao: "Cebola",
            },
            {
                img: "/img/produtos/SementeTomate6.jpeg",
                descricao: "Tomate",
            },
        ]
    }),
    methods: {
        verImg() {
            return `background-image: url(${this.produto.img})`
        },
        verImg2(img) {
            return `background-image: url(${img})`
        }
    }
}
</script>

<style lang="scss" scoped>
.imgProdutoModal {
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
}

.recomendados {
    h1 {
        margin-top: -40px;
    }

    .produtosAvo {
        .produtosPai {
            width: 90%;
            height: 400px;
            margin: auto;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 20px 10px;
            margin-bottom: 50px;

            .produtosFilho {
                width: 200px;
                height: 400px;
                box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);
                border-radius: 10px;
                margin: auto;

                .produtosImg {
                    width: 100%;
                    height: 300px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: 80%;
                    border-radius: 10px 10px 0 0;

                }

                .produtoslegenda {
                    height: 100px;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border-radius: 0 0 10px 10px;

                    .DivHr {
                        height: 2px;
                        background-color: #ccc;
                    }
                }

            }
        }

    }
}
</style>
