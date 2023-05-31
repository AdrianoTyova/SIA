<template>
<v-row justify="center">
    <v-dialog v-model="dialog" width="1200">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" elevation="4" rounded color="green" class="mt-8 mx-auto">Solicitar Transporte</v-btn>
        </template>
        <v-card>
            <v-card-title class="bg-green pa-4">
                <h1 class="H1TituloTrans text-white text-center">Escolha o seu transporte</h1>
            </v-card-title>
            <v-card-text class="pa-0">
                <div class="PaiImg d-flex justify-space-between flex-column pa-0">
                    <div class="legendaProdutoModal pa-5">
                        <div>
                            <p class="text-center">Esta é a lista de transporte ideal para a sua mercadoria</p>
                        </div>
                        <div class="produtosAvo d-flex justify-center align-center">
                            <div class="produtosPai pt-8">
                                <div class="produtosFilho" v-for="produto, index in produtos" :key="index">
                                    <div class="produtosImg" :style="verImg(produto.img)">
                                    </div>
                                    <div class="produtoslegenda">
                                        <div class="DivHr"></div>
                                        <h2 class="text-green text-center">{{ produto.descricao }}</h2>
                                        <ModalTransporteDetail :transporte="produto" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Fechar
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import Swal from "sweetalert2"
export default {
    data: () => ({
        dialog: false,
        produtos: [{
                img: "/img/carros/fuso.jpg",
                descricao: "Fuso",
            },
            {
                img: "/img/carros/izuzu.jpeg",
                descricao: "Izuzu",
            },
            {
                img: "/img/carros/iz.jpeg",
                descricao: "Izuzu",
            },
            {
                img: "/img/carros/hilux.jpeg",
                descricao: "Hilux",
            },
            {
                img: "/img/carros/m.jpeg",
                descricao: "Mitsubishi",
            },
            {
                img: "/img/carros/l200.jpeg",
                descricao: "L 200",
            },
            {
                img: "/img/carros/mit.jpeg",
                descricao: "Carrinha",
            },
            {
                img: "/img/carros/carro.png",
                descricao: "Carrinha",
            },
        ]
    }),
    methods: {
        verImg(img) {
            return `background-image: url(${img})`
        },
        vender() {
            Swal.fire({
                title: "Deseja Transporte?",
                text: "Vamos enviar um transporte para a sua mercadoria",
                icon: "info"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.PaiImg {
    width: 100%;
}
.H1TituloTrans{
    font-size: 20px;
}
.imgProdutoModal {
    width: 100%;
    height: 300px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.legendaProdutoModal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .preco {
        font-size: 22px;
        font-weight: bold;
    }
}

.produtosAvo {
    width: 100%;

    .produtosPai {
        width: 90%;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px 10px;
        margin-bottom: 50px;

        .produtosFilho {
            width: 250px;
            height: 250px;
            box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);
            border-radius: 10px;
            margin: auto;

            .produtosImg {
                width: 100%;
                height: 150px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
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

@media (max-width: 1200px) {
    .produtosAvo {

        .produtosPai {
            width: 100%;
            grid-template-columns: 1fr 1fr 1fr;

        }
    }
}

@media (max-width: 860px) {
    .produtosAvo {

        .produtosPai {
            width: 100%;
            grid-template-columns: 1fr 1fr;

        }
    }
}

@media (max-width: 600px) {
    .produtosAvo {
        .produtosPai {
            grid-template-columns: 1fr 1fr;

            .produtosFilho {
                width: 200px;
                height: 250px;

            }

        }
    }
}

@media (max-width: 500px) {
    .produtosAvo {
        .produtosPai {
            grid-template-columns: 1fr;

            .produtosFilho {
                width: 300px;
                height: 250px;
            }

        }
    }
}

@media (max-width: 390px) {
    .produtosAvo {
        .produtosPai {
            grid-template-columns: 1fr;

            .produtosFilho {
                width: 100%;
                height: 250px;
            }

        }
    }
}
</style>
