<template>
<div style="overflow: hidden;">
    <div class="principal d-flex">
        <div class="PSide">
            <SideMenu />
        </div>
        <div class="PContainer">
            <NuxtPage />
        </div>
        <div class="menubaixo pa-5 ">
            <ul class="bg-green  pa-5 d-flex justify-space-between align-center">
                <li>
                    <nuxt-link to="/">Inicio</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/plantacao/selecao">Processos</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/vendas/provincias">Venda</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.menubaixo {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    ul {
        margin: auto;
        width: 100%;
        list-style: none;
        border-radius: 18px;
        box-shadow: 0 0 5px #ccc;

        li {
            a {
                color: #fff;
            }
        }
    }
}

.principal {
    display: grid;
    grid-template-columns: .3fr .7fr;
    min-height: 700px;
    height: 100vh;
    overflow: hidden;
}

.PSide {
    width: 350px;
}

.PContainer {
    width: 100%;
    overflow-y: scroll;
}

a {
    text-decoration: none;
}

@media (max-width: 1050px) {
    .principal {
        grid-template-columns: 1fr;
    }

    .PSide {
        width: 0;
    }
}
</style>
