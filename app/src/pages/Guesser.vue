<script>
import { mapState, mapActions } from 'vuex';
import GuesserScores from '@/components/GuesserScores.vue';
import CardsList from '@/components/CardsList.vue';

export default {
  components: {
    GuesserScores,
    CardsList,
  },
  computed: {
    ...mapState(['guesser']),
  },

  methods: {
    ...mapActions(['getDeck', 'setNextGuess', 'drawCard']),
  },
};
</script>

<template>
  <h1 class="mt-12">The great guesser game!</h1>


  <div v-if="guesser.deckId">
    <GuesserScores />

    <div class="flex justify-center">
      <button class="guess-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mr-4 mt-4 border border-gray-400 rounded shadow" 
      @click="setNextGuess('red')">Guess Red 🟥</button>
      <br/><br/>
      <button class="guess-button bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow" 
      @click="setNextGuess('black')">Guess Black 🖤</button>
    </div>

    <button     
    class="
    bg-blue-400 
    hover:bg-blue-500 
    text-white 
    font-bold 
    py-2 
    px-4 
    rounded
    mt-4" 
    v-if="guesser.nextGuess" @click="drawCard">Draw a card</button>
    <h2 class="mt-4 text-xl font-bold">Your next guess is: {{ guesser.nextGuess }}</h2>

    <CardsList />
  </div>
  <div class="mt-12" v-else>Please draw a new deck!</div>

  <button 
  class="
  bg-transparent 
  hover:bg-blue-500 
  text-blue-700 
  font-semibold 
  hover:text-white 
  py-2 px-4 
  mt-12
  border border-blue-500 
  hover:border-transparent 
  rounded"  
  @click="getDeck">Draw New Deck</button>
</template>

<style>
img {
  width: 100px;
}

.flex {
  display: flex;
}
</style>
