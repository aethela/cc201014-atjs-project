<template>
  <h2 class="text-2xl mt-12">Guesses: {{ guesses }}</h2>
  <h2 class="text-2xl">Points: {{ points }}</h2>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'GuesserScores',

  computed: {
    guesses() {
      return this.$store.state.guesser.guesses;
    },
    points() {
      return this.$store.state.guesser.points;
    },
  },
};
</script>
