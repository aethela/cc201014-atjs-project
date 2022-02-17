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

    <div class="text-center">
        <h1 class="py-4 mt-12">Pokedex</h1>

    <div class="justify-center flex flex-wrap gap-x-8 gap-y-8">
        <div 
        v-for="(item, index) in list" :key="index" 
        class="
        px-4 py-2 
        bg-gray-100 
        rounded-xl 
        transition duration-500 ease-in-out 
        transform hover:-translate-y-1 hover:scale-110 
        hover:shadow-xl hover:bg-blue-200">
            <div>
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ 
                    index + 1 
                    }.png`" 
                alt="" srcset="">
                <h2>{{ item.name }}</h2>
            </div>

        </div>
    </div>

        <!-- {{ list }} -->
    </div>
</template>

