<style>
.DetalhesProcessoInvestimento {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
}

.InfoPainel {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.novaPosicaoCentro {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1257px;

}

.DetalhesProduto {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 10px;
  margin: 5px;
}

.DetalhesProdutoFilho1 {
  width: 100%;
}

.DetalhesProdutoFilho2 {
  width: max-content; 
}

.SlideProdutos img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 100%;

}

.PocicaoTabelasDetalhes {
  display: grid;
  justify-content: center;
  align-items: center;
}

.InfoPainel {
  display: grid;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
}

.TabelaRiscos {
  width: 1200px;
}
</style>

<template>
  <v-row justify="center">
    <v-dialog class="" v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn dark v-bind="props">
          Abrir
        </v-btn>
      </template>
      <v-card>
        <v-toolbar style="background: #0b5ed7;">
          <v-btn icon dark @click="dialog = false">
            <p class="text-white">
              <v-icon icon="home" />
            </p>
          </v-btn>
          <v-toolbar-title class="text-white">
            <p class="text-white">
              Processo de Investimento
            </p>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="text-white">
            <v-btn class="text-white" variant="text" @click="dialog = false">
              <p class="text-white">
                Fechar
              </p>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list lines="two" subheader>
          <v-list-subheader>Detalhes do (s) Produto (s) em Investimento</v-list-subheader>

        </v-list>

        <!--  -->

        <div class="novaPosicaoCentro">
          <div class="DetalhesProduto">

            <div class="DetalhesProdutoFilho1">

              <v-carousel cycle height="350" hide-delimiter-background show-arrows="hover">
                <v-carousel-item v-for="(slide, i) in slides" :key="i">
                  <v-sheet :color="colors[i]" height="100%">
                    <div class="d-flex fill-height justify-center align-center">
                      <div class="text-h2 SlideProdutos">
                        <img src="../../public//img/produtos/SementeBatata4.jpeg" alt="">
                      </div>
                    </div>
                  </v-sheet>
                </v-carousel-item>
              </v-carousel>
            </div>

            <div class="DetalhesProdutoFilho2">
              <v-table height="300px" class="PrimeiraTabelaFazendas">

                <thead class="Fundothead">
                  <tr>
                    <th class="text-white">
                      Total 100%
                    </th>
                    <th class="text-white">
                      C.Risco 23%
                    </th>
                    <th class="text-white">
                      C.Giro 77%
                    </th>
                    <th class="text-white">
                      C.Retorno 600%
                    </th>
                    <th class="text-white">
                      T. de Produção - Meses
                    </th>
                    <th class="text-white">
                      Data Início
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.cRisco }}</td>
                    <td>{{ item.cGiro }}</td>
                    <td>{{ item.cRetorno }}</td>
                    <td>{{ item.tProducao }}</td>
                    <td>{{ item.iProducao }}</td>
                  </tr>
                </tbody>
              </v-table>

            </div>

          </div>
        </div>


        <div class="PocicaoTabelasDetalhes">
          <v-card>
            <template v-slot:prepend>

              <div class="text-center d-flex pb-4">
                <v-btn class="ma-2" @click="all">
                  Abrir Todos
                </v-btn>
                <v-btn class="ma-2" @click="none">
                  Fechar
                </v-btn>
              </div>

              <!-- <div class="pb-4">v-model {{ panel }}</div> -->

              <div class="DetalhesProcessoInvestimento">
                <v-expansion-panels v-model="panel" multiple>
                  <v-expansion-panel title="Análise de Risco">
                    <v-expansion-panel-text>
                      <div class="InfoPainel">
                        <v-table height="300px" class="TabelaRiscos">
                          <thead class="Fundothead">
                            <tr>
                              <th class="text-white">
                                Descrição
                              </th>
                              <th class="text-white">
                                Valor
                              </th>
                              <th class="text-white">
                                Percentágem
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="item in dessertsRiscosIvestimentos" :key="item.descricaoRisco">
                              <td>{{ item.descricaoRisco }}</td>
                              <td>{{ item.valorRisco }}</td>
                              <td>{{ item.percentagem }}</td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </v-expansion-panel-text>

                  </v-expansion-panel>

                  <v-expansion-panel title="Capital de Giro">
                    <v-expansion-panel-text>
                      <div class="InfoPainel">
                        <v-table height="300px" class="TabelaRiscos">
                          <thead class="Fundothead">
                            <tr>
                              <th class="text-white">
                                Descrição
                              </th>
                              <th class="text-white">
                                Quantidade
                              </th>
                              <th class="text-white">
                                Preço de Aquisição
                              </th>
                              <th class="text-white">
                                Total
                              </th>
                              <th class="text-white">
                                Porcentagem
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="item in dessertsCapitalGiroIvestimentos" :key="item.descricaoGiro">
                              <td>{{ item.descricaoGiro }}</td>
                              <td>{{ item.qtdGiro }}</td>
                              <td>{{ item.precoAquisicaoGiro }}</td>
                              <td>{{ item.totalGiro }}</td>
                              <td>{{ item.percentagemGiro }}</td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </v-expansion-panel-text>

                  </v-expansion-panel>

                  <v-expansion-panel title="Capital de Retorno">
                    <v-expansion-panel-text>
                      <div class="InfoPainel">
                        <v-table height="300px" class="TabelaRiscos">
                          <thead class="Fundothead">
                            <tr>
                              <th class="text-white">
                                Descrição
                              </th>
                              <th class="text-white">
                                Quantidade
                              </th>
                              
                              <th class="text-white">
                                Preço de Mercado
                              </th>
                              <th class="text-white">
                                Total
                              </th>
                              <th class="text-white">
                                Percentagem
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr v-for="item in dessertsCapitalRetornoIvestimentos" :key="item.descricaoRetorno">
                              <td>{{ item.descricaoRetorno }}</td>
                              <td>{{ item.qtdRetorno }}</td>
                              <td>{{ item.precoMercadoRetorno }}</td>
                              <td>{{ item.totalRetorno }}</td>
                              <td>{{ item.percentagemRetorno }}</td>
                            </tr>
                          </tbody>
                        </v-table>
                      </div>
                    </v-expansion-panel-text>

                  </v-expansion-panel>

                </v-expansion-panels>
              </div>

            </template>
          </v-card>
        </div>

        <!--  -->

      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,


      desserts: [
        {
          name: '10.000.000 Kz',
          cRisco: '2.300.000 Kz',
          cGiro: '7.700.000 Kz',
          cRetorno: '60.000.000 Kz',
          tProducao: '4',
          iProducao: '20/07/2023'
        },

        {
          name: '10.000.000 Kz',
          cRisco: '2.300.000 Kz',
          cGiro: '7.700.000 Kz',
          cRetorno: '60.000.000 Kz',
          tProducao: '4',
          iProducao: '20/01/2023'
        },

      ],


      // Analid=se de Risco de Investimento

      dessertsRiscosIvestimentos: [
        {
          descricaoRisco: 'Análise de solo e preparação',
          valorRisco: '500.000Kz',
          percentagem: '5.00%',
        },

        {
          descricaoRisco: 'Furo de água',
          valorRisco: '500.000Kz',
          percentagem: '5.00%',
        },
        {
          descricaoRisco: 'Materiais',
          valorRisco: '300.000Kz',
          percentagem: '3.00%',
        },
        {
          descricaoRisco: 'Obrigações Juridicas',
          valorRisco: '500.000Kz',
          percentagem: '5.00%',
        },
        {
          descricaoRisco: 'Obrigações Tributarias',
          valorRisco: '300.000Kz',
          percentagem: '3.00%',
        },
        {
          descricaoRisco: 'Conta Corrente',
          valorRisco: '700.000Kz',
          percentagem: '7.00%',
        },
        {
          descricaoRisco: 'Total',
          valorRisco: '2.300.000Kz',
          percentagem: '23.00%',
        },
      ],

      // Fim da Analise de Risco de Investimento


      // 
      dessertsCapitalGiroIvestimentos: [
        {
          descricaoGiro: 'Sementes',
          qtdGiro: '641.67un.',
          precoAquisicaoGiro: '12.000Kz',
          totalGiro: '7.700.000Kz',
          percentagemGiro: '77.00%',
        }

      ],
      //


            // 
            dessertsCapitalRetornoIvestimentos: [
        {
          descricaoRetorno: 'Kilo',
          qtdRetorno: '641.67un.',
          precoMercadoRetorno: '10.000Kz',
          totalRetorno: '60.000.000Kz',
          percentagemRetorno: '600%',
        }

      ],
      //

      
      panel: [],
      methods: {
        all() {
          this.panel = ['foo', 'bar', 'baz']
        },
        none() {
          this.panel = []
        },
      },

      colors: [
        '#fff',
        '#fff',
        '#fff',
      ],
      slides: [
        'First',
        'Second',
        'Third',
      ],
    }
  },
}
</script>
<style>.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}</style>