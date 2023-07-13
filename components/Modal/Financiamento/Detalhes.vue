<template>
<v-dialog v-model="dialog" width="1000">
    <template v-slot:activator="{ props }">
        <v-text color="green" v-bind="props" class="mr-4">
            Detalhes
        </v-text>
    </template>
    <v-card>
        <v-card-title class="bg-green">
            <span class="text-h5">Detalhes do produto</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-card elevation="5" class="pa-5">
                    <v-row>
                        <v-col cols="12" sm="6" md="6">
                            <div class="imgDivModal">

                            </div>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <table class="tabelaModal">
                                <tr>
                                    <td>Feijão</td>
                                </tr>
                                <tr>
                                    <td>Investimento Total: </td>
                                    <td> {{ (dados.riscos + dados.giro).toLocaleString('pt-br') }} Kz</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Capital de Risco: </td>
                                    <td>{{ (dados.riscos).toLocaleString('pt-br') }} Kz</td>
                                    <td>23%</td>
                                </tr>
                                <tr>
                                    <td>Capital de Giro: </td>
                                    <td>{{ (dados.giro).toLocaleString('pt-br') }} Kz</td>
                                    <td>77%</td>
                                </tr>
                                <tr>
                                    <td>Capital de Retorno: </td>
                                    <td>{{ ((dados.riscos + dados.giro) * 6).toLocaleString('pt-br') }} Kz</td>
                                    <td>600%</td>
                                </tr>
                                <tr>
                                    <td>Tempo de produção: </td>
                                    <td>4 meses</td>
                                </tr>
                                <tr>
                                    <td>Inicio da produção: </td>
                                    <td>20 de Agosto de 2023</td>
                                </tr>
                                <tr>
                                    <td><v-chip  :color="dados.estado === 'Em processo...' ? 'yellow-darken-3' : 'green-darken-2'" elevation="1">{{ dados.estado }}</v-chip></td>
                                </tr>
                            </table>
                        </v-col>
                    </v-row>
                </v-card>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <h2 class="text-gray text-center my-5">Análise de risco</h2>
                        <table class="tabelaModalRisco">
                            <tr>
                                <td>Descrição </td>
                                <td>Valor</td>
                                <td>Porcentagem</td>
                            </tr>
                            <tr v-for="risco, index in riscos" :key="index">
                                <td>{{ risco.descricao }} </td>
                                <td>{{ (risco.valor).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ ((risco.valor / (dados.riscos + dados.giro))*100).toFixed(2) }}%</td>
                            </tr>
                        </table>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <h2 class="text-gray text-center my-5">Capital de Giro</h2>
                        <table class="tabelaModalRisco">
                            <tr>
                                <td>Descrição </td>
                                <td>Qtd. </td>
                                <td>Preço de Aquisição</td>
                                <td>Total</td>
                                <td>Porcentagem</td>
                            </tr>
                            <tr v-for="giro, index in giros" :key="index">
                                <td>{{ giro.descricao }} </td>
                                <td>{{ (dados.giro / giro.valor).toFixed(2) }}un.</td>
                                <td>{{ (giro.valor).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ ((dados.giro / giro.valor) * giro.valor).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ ((((dados.giro / giro.valor) * giro.valor) / (dados.riscos + dados.giro))*100).toFixed(2) }}%</td>
                            </tr>
                        </table>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <h2 class="text-gray text-center my-5">Capital de Retorno</h2>
                        <table class="tabelaModalRisco">
                            <tr>
                                <td>Descrição </td>
                                <td>Qtd. </td>
                                <td>Preço do Mercado</td>
                                <td>Total</td>
                                <td>Porcentagem</td>
                            </tr>
                            <tr>
                                <td>{{ retorno.descricao }} </td>
                                <td>{{ retorno.qtd }}un.</td>
                                <td>{{ (retorno.valor).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ (retorno.valor * retorno.qtd).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ retorno.porcentagem }}%</td>
                            </tr>
                        </table>
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                        <h2 class="text-gray text-center my-5">Financiadores</h2>
                        <table class="tabelaModalRisco">
                            <tr>
                                <td>Nome </td>
                                <td>Investimento</td>
                                <td>Capital de Retorno (30%)</td>
                                <td>% do investimento</td>
                            </tr>
                            <tr v-for="financiador, index in financiadores" :key="index" >
                                <td>{{ financiador.nome }} </td>
                                <td>{{ (financiador.valor).toLocaleString('pt-br') }}Kz</td>
                                <td>{{ ((financiador.valor * 6 * 30/100)).toLocaleString('pt-br') }}Kz</td>
                                <td> {{ ((((financiador.valor* 6 * 30/100) / (dados.riscos + dados.giro) * 100)).toFixed(2)).toLocaleString('pt-br') }}%</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>{{ totalValorFinanciadores.toLocaleString('pt-br') }}Kz</td>
                                <td>{{ ((totalValorFinanciadores * 6 * 30/100)).toLocaleString('pt-br') }}Kz</td>
                                <td> {{ ((((totalValorFinanciadores * 6 * 30/100) / (dados.riscos + dados.giro) * 100)).toFixed(2)).toLocaleString('pt-br') }}%</td>
                            </tr>
                        </table>
                    </v-col>
                </v-row>

            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Fechar
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

<script>

export default {
    created(){
        this.totalInvestimento()
    },
    data: () => ({
        dialog: false,
        actividade: "",
        historico: "",
        totalValorFinanciadores: 0,
        dados: {
            img: '/img/produtos/batata.jpeg',
            descricao: "Feijão",
            riscos: 2300000,
            giro: 7700000,
            estado: "Em processo...",
        },
        riscos: [{
                descricao: "Análise de solo e preparação",
                valor: 500000,
                porcentagem: 100
            },
            {
                descricao: "Furo de água",
                valor: 500000,
                porcentagem: 100
            },
            {
                descricao: "Materiais",
                valor: 300000,
                porcentagem: 100
            },
            {
                descricao: "Obrigações Juridicas",
                valor: 500000,
                porcentagem: 100
            },
            {
                descricao: "Obrigações Tributarias",
                valor: 300000,
                porcentagem: 100
            },
            {
                descricao: "Conta Corrente",
                valor: 700000,
                porcentagem: 100
            },
            {
                descricao: "Total",
                valor: 2300000,
                porcentagem: 100
            },
        ],
        giros: [{
            descricao: "Sementes",
            qtd: 600,
            valor: 12000,
            porcentagem: 77
        }],
        retorno: {
            descricao: "Kilo",
            qtd: 6000,
            valor: 10000,
            porcentagem: 600
        },
        financiadores: [{
                nome: "Erivaldo Munjanga",
                valor: 2500000
            },
            {
                nome: "Jaire Manuel",
                valor: 3000000
            },
            {
                nome: "Ludjerio Paulino",
                valor: 2000000
            },
            {
                nome: "Odair Ribeiro",
                valor: 2500000
            },
        ]
    }),

    methods: {
        totalInvestimento(){
            for(var i = 0; i< this.financiadores.length; i++){
                this.totalValorFinanciadores += this.financiadores[i].valor
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.imgDivModal {
    width: 100%;
    height: 300px;
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/img/produtos/feijao.jpeg');
}

.tabelaModal {
    tr {
        td {
            padding: 5px;

            &:nth-child(1) {
                color: green;
                font-size: 20px;
            }
        }
    }
}

.tabelaModalRisco {
    width: 100%;
    border-spacing: 0;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    tr {
        &:nth-child(1) {
            color: #fff;
            background-color: #333;
            font-size: 20px;
            border-radius: 10px 0 0 10px;

            td {
                &:first-child {
                    border-radius: 10px 0 0 0;
                }

                &:last-child {
                    border-radius: 0 10px 0 0;
                }
            }
        }

        &:nth-child(even) {
            background-color: #f1f1f1;
        }

        &:last-child {
            td {
                &:first-child {
                    border-radius: 0 0 0 10px;
                }

                &:last-child {
                    border-radius: 0 0 10px 0;
                }
            }
        }

        td {
            padding: 10px;
        }
    }
}
</style>
