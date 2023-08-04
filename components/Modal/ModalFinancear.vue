<style>
.FundoDialog {
  background: #dbe1e3;
}
.DetalhesProdutoInvestir {
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

.DetalhesProdutoInvestirFilho1 {
  display: flex;
  flex-direction: column;
  background: url(../../public/img/produtos/batata.jpeg);
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
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

.DetalhesProdutoInvestirFilho2 {
  width: 100%;
  background: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.DetalhesProdutoInvestirFilho2 table {
  padding: 20px;
}

.DetalhesProdutoInvestirFilho2 td {
  padding: 5px;
}

.DetalhesProdutoInvestirFilho2 th {
  color: #888888;
  text-align: right;
}
.CapitalPInvestir td, .CapitalPInvestir th{
  color: #000;
}
</style>

<template>
  <v-row justify="center">
    <v-dialog class="" v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn class="btnVerFazenda" v-bind="props">
          <p class="text-white">Investir</p>
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
              Analise os dados e Preencha os Campos para investir
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

        <div class="DetalhesProdutoInvestir">

          <div class="DetalhesProdutoInvestirFilho1">
            <div class="fundoSlogam">
              <p class="text-white slogamFazenda">
                <span class="marcaSlogam">BATATA RENA NACIONAL</span>
              </p>
            </div>
          </div>

          <div class="DetalhesProdutoInvestirFilho2">
            <div>
              <table>
                <tr>
                  <td>Produto</td>
                  <th>Batata Rena Nacional</th>
                </tr>

                <tr>
                  <td>Quantidade estimada</td>
                  <th>30.000 Toneladas</th>
                </tr>

                <tr>
                  <td>Área Total</td>
                  <th>9.000 HECTARES</th>
                </tr>

                <tr>
                  <td>Tempo de Produção</td>
                  <th>7 Meses</th>
                </tr>

                <tr>
                  <td>Capital Solicitado</td>
                  <th>33.782,20 Kz</th>
                </tr>

                <tr class="CapitalPInvestir">
                  <td>Capital Disponível para Investir</td>
                  <th>13.000,20 Kz</th>
                </tr>
 
              </table>
            </div>
          </div>
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