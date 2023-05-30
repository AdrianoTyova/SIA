<template>
<div class="Selecao pa-10">
    <div class="imgFazenda rounded-xl">
        <div class="sombra pa-10 rounded-xl">
            <h1 class="text-center text-white">Selecione o produto para ver o seu processo evolutivo</h1>
        </div>
    </div>
    <div class="avo">
        <div class="pai">
            <NuxtLink to="/processos" class="filho rounded-xl" v-for="produto, index in produtos" :key="index" :style="verImg(produto.img)">
                <div class="sombra rounded-xl d-flex justify-center align-center">
                    <h2 class="text-center text-white">{{ produto.descricao }}</h2>
                </div>
            </NuxtLink>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
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
            {
                img: "/img/produtos/feijao.jpeg",
                descricao: "Feijão",
            },
        ]
    }),
    methods: {
        verImg(img) {
            return `background-image: url(${img})`
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin sombra() {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.Selecao {
    .sombra {
        @include sombra()
    }

    .imgFazenda {
        width: 100%;
        border-radius: 10px;
        background: url('/img/montanha.jpg') no-repeat center;
        background-size: cover;

    }

    .avo {
        width: 100%;
        margin-top: 30px;

        .pai {
            display: grid;
            margin: auto;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;

            .filho {
                background-repeat: no-repeat;
                background-size: 80%;
                background-position: center;
                width: 100%;
                margin: auto;
                border-radius: 20px;
                height: 200px;
                cursor: pointer;
                box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);

                h2 {
                    font-size: 30px;
                }
            }
        }
    }

}

@media (max-width: 1200px) {
    .Selecao {
        .sombra {
            h1 {
                font-size: 25px;
            }
        }
    }
}

@media (max-width: 700px) {
    .Selecao {
        .avo {
            .pai {
                grid-template-columns: repeat(2, 1fr);

                .filho {
                    height: 200px;

                    h2 {
                        font-size: 25px;
                    }
                }
            }
        }

    }
}

@media (max-width: 420px) {
    .Selecao {
        .sombra {
            h1 {
                font-size: 19px;
            }
        }
        .avo {
            .pai {
                .filho {
                    height: 150px;

                    h2 {
                        font-size: 18px;
                    }
                }
            }
        }

    }
}
</style>
