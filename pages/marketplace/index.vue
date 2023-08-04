<style>
.CardsFazenda { 
    justify-content: center;
    align-items: center;
    margin: 0 auto;
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

.imageFazenda1 {
    background: url(../../public/img/fazendas/faz.jpeg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.imageFazenda2 {
    background: url(../../public/img/fazendas/fase.jpeg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.imageFazenda3 {
    background: url(../../public/img/fazendas/fazenda.jpeg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.imageFazenda4 {
    background: url(../../public/img/fazendas/fazenda1.jpeg);
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
}
.FundoFazenda {
    width: 100%;
    height: 100%;
    background: #0b5dd742;
}

</style>

<template>
    <div class="inicioInvestidor">
        <h2>SIIA | FAZENDAS</h2>
        <p>Sistema Integrado de Investimento Agrário</p>
    </div>

    <v-container class="CardsFazenda">
        <v-row>
            <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                    <v-img class="align-end text-white imageFazenda1" height="180" src="" cover>
                        <div class="FundoFazenda">
                            <v-card-title class="text-white">FAZENDA MUMBA</v-card-title>
                        </div>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        PROVINCIA DA HUILA
                    </v-card-subtitle>

                    <v-card-actions>
                        <ModalProdutoFazenda />
                    </v-card-actions>
                </v-card>

            </v-col>

            <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                    <v-img class="align-end text-white imageFazenda4" height="180" src="" cover>
                        <div class="FundoFazenda">
                            <v-card-title class="text-white">FAZENDA TCHISSOLA</v-card-title>
                        </div>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        PROVINCIA DA HUILA
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="" class="btnVerFazenda text-white">
                            <P class="text-white">ABRIR</P>
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>

            <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                    <v-img class="align-end text-white imageFazenda3" height="180" src="" cover>
                        <div class="FundoFazenda">
                            <v-card-title class="text-white">FAZENDA GIRASSOL</v-card-title>
                        </div>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        PROVINCIA DA HUILA
                    </v-card-subtitle>

                    <v-card-actions>
                        <v-btn color="" class="btnVerFazenda text-white">
                            <P class="text-white">ABRIR</P>
                        </v-btn>

                    </v-card-actions>
                </v-card>

            </v-col>



            <v-col cols="12" sm="3" md="3">

                <v-card class="mx-auto" max-width="300">
                    <v-img class="align-end text-white imageFazenda2" height="180" src="" cover>
                        <div class="FundoFazenda">
                            <v-card-title class="text-white">FAZENDA JAMBA</v-card-title>
                        </div>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        PROVINCIA DA HUILA
                    </v-card-subtitle>

                    <v-card-actions class="text-white">
                        <v-btn color="" class="btnVerFazenda text-white">
                            <P class="text-white">ABRIR</P>
                        </v-btn>

                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<!-- Funcoes -->
  
 

<!-- Funcao Para abertura da modal -->

<!-- Fim da Funcao de abertura da -->

