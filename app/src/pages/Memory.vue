// Project extension: memory card game to practice Composition API

<script>
import MemoryCard from '../components/MemoryCard.vue'
export default {
    components: {
        MemoryCard
    },

    setup() {
        const cardList = [];

        for (let i = 0; i < 16; i++) {
            cardList.push(i)
        }

        // return everything that should be passed to component
        return {
            cardList
        }
    }


}

</script>


<template>
        <h1 class="py-4">Memory Card Game</h1>
        <h2>Let's play Pokémon memory!</h2>

        <section class="game-board">
            <memory-card 
            v-for="(card, index) in cardList" 
            :key="`card-${index}`"
            :value="card"/>
        </section>



</template>


<style>
    .card {
        border: 5px solid #ccc;
    }

    .game-board {
        display: grid;
        grid-template-columns: 100px 100px 100px 100px;
        grid-template-rows: 100px 100px 100px 100px;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        justify-content: center;
        margin-top: 24px;
    }

</style>