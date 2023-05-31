<template>
<div>
    <div class="d-flex justify-space-around align-center mt-8">
        <h1 class="text-green H1TituloProcessos">Processo Evolutivo</h1>
        <nuxt-link to="/vendas/provincias">
            <v-btn small elevation="3" color="green">Vender</v-btn>
        </nuxt-link>
    </div>
    <v-card class="pa-5 aparecerDesktop" elevation="0">
        <v-timeline align="start">
            <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
                <v-card>
                    <v-card-title :class="['text-h6', 'cardTitulo', `bg-${item.color}`]">
                        {{ item.titulo }}
                    </v-card-title>
                    <v-card-text class="bg-white text--primary pa-5">
                        <p>{{ item.descricao }}</p>
                        <v-btn :color="item.color" variant="outlined" class="mt-5">
                            Detalhes
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-card>
    <v-card class="pa-5 aparecerMobile" elevation="0">
        <v-timeline align="start" side="start">
            <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
                <v-card>
                    <v-card-title :class="['text-h6', `bg-${item.color}`]">
                        {{ item.titulo }}
                    </v-card-title>
                    <v-card-text class="bg-white text--primary pa-5">
                        <p>{{ item.descricao }}</p>
                        <v-btn :color="item.color" variant="outlined" class="mt-5">
                            Detalhes
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-card>
</div>
</template>

<script>
export default {
    data: () => ({
        items: [{
                color: 'red-lighten-2',
                icon: 'mdi-star',
                titulo: "Materiais",
                descricao: "Os materias necesssarios são: enxada, pá, botas de borracha, trator, irrigadores e pulverizadores"
            },
            {
                color: 'brown-darken-2',
                icon: 'mdi-book-variant',
                titulo: "Feritlidade do Solo",
                descricao: "Eliminando ervas invasoras, corrigindo o pH e adicionando nutrientes necessários. Isso ajuda a criar um ambiente favorável para o crescimento das plantas."
            },
            {
                color: 'blue-darken-3',
                icon: 'mdi-airballoon',
                titulo: "Monitoramento da irrigação",
                descricao: "As plantas precisam de água para crescer, mas irrigação em excesso pode levar a problemas como doenças fúngicas e podridão das raízes. Monitorar a quantidade de água que as plantas recebem e ajustar a irrigação conforme necessário é crucial para garantir uma colheita saudável. Deve regar este produto 3 vezes por semana uma vez em cada dia"
            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Adubação",
                descricao: "O adubo serve para restaurar e possibilitar o desenvolvimento de micro-organismos benéficos, o que aumenta ainda mais a qualidade das condições do solo. Para o seu tipo de solo deves utilizar o adubo Mineral"
            },
            {
                color: 'green-lighten-1',
                icon: 'mdi-layers-triple',
                titulo: "Fertilizantes",
                descricao: "Uso de fertilizantes naturais: Fertilizantes naturais, como compostagem e esterco, são uma ótima opção para enriquecer o solo com nutrientes sem o uso de produtos químicos agressivos."

            },
            {
                color: 'blue-darken-2',
                icon: 'mdi-layers-triple',
                titulo: "Pulverização",
                descricao: "como rotação de culturas e plantio de culturas resistentes, e usar métodos orgânicos de controle de pragas e doenças, como o uso de insetos benéficos e armadilhas."
            },
            {
                color: 'blue-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Controle de Pragas e doenças",
                descricao: "inspecionar regularmente as plantas em busca de sinais de doenças e pragas, como manchas, deformações, mordidas ou outros danos, ajuda a identificar e tratar os problemas rapidamente antes que se tornem mais graves."
            },
            {
                color: 'yellow-darken-4',
                icon: 'mdi-layers-triple',
                titulo: "Defensivos agricolas",
                descricao: "defensivos agrícolas, como inseticidas, fungicidas e herbicidas, são utilizados para proteger as plantas contra pragas, doenças e plantas invasoras."
            },
            {
                color: 'red-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Pesticidas Naturais",
                descricao: "Uso de pesticidas naturais: utilizar produtos naturais como óleos essenciais, extratos de plantas e sabão inseticida pode ajudar a controlar pragas de forma mais segura e sustentável do que o uso de pesticidas químicos."
            },

            {
                color: 'green-darken-4',
                icon: 'mdi-layers-triple',
                titulo: "Colheita",
                descricao: "Verifique a maturação: verifique se os produtos estão maduros o suficiente para a colheita, de acordo com as características de cada planta. A colheita antecipada ou tardia pode afetar a qualidade e o sabor dos produtos."
            },
            {
                color: 'indigo-lighten-2',
                icon: 'mdi-layers-triple',
                titulo: "Armazenamento",
                descricao: "Mantenha o produto em local fresco e seco: procure armazenar os produtos em locais com temperatura fresca e constante, sem exposição direta à luz solar. Evite lugares úmidos ou próximos a fontes de calor."
            },
            {
                color: 'grey-darken-2',
                icon: 'mdi-layers-triple',
                titulo: "Embalagem",
                descricao: "Este produto deve ser armazenada em embagens de qualidade, pode ser caixa ou em sacos de rede e armazenar em um local apropriado"
            },
        ],
    }),
}
</script>

<style>
a {
    text-decoration: none;
}

.aparecerMobile {
    display: none;
}

@media (max-width: 680px) {
    .H1TituloProcessos {
        font-size: 20px;
    }

    .aparecerDesktop {
        display: none;
    }

    .aparecerMobile {
        display: block;
    }
    .cardTitulo{
        font-size: 12px;
    }
}
</style>
