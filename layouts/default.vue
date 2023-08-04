<template>
    <div ref="container">
        <div @click="toggleMenu()" ref="fadeContet" id="fade-content" class="fade-content"></div>
        <div id="nav-bar" ref="navBar" class="nav-bar row">
            <table>
                <tr>
                    <td class="mobile"><button class="btn" @click="toggleMenu()"><i class="material-icons">menu</i></button>
                    </td>
                    <td width="100%">
                        <form action="#">
                            <input id="pesquisa" type="search" placeholder="Pesquisa...">
                        </form>
                    </td>
                    <td><button class="btn transparent"><v-icon icon="notifications" /></button></td>
                    <td><button class="btn transparent"><v-icon icon="settings" /></button></td>
                </tr>
            </table>
        </div>
        <div class="main">
            <div id="menu" ref="menu" class="side-bar white">
                <ul>
                    <li class="item"><a href="#" @click="toggleMenu()" class="logo"><img src="/logo-icon.png" alt=""></a>
                    </li>

                    <li v-for="m, index in menus" :key="index" :to="m.to" class="item">
                        <nuxt-link :to="m.to"
                            @click="toggleMenu()" class="link" :class="$route.path === m.to ? 'active' : ''">
                            <v-icon :icon="m.icon" />
                            <span>{{ m.descricao }}</span>
                        </nuxt-link></li>

                </ul>
            </div>
            <div class="content">
                <NuxtPage />
            </div>
        </div>
    </div>

    
</template>
    
<script>
export default {

    mounted() {
        this.toggleMenu()
        window.addEventListener('resize', this.resize)
        this.resize()
    },

    data: () => ({
        largura: 1080,
        menus: [{
            icon: "dashboard",
            classe: "material-icons",
            descricao: "Dashboard",
            to: "/"
        },
        {
            icon: "home",
            classe: "material-icons",
            descricao: "Fazendas",
            to: "/marketplace"
        },
        {
            icon: "chat",
            classe: "material-icons",
            descricao: "Gráficos",
            to: "/marketplaceS"
        },
        {
            icon: "person",
            classe: "material-icons",
            descricao: "Perfil",
            to: "/marketplaceS"
        },
        // {
        //     icon: "credit_score",
        //     classe: "material-icons",
        //     descricao: "Financiamento",
        //     to: "/financiamento"
        // },
        // {
        //     icon: "local_shipping",
        //     classe: "material-icons-outlined",
        //     descricao: "Escoamento",
        //     to: "/escoamento"
        // },
        // {
        //     icon: "store",
        //     classe: "material-icons",
        //     descricao: "Market Place",
        //     to: "/marketplace"
        // },
        // {
        //     icon: "storefront",
        //     classe: "material-icons",
        //     descricao: "Venda",
        //     to: "/vendas"
        // },
        // {
        //     icon: "inventory",
        //     classe: "material-icons",
        //     descricao: "Gestão",
        //     to: "/gestao"
        // },
        // {
        //     icon: "receipt_long",
        //     classe: "material-icons",
        //     descricao: "Relatorios",
        //     to: "/relatorios"
        // },
        ]
    }),
    methods: {
        resize() {
            let container = window.innerWidth;
            console.log("largura " + container)
            if (container > 700) {
                let largMenu = this.$refs.menu.offsetWidth;
                let LARG = container - largMenu + 1;
                this.$refs.navBar.style.width = LARG + 'px';
            } else {
                let LARG = container;
                this.$refs.navBar.style.width = LARG + 'px';
            }

        },
        toggleMenu() {
            this.$refs.menu.classList.toggle("show");
            this.$refs.fadeContet.classList.toggle("show");
        }
    }
}
</script>