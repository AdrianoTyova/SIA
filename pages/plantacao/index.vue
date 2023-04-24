<template>
<div class="plantacao">
    <div class="divCimaPai">
        <div class="img"></div>
        <div class="dados">
            <div class="Dados1">
                <div class="d-flex justify-space-between align-center">
                    <div>
                        <h1>Hoje Quarta-feira</h1>
                        <p class="text-white">Humpata - 17ºC</p>
                    </div>
                    <div>ol</div>
                </div>
            </div>
            <div class="Dados2">
                <div class="d-flex justify-center flex-column text-center">
                    <h2>25 <span>ºC</span></h2>
                    <h3>Temperatura</h3>
                    <p>Média semanal</p>
                </div>
            </div>
            <div class="Dados3">
                <div class="d-flex justify-center flex-column text-center">
                    <h2>20</h2>
                    <h3>Hectares</h3>
                    <p>para cultivo</p>
                </div>
            </div>
            <div class="Dados4">
                <div class="d-flex justify-center flex-column text-center">
                    <h2>16</h2>
                    <h3>Trabalhadores</h3>
                    <p>Ativos</p>
                </div>
            </div>
            <div class="Dados5">
                <div class="d-flex justify-center flex-column text-center">
                    <h2>5</h2>
                    <h3>Produtos</h3>
                    <p>Em plantação</p>
                </div>
            </div>
        </div>
    </div>
    <div class="recomendados">
        <div class="d-flex justify-space-around align-center">
            <h1 class="text-green">Produtos Recomendados</h1>
            <nuxt-link to="/plantacao/selecao">
                <v-btn small elevation="3" color="green">Iniciar Plantação</v-btn>
            </nuxt-link>
        </div>
        <div class="produtosAvo d-flex justify-center align-center">
            <div class="produtosPai pt-8">
                <div class="produtosFilho" v-for="produto, index in produtos" :key="index">
                    <div class="produtosImg" :style="verImg(produto.img)">
                    </div>
                    <div class="produtoslegenda">
                        <div class="DivHr"></div>
                        <h2 class="text-green text-center">{{ produto.descricao }}</h2>
                        <ModalLojaSemente :produto="produto" />
                    </div>
                </div>
            </div>
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
            {
                img: "/img/produtos/couve.jpeg",
                descricao: "Couve",
            },
            {
                img: "/img/produtos/Repolho.jpeg",
                descricao: "Repolho",
            },
            {
                img: "/img/produtos/SementeBatata4.jpeg",
                descricao: "Batata",
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
.plantacao {
    padding: 10px;

    .divCimaPai {
        margin: 20px;
        border-radius: 20px;
        margin: auto;
        display: grid;
        grid-template-columns: .6fr .4fr;
        margin-top: 100px;

        >.img {
            height: 400px;
            border-radius: 10px;
            background: url('/img/fazendas/fazenda.webp') no-repeat center;
            background-size: cover;
        }

        >.dados {
            width: 100%;
            height: 400px;
            background-color: #fff;
            margin: auto;
            padding: 0 20px;
            border-radius: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 'a a'
                'b c'
                'd e';
            gap: 20px;

            >div {
                box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.3);
                border-radius: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 10px;

                h2 {
                    font-size: 30px;
                    color: #43A047;
                    span{
                        font-size: 14px;
                    }
                }
                h3{
                    font-size: 16px;
                    color: #555;
                }
                p{
                    font-size: 14px;
                    color: #aaa;
                }
            }

            .Dados1 {
                grid-area: a;
                background-image: linear-gradient(45deg, #43A047, #81C784);

                >div {
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    padding: 0 10px;

                    h1 {
                        font-size: 14px;
                    }

                    p {
                        font-size: 23px;
                    }
                }
            }

            .Dados2 {
                grid-area: b;
            }

            .Dados3 {
                grid-area: c;
            }

            .Dados4 {
                grid-area: d;
            }

            .Dados5 {
                grid-area: e;
            }

        }
    }

    .recomendados {
        margin-top: 40px;

        .produtosAvo {
            .produtosPai {
                width: 90%;
                height: 400px;
                margin: auto;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 20px 10px;
                margin-bottom: 300px;

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
}
</style>
