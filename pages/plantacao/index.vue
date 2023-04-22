<template>
<div class="plantacao">
    <div class="divCimaPai">
        <div class="img"></div>
        <div class="dados">
            <h1>Informações da Fazenda</h1>
        </div>
    </div>
    <div class="recomendados">
        <h1 class="text-green text-center">Produtos Recomendados</h1>
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
        width: 95%;
        margin: 20px;
        border-radius: 20px;
        margin: auto;
        display: flex;
        flex-direction: column;

        >.img {
            width: 100%;
            height: 300px;
            border-radius: 10px;
            background: url('/img/montanha.jpg') no-repeat center;
            background-size: cover;
        }

        >.dados {
            width: 90%;
            background-color: #fff;
            height: 400px;
            margin: auto;
            padding: 20px;
            transform: translateY(-100px);
            border-radius: 10px;
            box-shadow: 0 0 15px hsla(0, 0%, 0%, 0.3);
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
