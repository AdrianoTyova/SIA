<template>
<v-row justify="center">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ props }">
            <v-btn color="green" v-bind="props" class="mt-3">
                Detalhes
            </v-btn>
        </template>
        <v-card>
            <v-card-text class="pa-0">
                <div class="PaiImg d-flex justify-space-between flex-column pa-0">
                    <div class="imgProdutoModal" :style="verImg()">
                    </div>
                    <div class="legendaProdutoModal pa-5">
                        <div>
                            <h1 class="text-green text-center">{{ transporte.descricao }}</h1>
                            <p class="text-center">Angola - Huila - Humpata - Rua 11 de Novembro</p>
                            <p class="text-grey-darken-2 text-center">Semente de otima qualidade e com resultados surpreendentes</p>
                            <p class="text-grey-darken-2 text-center">Preço da Cebola: 20.000Kz - 100Kg</p>
                        </div>
                        <ModalTransportePay :transporte="transporte" />
                    </div>
                </div>
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
import Swal from "sweetalert2"
export default {
    props: {
        transporte: Object
    },

    data: () => ({
        dialog: false,
    }),
    methods: {
        verImg() {
            return `background-image: url(${this.transporte.img})`
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
</style>
