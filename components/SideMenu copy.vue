<template>
<div class="sideBar bg-green-lighten-1">
    <h1 class="text-center">SIA</h1>
    <div class="hrDiv"></div>
    <div class="paiUlDiv d-flex justify-center">
        <div class="ulDiv">
            <nuxt-link class="liDiv" v-for="m, index in menu" :key="index" :to="m.to">
                <div class="iconDiv">
                    <v-icon size="large" color="green-darken-2" icon="mdi-domain"></v-icon>
                </div>
                <div class="infoDiv">
                    <p>{{ m.descricao }}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        menu: [{
                icon: "dash",
                descricao: "Dashboard",
                to: "/"
            },
            {
                icon: "dash",
                descricao: "Perfil",
                to: "/perfil"
            },
            {
                icon: "dash",
                descricao: "Financiamento",
                to: "/financiamento"
            },
            {
                icon: "dash",
                descricao: "Escoamento",
                to: "/escoamento"
            },
            {
                icon: "dash",
                descricao: "Market Place",
                to: "/marketplace"
            },
            {
                icon: "dash",
                descricao: "Venda",
                to: "/vendas"
            },
            {
                icon: "dash",
                descricao: "Gestão",
                to: "/gestao"
            },
            {
                icon: "dash",
                descricao: "Relatorios",
                to: "/relatorios"
            },
        ]
    })
}
</script>

<style lang="scss" scoped>
.sideBar {
    width: 100%;
    height: 100%;
    padding: 20px 30px;

    .hrDiv {
        height: 1px;
        background-color: #ccc;
        margin-top: 20px;
    }

    .paiUlDiv {
        height: 100%;

        .ulDiv {
            margin-top: 60px;

            >a {
                color: #fff;
                text-decoration: none;

                .liDiv {
                    margin: 50px 0;
                }

                p {
                    font-size: 19px;
                }
            }
        }
    }
}

@media (max-width: 1050px) {
    .sideBar {
        width: 100%;
        height: 100%;
        padding: 20px 30px;
        display: none;

        .hrDiv {
            height: 1px;
            background-color: #ccc;
            margin-top: 20px;
        }

        .paiUlDiv {
            height: 100%;

            .ulDiv {
                margin-top: 60px;

                >a {
                    color: #fff;
                    text-decoration: none;

                    .liDiv {
                        margin: 50px 0;
                    }

                    p {
                        font-size: 19px;
                    }
                }
            }
        }
    }
}
</style>
