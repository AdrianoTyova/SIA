<style>
.FundoDialog {
  background: #dbe1e3;
}

.btnVerFazenda {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: #0b5ed7;
  color: #fff;
  transition: 1s;
}

.btnVerFazenda:hover {
  background: #1f76f9da;
  transition: 1s;
}

.InfoPainel {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.DetalhesFazenda {
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 49px;
  grid-template-columns: repeat(2, 1fr);
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  width: 1100px;
}

.DetalhesFazendaFilho1 {
  display: flex;
  flex-direction: column;
  background: url(../../public/img/farm.jpg);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.fundoSlogam {
  padding: 20px;
  width: 100%;
  backdrop-filter: blur(4px);
  background: #ffffff41;
  margin-top: 210px;
}

p.slogamFazenda {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #fff;
}

span.marcaSlogam {
  color: #031632;
  font-weight: bold;
}

.DetalhesFazendaFilho2 {
  width: 100%;
  background: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.DetalhesFazendaFilho2 table {
  padding: 20px;
}

.DetalhesFazendaFilho2 td {
  padding: 5px;
}

.DetalhesFazendaFilho2 th {
  color: #888888;
  text-align: right;
}

.SlideProdutos img {
  width: 100%;
  height: 100%;

}

.icon-fazenda {
  background: url(../../public/img/farm.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  width: 60px;
  height: 60px;
}

.sia-cardSolicitacao {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.SolicitacaoFinanceamento {
  width: 1140px;
  margin: 0 auto;
}

.ProdutosDaFazenda {
  width: 1140px;
  margin: 0 auto;
}

.imageProduto {
    background: url(../../public/img/produtos/batata.jpeg);
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.imageProduto1 {
    background: url(../../public/img/produtos/cebola.jpeg);
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.imageProduto2 {
    background: url(../../public/img/produtos/tomate.jpeg);
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}
.imageProduto3 {
    background: url(../../public/img/produtos/couve.jpeg);
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

</style>

<template>
  <v-row justify="center">
    <v-dialog class="" v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn class="btnVerFazenda" v-bind="props">
          <p class="text-white">Abrir</p>
        </v-btn>
      </template>
      <v-card class="FundoDialog">
        <v-toolbar style="background: #0b5ed7;">
          <v-btn icon dark @click="dialog = false">
            <p class="text-white">
              <v-icon icon="home" />
            </p>
          </v-btn>
          <v-toolbar-title class="text-white">
            <p class="text-white">
              Detalhes da Fazenda
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

        <!--  -->

        <div class="DetalhesFazenda">

          <div class="DetalhesFazendaFilho1">
            <div class="fundoSlogam">
              <p class="text-white slogamFazenda">
                DA NOSSA TERRA <span class="marcaSlogam"> PARA A SUA MESA</span>
              </p>
            </div>
          </div>

          <div class="DetalhesFazendaFilho2">
            <div>
              <table>
                <tr>
                  <td>Fazenda</td>
                  <th>MUMBA</th>
                </tr>

                <tr>
                  <td>Localização</td>
                  <th>Provincia da Huila</th>
                </tr>

                <tr>
                  <td>Área Total</td>
                  <th>90.000 HECTARES</th>
                </tr>

                <tr>
                  <td>Sede</td>
                  <th>Bairro de Tchioco</th>
                </tr>

                <tr>
                  <td>Telefone</td>
                  <th>+244 934 337 822</th>
                </tr>

                <tr>
                  <td>Email</td>
                  <th>info.ao@omatapalo.com</th>
                </tr>
                <tr>
                  <td>Site</td>
                  <th>www.omatapalo.com</th>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div class="inicioInvestidor SolicitacaoFinanceamento">
          <div class="sia-cardSolicitacao">
            <table>
              <tr>
                <td rowspan="2">
                  <div class="icon-fazenda"></div>
                </td>
                <td style="vertical-align: bottom;">
                  <h2 class="title">Solicitações de Financeamento</h2>
                </td>
              </tr>
              <tr>
                <td style="vertical-align: top;">
                  <p class="desc">Invista na Produção MUMBA...</p>
                </td>
              </tr>
            </table>
          </div>
        </div>


        <div class="ProdutosDaFazenda">
          <v-container class="CardsFazenda">
            <v-row>
              <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                  <v-img class="align-end text-white imageProduto" height="180" src="" cover></v-img>
                  
                  <v-card-subtitle class="pt-4">
                        Batata Rena Nacional
                    </v-card-subtitle>

                  <v-card-actions>
                    <ModalFinancear />
                  </v-card-actions>
                </v-card>

              </v-col>

              <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                  <v-img class="align-end text-white imageProduto3" height="180" src="" cover></v-img>
                  
                  <v-card-subtitle class="pt-4">
                        Feijão Preto Nacional
                    </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="" class="btnVerFazenda text-white">
                      <ModalFinancear />
                    </v-btn>
                  </v-card-actions>
                </v-card>

              </v-col>

              <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                  <v-img class="align-end text-white imageProduto2" height="180" src="" cover></v-img>

                  <v-card-subtitle class="pt-4">
                        Tomate Nacional
                    </v-card-subtitle>

                  <v-card-actions>
                    <v-btn color="" class="btnVerFazenda text-white">
                      <ModalFinancear />
                    </v-btn>

                  </v-card-actions>
                </v-card>

              </v-col>


              <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                  <v-img class="align-end text-white imageProduto1" height="180" src="" cover></v-img>

                  <v-card-subtitle class="pt-4">
                        Cebola Nacional
                    </v-card-subtitle>

                  <v-card-actions class="text-white">
                    <v-btn color="" class="btnVerFazenda text-white">
                      <ModalFinancear />
                    </v-btn>

                  </v-card-actions>
                </v-card>

              </v-col>
            </v-row>
          </v-container>
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
<style>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}
</style>