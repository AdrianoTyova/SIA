<template>
<div>
    <div class="d-flex justify-space-between align-center mt-5 mb-10">
        <div></div>
        <div>
            <ModalFinanciamentoCadastrar />
        </div>
    </div>
    <v-card class="mx-2">
        <v-table>
            <thead class="bg-green-darken-2 text-white">
                <tr>
                    <th class="text-center text-white">
                        Imagem
                    </th>
                    <th class="text-center text-white">
                        Descricao
                    </th>
                    <th class="text-center text-white">
                        Investimento
                    </th>
                    <th class="text-center text-white">
                        A. Riscos
                    </th>
                    <th class="text-center text-white">
                        Capital Giro
                    </th>
                    <th class="text-center text-white">
                        Capital de Retorno
                    </th>
                    <th class="text-center text-white">
                        Estado
                    </th>
                    <th class="text-center text-white">
                        Opções
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item, index in produtos" :key="index" class="text-center">
                    <td>
                        <div :style="verImg(item.img)" class="TabelaImg ma-1 rounded-lg"></div>
                    </td>
                    <td>{{ item.descricao }}</td>
                    <td>{{ (item.riscos + item.giro).toLocaleString('pt-br') }}Kz</td>
                    <td>{{ (((item.riscos)  / (item.riscos + item.giro)) * 100).toFixed(1) }}% ({{ (item.riscos).toLocaleString('pt-br') }}Kz)</td>
                    <td>{{ (((item.giro)  / (item.riscos + item.giro)) * 100).toFixed(1) }}% ({{ (item.giro).toLocaleString('pt-br') }}Kz)</td>
                    <td>{{ ((item.riscos + item.giro) * 6).toLocaleString('pt-br') }}Kz</td>
                    <td><v-chip  :color="item.estado === 'Em processo...' ? 'yellow-darken-3' : 'green-darken-2'" elevation="1">{{ item.estado }}</v-chip></td>
                    <td>
                        <ModalFinanciamentoDetalhes :info="item" />
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-card>
</div>
</template>

    
    
<script>
export default {
    data() {
        return {
            produtos: [
                {
                    img: '/img/produtos/feijao.jpeg',
                    descricao: "Feijão",
                    riscos: 2300000,
                    giro: 7700000,
                    estado: "Em processo...",
                },
                {
                    img: '/img/produtos/batata.jpeg',
                    descricao: "Batata",
                    riscos: 750,
                    giro: 7000,
                    estado: "Em processo...",
                },
                {
                    img: '/img/produtos/cebola.jpeg',
                    descricao: "Cebola",
                    riscos: 750,
                    giro: 7000,
                    estado: "Em processo...",
                },
                {
                    img: '/img/produtos/cenoura.jpeg',
                    descricao: "Cenoura",
                    riscos: 750,
                    giro: 7000,
                    estado: "Em processo...",
                },
                
                {
                    img: '/img/produtos/couve.jpeg',
                    descricao: "Couve",
                    riscos: 750,
                    giro: 7000,
                    estado: "Finalizado",
                },
               
            ],
        }
    },
    methods: {
        verImg(img) {
            return `background-image: url(${img})`
        }
    }
}
</script>
    
    
<style lang="scss" scoped>
.TabelaImg {
    width: 120px;
    height: 80px;
    background-size: 85%;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
