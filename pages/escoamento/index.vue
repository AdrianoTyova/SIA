<script>

export default {
    created() {
        this.verDados()
    },
    data: () => ({
        listas: []
    }),
    methods: {
        async verDados() {
            await useFetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => {
                    this.listas = response.data._rawValue
                    console.log(response.data._rawValue)
                })
        }
    }
}

</script>

<template>
    <!-- <ul>
        <li v-for="dado, i in listas" :key="i">
            {{ dado }}
        </li>
    </ul> -->
</template> 