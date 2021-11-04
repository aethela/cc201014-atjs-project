<script>
const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/';

// Cardsymbol switch
function cardSymbol() {
  switch (this.card.suit) {
    case 'CLUBS':
      return '♣️';
    case 'SPADES':
      return '♠️';
    case 'DIAMONDS':
      return '♦️';
    case 'HEARTS':
      return '♥️';
    default:
      break;
  }
}

function validateGuess(card, nextGuess) {
    const colors = {
        'SPADES': 'black',
        'HEARTS': 'red',
        'CLUBS': 'black',
        'DIAMONDS': 'red'
    }

    const cardColor = colors[card.suit]

    return cardColor == nextGuess
}

export default {

    data() {
        return {
            deckId: undefined,
            cards: [],
            nextGuess: undefined,
            guesses: 0,
            points: this.$store.state.points,
        }
    },

    computed: {
        cardAPI() {
            return `https://deckofcardsapi.com/api/${ this.deckId }/draw/?count=2/`;
        },

    },

    methods: {
       async getDeck() {
           const { deck_id } = await fetch(url).then(
               (r) => r.json());
           this.deckId = deck_id;
        },

        guessCard(color) {
            this.nextGuess = color;
        },


        async drawCard() {
            const { cards } = await fetch(this.cardAPI).then(
                (r) => r.json());
            //this.cards.push(cards[0]);

            this.guesses++;

            if(validateGuess(cards[0], this.nextGuess)) {
                // guess was correct
                this.$store.commit('incrementPoints');
            }

            const cleanCard = {
                value: cards[0].value,
                symbol: cardSymbol(cards[0]),
                image: cards[0].image,
            }

            this.cards.push(cleanCard);
        },
    },
};
</script>


<template>
    <div>
        <h1>Guesser Game</h1>

        <button @click="getDeck">Get a new Deck</button>

        <div v-if="deckId">
            <button @click="drawCard">Draw a Card</button><br />

            <button @click="guessCard('red')">Red</button><br />
            <button @click="guessCard('black')">Black</button><br />

            <h1>Points: {{ points }}</h1>
            <h1>Guesses: {{ guesses }}</h1>

            <div v-for="card in cards">
                {{ card.value }} of {{ card.symbol }}
                <img :src="card.image" :alt="card.value" />
            </div>

            <!-- {{ nextGuess }} -->
        </div>

        <div v-else>Please draw a new deck!</div>
    </div>
</template>

<style>
img {
    width: 100px;
}
</style>
