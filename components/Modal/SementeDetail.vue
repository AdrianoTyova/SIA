<template>
<v-row justify="center">
    <v-dialog v-model="dialog" width="800">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" variant="" class="text-white">
                Detalhes
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <v-container>
                    <div class="divPaiSemen d-flex justify-space-between">
                        <div class="imgProdutoModal" :style="verImg()">
                        </div>
                        <div class="legendaProdutoModal">
                            <div>
                                <div class="QuebraLetra d-flex justify-space-between align-center pr-4">
                                    <h1 class="H1LetraSemente text-green">{{ produto.descricao }}</h1>
                                    <span class="preco">20.000Kz</span>
                                </div>
                                <p class="text-grey-darken-2">Semente de otima qualidade e com resultados surpreendentes</p>
                                <p>Empresa: FertiAngol</p>
                                <p>Angola - Huila - Humpata - Rua 11 de Novembro</p>
                            </div>
                            <v-btn elevation="4" rounded color="green" class="mt-8 mx-auto" width="300">Comprar</v-btn>
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
                img: "/img/produtos/cenoura.jpeg",
                descricao: "Cenoura",
            },
            {
                img: "/img/produtos/batata.jpeg",
                descricao: "Batata",
            },
            {
                img: "/img/produtos/cebola.jpeg",
                descricao: "Cebola",
            },
            {
                img: "/img/produtos/tomate.jpeg",
                descricao: "Tomate",
            },
        ]
    }),
    methods: {
        verImg() {
            return `background-image: url(${this.produto.img})`
        },
        comprar(){
            
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

.H1LetraSemente{
    font-size: 20px;
}
.legendaProdutoModal{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .preco{
        font-size: 22px;
        font-weight: bold;
    }
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
                height: 250px;
                box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);
                border-radius: 10px;
                margin: auto;

                .produtosImg {
                    width: 100%;
                    height: 150px;
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

@media (max-width: 660px){ 
    .divPaiSemen{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .imgProdutoModal{
        margin-bottom: 30px;
    }
}
@media (max-width: 450px){ 
    .QuebraLetra{
        flex-direction: column;
    }
}
</style>
