<template>
<div @click="toggleMenu()" id="fade-content" class="fade-content"></div>
    <div id="nav-bar" class="nav-bar row">
        <table>
            <tr>
                <td class="mobile"><button class="btn" @click="toggleMenu()"><i class="material-icons">menu</i></button></td>
                <td width="100%">
                    <form action="#">
                        <input id="pesquisa" type="search" placeholder="Pesquisa...">
                    </form>
                </td>
                <td><button class="btn transparent"><i class="material-icons-outlined"> notifications</i></button></td>
                <td><button class="btn transparent"><i class="material-icons-outlined">settings</i></button></td>
            </tr>
        </table>
    </div>
    <div class="main">
        <div id="menu" class="side-bar white">
            <ul>
                <li class="item"><a href="#" @click="toggleMenu()" class="logo"><img src="/logo-icon.png" alt=""></a></li>

                <li v-for="m, index in menu" :key="index" :to="m.to" class="item"><nuxt-link :to="m.to" @click="toggleMenu()" class="link"><i :class="m.classe">{{ m.icon }}</i><span>{{m.descricao}}</span></nuxt-link></li>
              
            </ul>
        </div>
        <div class="content">
            <h1>Testando a responsividade</h1>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        menu: [{
                icon: "dashboard",
                classe: "material-icons",
                descricao: "Dashboard",
                to: "/"
            },
            {
                icon: "person",
                classe: "material-icons",
                descricao: "Perfil",
                to: "/perfil"
            },
            {
                icon: "credit_score",
                classe: "material-icons",
                descricao: "Financiamento",
                to: "/financiamento"
            },
            {
                icon: "local_shipping",
                classe: "material-icons-outlined",
                descricao: "Escoamento",
                to: "/escoamento"
            },
            {
                icon: "store",
                classe: "material-icons",
                descricao: "Market Place",
                to: "/marketplace"
            },
            {
                icon: "storefront",
                classe: "material-icons",
                descricao: "Venda",
                to: "/vendas"
            },
            {
                icon: "inventory-outlined",
                classe: "material-icons",
                descricao: "Gestão",
                to: "/gestao"
            },
            {
                icon: "receipt_long",
                classe: "material-icons",
                descricao: "Relatorios",
                to: "/relatorios"
            },
        ]
    }),
    methods: {
        toggleMenu(){

        }
    }
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
