<template>
<v-dialog v-model="dialog" persistent width="800">
    <template v-slot:activator="{ props }">
        <v-btn color="green" v-bind="props" class="mr-4">
            Novo Financiamento
        </v-btn>
    </template>
    <v-card>
        <v-card-title class="bg-green">
            <span class="text-h5">Solicitar financiamento para um produto</span>
        </v-card-title>
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="12" md="12">
                        <v-combobox v-model="historico" :items="['Cebola', 'Batata', 'Limão', 'Abacate']" label="Produtos" chips></v-combobox>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Descricao" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-combobox v-model="actividade" :items="['Agricultura', 'Pecuaria']" label="Actividade" multiple chips></v-combobox>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Total de Hectares"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Hectares Cultivaveis" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Fundação" required type="date"></v-text-field>
                    </v-col>

                    
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Fechar
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                Salvar
            </v-btn>
        </v-card-actions>
    </v-card>
</v-dialog>
</template>

    
    
<script>
export default {
    data: () => ({
        dialog: false,
        actividade: "",
        historico: ""
    }),
}
</script>
