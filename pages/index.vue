<style>
.inicioInvestidor {
    padding: 20px;
}

.inicioInvestidor h2 {
    color: #0b5ed7;
}

.CardsInicioDashboard {
    padding: 10px;
}

.PrimeiraTabelaFazendas {
    margin: 13px;
}

.Fundothead {
    background: #0b5ed7;
    color: #fff;
}

.Fundothead th {
    color: #fff;
}
.sia-card-1 {
    position: relative;
    background-color: #aaaaaa63;
    border-radius: 10px;
    padding: 20px;
}

.sia-card-1 td {
    padding: 0 !important;
}

.sia-card-1 .icon-notf {
    width: 60px;
    height: 60px;
    background-color: #aaaaaa63;
    border-radius: 10px;
}

.sia-card-1 .title,
.sia-card-1 .desc {
    padding: 0 20px;
}

.icon-notf1 {
    background: url(../public/img/provincias/Benguela.jpeg);
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    width: 60px;
    height: 60px;
}

.icon-notf2 {
    background: url(../public/img/provincias/huila.jpeg);
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    width: 60px;
    height: 60px;
}

/* Formatacao de estilo da modal para a abertura do processo do investimento */

.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
}

/* Fim da Modal */
</style>

<template>
    <div class="inicioInvestidor">
        <h2>SIIA | FINANCIADOR</h2>
        <p>Sistema Integrado de Investimento Agrário</p>
    </div>

    <v-container class="CardsInicioDashboard">
        <v-row no-gutters>
            <v-col :key="n" cols="4" sm="4">
                <v-card class="mx-auto" max-width="330">
                    <v-card-item title="Fazendas Cadastradas">

                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h5 Detalhealtura" cols="6">
                                <p style="margin-left: 10px;">365</p>
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                </v-card>
            </v-col>

            <v-col :key="n" cols="4" sm="4">
                <v-card class="mx-auto" max-width="330">
                    <v-card-item title="Meus Investimentos">

                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h5 Detalhealtura" cols="6">
                                <p style="margin-left: 10px;">23</p>
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                </v-card>
            </v-col>

            <v-col :key="n" cols="4" sm="4">
                <v-card class="mx-auto" max-width="330">
                    <v-card-item title="Investimentos com Retornos">

                    </v-card-item>

                    <v-card-text class="py-0">
                        <v-row align="center" no-gutters>
                            <v-col class="text-h5 Detalhealtura" cols="6">
                                <p style="margin-left: 10px;">11</p>
                            </v-col>

                            <v-col cols="6" class="text-right">
                                <v-icon color="error" icon="mdi-weather-hurricane" size="88"></v-icon>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                </v-card>
            </v-col>

        </v-row>
    </v-container>

    <!-- tabela de fazendas com o meu investimento -->

    <div class="inicioInvestidor">
        <div class="sia-card-1">
            <table>
                <tr>
                    <td rowspan="2">
                        <div class="icon-notf1"></div>
                    </td>
                    <td style="vertical-align: bottom;">
                        <h2 class="title">Fazendas com a minha aplicação de capital</h2>
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top;">
                        <p class="desc">Detalhes de todos os seus investimentos...</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <v-table height="300px" class="PrimeiraTabelaFazendas">

        <thead class="Fundothead">
            <tr>
                <th class="text-white">
                    Fazenda
                </th>
                <th class="text-white">
                    Localidade
                </th>
                <th class="text-white">
                    Capital Investido
                </th>
                <th class="text-white">
                    Duração
                </th>
                <th class="text-white">
                    Taxa de Retorno (%)
                </th>
                <th class="text-white">
                    Processo
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.localidade }}</td>
                <td>{{ item.capital }}</td>
                <td>{{ item.duracao }}</td>
                <td>{{ item.taxa }}</td>
                <td>
                    <ModalProcesso />
                </td>
            </tr>
        </tbody>
    </v-table>

    <!--  -->

    <div class="inicioInvestidor">
        <div class="sia-card-1">
            <table>
                <tr>
                    <td rowspan="2">
                        <div class="icon-notf2"></div>
                    </td>
                    <td style="vertical-align: bottom;">
                        <h2 class="title">Sugestões de Investimento para sí</h2>
                    </td>
                </tr>
                <tr>
                    <td style="vertical-align: top;">
                        <p class="desc">Investimentos que a sua carteira pode cobrir e render retornos...</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>

    <v-table height="300px" class="PrimeiraTabelaFazendas">

        <thead class="Fundothead">
            <tr>
                <th class="text-white">
                    Fazenda
                </th>
                <th class="text-white">
                    Produto
                </th>
                <th class="text-white">
                    Localidade
                </th>
                <th class="text-white">
                    Valor solicitado
                </th>
                <th class="text-white">
                    Duração
                </th>
                <th class="text-white">
                    Taxa de Retorno (%)
                </th>

                <th class="text-white">
                    Investir
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="item in dessertsFazenda" :key="item.nameFazenda">
                <td>{{ item.nameFazenda }}</td>
                <td>{{ item.produtoFazenda }}</td>
                <td>{{ item.localidadeFazenda }}</td>
                <td>{{ item.capitalFazenda }}</td>
                <td>{{ item.duracaoFazenda }}</td>
                <td>{{ item.taxaFazenda }}</td>
                <td>
                    <ModalInvestir />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>



<!-- Funcoes -->
  

<script>
export default {
    data() {
        return {

            // Funcao para abrir a modal de informacao do processo do investimento  



            // Tabela de segestao de investimentos

            dessertsFazenda: [
                {
                    nameFazenda: 'AgroSol',
                    localidadeFazenda: 'Huila',
                    capitalFazenda: '33.143.00',
                    duracaoFazenda: '12 Meses',
                    taxaFazenda: '16%', 
                    produtoFazenda: 'Batata Rena Nacional', 
                },

                {
                nameFazenda: 'Mumba',
                    localidadeFazenda: 'Humpata',
                    capitalFazenda: '13.113.00',
                    duracaoFazenda: '7 Meses',
                    taxaFazenda: '12%', 
                    produtoFazenda: 'Tomate Nacional', 
                },
            ],


            // Funcao para lista de investimentos feitos nas fazendas

            desserts: [
                {
                    name: 'Mumba',
                    localidade: 'Huila',
                    capital: '1.400.00',
                    duracao: '6 Meses',
                    taxa: '2%',
                    processo: 'Abrir'
                },
                {
                    name: 'NNN',
                    localidade: 'Huila',
                    capital: '3.900.00',
                    duracao: '2 Meses',
                    taxa: '6%',
                    processo: 'Abrir'
                },
                {
                    name: 'Lubamba',
                    localidade: 'Huila',
                    capital: '4.100.00',
                    duracao: '3 Meses',
                    taxa: '9%',
                    processo: 'Abrir'
                },
                {
                    name: 'Luas',
                    localidade: 'Huila',
                    capital: '3.000.00',
                    duracao: '12 Meses',
                    taxa: '13%',
                    processo: 'Abrir'
                },
                {
                    name: 'Zacarias',
                    localidade: 'Huila',
                    capital: '13.900.00',
                    duracao: '8 Meses',
                    taxa: '7%',
                    processo: 'Abrir'
                },
                {
                    name: 'Lubamba',
                    localidade: 'Huila',
                    capital: '900.00',
                    duracao: '6 Meses',
                    taxa: '11%',
                    processo: 'Abrir'
                },
                {
                    name: 'Freitas',
                    localidade: 'Huila',
                    capital: '9.000.00',
                    duracao: '9 Meses',
                    taxa: '16%',
                    processo: 'Abrir'
                },
                {
                    name: 'AgroSol',
                    localidade: 'Huila',
                    capital: '3.900.00',
                    duracao: '6 Meses',
                    taxa: '6%',
                    processo: 'Abrir'
                },



            ],
        }

    },
}
</script>

<!-- Funcao Para abertura da modal -->

<!-- Fim da Funcao de abertura da -->

