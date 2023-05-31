<template>
<v-row justify="center">
    <v-dialog v-model="dialog" width="940">
        <template v-slot:activator="{ props }">
            <v-btn color="green" v-bind="props" class="mt-3">
                Selecionar
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <v-container>
                    <div class="ImgFundo d-flex justify-space-between">
                        <div class="imgProdutoModal" :style="verImg()">
                        </div>
                        <div class="legendaProdutoModal">
                            <h1 class="text-green">{{ produto.descricao }}</h1>
                            <p class="text-grey-darken-2">Este produto foi escolhido devido a sua facilidade em crecer em tempo de frio</p>
                        </div>
                    </div>
                    <!-- <div class="recomendados">
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
                    </div> -->
                    <div class="recomendados aparecer">
                        <h1 class="text-green text-center">Semententes</h1>
                        <div class="produtosAvo d-flex justify-center align-center apareceDesktop">
                            <div class="produtosPai">
                                <Swiper class="divSwiper ma-auto" :slides-per-view="3" :modules="modules" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange" :freeMode="true" :pagination="{clickable: true,}">
                                    <SwiperSlide v-for="produt, index in produtos" :key="index">
                                        <div class="produtosFilho">
                                            <div class="produtosImg d-flex justify-space-between flex-column" :style="verImg2(produt.img)">
                                                <div class="sombra"></div>
                                                <div class="produtoslegenda">
                                                    <ModalSementeDetail :produto="produt" />
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class="recomendados desaparecer">
                        <h1 class="text-green text-center">Semententes</h1>
                        <div class="produtosAvo d-flex justify-center align-center apareceDesktop">
                            <div class="produtosPai">
                                <Swiper class="divSwiper ma-auto" :slides-per-view="2" :modules="modules" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange" :freeMode="true" :pagination="{clickable: true,}">
                                    <SwiperSlide v-for="produt, index in produtos" :key="index">
                                        <div class="produtosFilho">
                                            <div class="produtosImg d-flex justify-space-between flex-column" :style="verImg2(produt.img)">
                                                <div class="sombra"></div>
                                                <div class="produtoslegenda">
                                                    <ModalSementeDetail :produto="produt" />
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div class="recomendados terceiroap">
                        <h1 class="text-green text-center">Semententes</h1>
                        <div class="produtosAvo d-flex justify-center align-center apareceDesktop">
                            <div class="produtosPai">
                                <Swiper class="divSwiper ma-auto" :slides-per-view="1" :modules="modules" :space-between="10" @swiper="onSwiper" @slideChange="onSlideChange" :freeMode="true" :pagination="{clickable: true,}">
                                    <SwiperSlide v-for="produt, index in produtos" :key="index">
                                        <div class="produtosFilho">
                                            <div class="produtosImg d-flex justify-space-between flex-column" :style="verImg2(produt.img)">
                                                <div class="sombra"></div>
                                                <div class="produtoslegenda">
                                                    <ModalSementeDetail :produto="produt" />
                                                </div>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                </Swiper>
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
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
    FreeMode,
    Pagination
} from 'swiper';
export default {
    props: {
        produto: Object
    },
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [FreeMode, Pagination],
        };
    },

    data: () => ({
        dialog: false,
        produtos: [{
                img: "/img/produtos/LataTomate2.jpeg",
                descricao: "Semente de Tomate",
            },
            {
                img: "/img/produtos/SementeTomate5.jpeg",
                descricao: "Semente de Tomate",
            },
            {
                img: "/img/produtos/SementeTomate6.jpeg",
                descricao: "Semente de Tomate",
            },
            {
                img: "/img/produtos/SementeTomate8.jpeg",
                descricao: "Semente de Tomate",
            },
            {
                img: "/img/produtos/SementeTomate7.jpeg",
                descricao: "Semente de Tomate",
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

.sombra {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 0 0;
}

.desaparecer {
    display: none;
}
.terceiroap{
    display: none;
}

.recomendados {
    width: 100%;

    h1 {
        margin-top: -40px;
    }

    .produtosAvo {
        width: 100%;

        .produtosPai {
            width: 100%;
            height: 400px;
            margin: auto;

            .divSwiper {
                width: 100%;
                height: 370px;
            }

            .produtosFilho {
                width: 250px;
                height: 300px;
                box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);
                border-radius: 10px;
                margin: 20px;
                background-color: #000;

                .produtosImg {
                    width: 100%;
                    height: 300px;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: cover;
                    border-radius: 10px;

                }

                .produtoslegenda {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    border-radius: 0 0 10px 10px;
                    background-color: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(90px);

                    .DivHr {
                        height: 2px;
                        background-color: #ccc;
                    }
                }

            }
        }

    }
}

@media (max-width: 900px) {
    .recomendados {
        .produtosAvo {
            .produtosPai {
                height: 300px;

                .divSwiper {
                    height: 370px;
                }

                .produtosFilho {
                    width: 200px;
                    height: 200px;

                    .produtosImg {
                        height: 200px;
                    }
                }
            }

        }
    }
}

@media (max-width: 730px) {
    .ImgFundo {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .legendaProdutoModal {
        margin-bottom: 50px;
        text-align: center;
    }

    .recomendados {
        .produtosAvo {
            .produtosPai {
                height: 300px;

                .divSwiper {
                    height: 370px;
                }

                .produtosFilho {
                    width: 170px;
                    height: 200px;

                    .produtosImg {
                        height: 200px;
                    }
                }
            }

        }
    }
}

@media(max-width: 700px) {
    .aparecer {
        display: none;
    }

    .desaparecer {
        display: block;
    }
}

@media(max-width: 500px) {
    .desaparecer {
        display: none;
    }
    .terceiroap{
    display: block;
}
}
</style>
