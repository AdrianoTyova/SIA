<template>
<div class="Selecao pa-10">
    <h1 class="text-center text-green">Escolha a provincia em que deseja vender o seu produto</h1>
    <h2 class="text-center text-grey">Organizamos as provincias diacordo ao local onde o seu produto é mais valorizado</h2>
    <div class="avo">
        <div class="pai">
            <NuxtLink to="/vendas/empresas" class="filho rounded-xl" v-for="produto, index in produtos" :key="index" :style="verImg(produto.img)">
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
                img: "/img/provincias/Luanda.jpeg",
                descricao: "Luanda",
            },
            {
                img: "/img/provincias/Benguela.jpeg",
                descricao: "Benguela",
            },
            {
                img: "/img/provincias/Cunene.jpeg",
                descricao: "Cunene",
            },
            {
                img: "/img/provincias/Namibe.jpeg",
                descricao: "Namibe",
            },
            {
                img: "/img/provincias/Cabinda.jpeg",
                descricao: "Cabinda",
            },
            {
                img: "/img/provincias/huila.jpeg",
                descricao: "Huíla",
            },
            {
                img: "/img/provincias/Zaire.jpeg",
                descricao: "Zaire",
            },
            {
                img: "/img/provincias/Bie.jpeg",
                descricao: "Bié",
            },
            {
                img: "/img/provincias/Huambo.jpeg",
                descricao: "Huambo",
            },
            {
                img: "/img/provincias/LundaNorte.jpg",
                descricao: "Lunda Norte",
            },
            {
                img: "/img/provincias/LundaSul.jpeg",
                descricao: "Lunda Sul",
            },
            {
                img: "/img/provincias/Bengo.jpeg",
                descricao: "Bengo",
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

    h1 {
        font-size: 25px;
    }

    h2 {
        font-size: 20px;
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
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;

            .filho {
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                width: 100%;
                margin: auto;
                border-radius: 20px;
                height: 200px;
                cursor: pointer;
                box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);

                h2 {
                    font-size: 25px;
                }
            }
        }
    }

}

@media (max-width: 900px) {
    .Selecao {
        h1 {
            font-size: 22px;
        }

        h2 {
            font-size: 18px;
        }

        .avo {
            .pai {
                grid-template-columns: repeat(4, 1fr);
            }
        }

    }
}

@media (max-width: 750px) {
    .Selecao {
        h1{
        font-size: 20px;
    }
    h2{
        font-size: 17px;
    }
        .avo {
            .pai {
                grid-template-columns: repeat(3, 1fr);
            }
        }

    }
}

@media (max-width: 620px) {
    .Selecao {
        .avo {
            .pai {
                grid-template-columns: repeat(3, 1fr);

                .filho {
                    height: 150px;

                    h2 {
                        font-size: 20px;
                    }
                }
            }
        }

    }
}

@media (max-width: 470px) {
    .Selecao {
        .avo {
            .pai {
                grid-template-columns: repeat(3, 1fr);

                .filho {
                    height: 100px;

                    h2 {
                        font-size: 18px;
                    }
                }
            }
        }

    }
}

@media (max-width: 420px) {
    .Selecao {
        .avo {
            .pai {
                grid-template-columns: repeat(2, 1fr);

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
