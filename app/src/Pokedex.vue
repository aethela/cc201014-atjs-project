<script>
export default {
    data() {
        return {
            list: []
        }
    },

    methods: {
        async fetchPokemon() {
         const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

         const data = await fetch(url)

         const pokemon = await data.json()

         console.log(pokemon);

         this.list = pokemon.results;
        }
    }
}
</script>

<template>

    <div>
        <h1>Pokedex</h1>

        <button @click="fetchPokemon">Catch Pokemon</button>

        <div v-for="(item, index) in list" :key="index">
            <div>
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ index + 1 }.png`" alt="" srcset="">
                <h2>{{ item.name }}</h2>
            </div>

        </div>

        <!-- {{ list }} -->
    </div>
</template>


