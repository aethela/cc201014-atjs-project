<script>
export default {
    data() {
        return {
            list: []
        }
    },

   async mounted() {
        const localData = localStorage.getItem('pokemon')

        if(localData) {
            console.log('from storage')
            return this.list = JSON.parse(localData);
        }

         const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'

         const data = await fetch(url)
         const pokemon = await data.json()

         localStorage.setItem('pokemon', JSON.stringify(pokemon.results));


         this.list = pokemon.results;
    },

    methods: {
    }
}
</script>

<template>

    <div>
        <h1>Pokedex</h1>

        <div v-for="(item, index) in list" :key="index">
            <div>
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ 
                    index + 1 
                    }.png`" 
                alt="" srcset="">
                <h2>{{ item.name }}</h2>
            </div>

        </div>

        <!-- {{ list }} -->
    </div>
</template>

