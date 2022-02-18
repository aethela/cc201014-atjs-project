<template>
  <div class="flex justify-center mt-8 flex-wrap">
    <Card
      class="mr-2 mt-4"
      v-for="card in cards"
      :card="card"
      :key="`${card.value}-${card.symbol}`"
    />
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'CardList',

  components: {
    Card,
  },

  computed: {
    cards() {
      return this.$store.state.guesser.cards;
    },
  },
};
</script>
