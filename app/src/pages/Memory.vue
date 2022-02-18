// Project extension: memory card game to review Composition API
// Reference material:  
// https://learnvue.co/2020/12/how-to-use-lifecycle-hooks-in-vue3/ (13 Feb 2022)
// https://www.youtube.com/watch?v=WQa9-4K3me4 (15 Feb 2022)
// https://tailwindcss.com/docs/ (17 Feb 2022)
// https://www.freecodecamp.org/news/how-to-build-a-memory-card-game-with-vuejs/ (14 Feb 2022)
// https://vuejs.org/api/options-lifecycle.html (18 Feb 2022)

<script>
import _ from 'lodash'
import { ref, watch, computed } from 'vue' // required import to make components reactive
import MemoryCard from '../components/MemoryCard.vue'
export default {
    components: {
        MemoryCard
    },

     setup() {
        // declare card list as a reactive variable
        const cardList = ref([]);
        const userSelection = ref([]);
        let numberOfTurns = 0;

        const status = computed(() => {
            if(cardPairsLeft.value === 0) {
                return `You won! Total number of turns: ${numberOfTurns}`
            } else {
                return `You've found ${8 - cardPairsLeft.value} out of 8 pairs in ${numberOfTurns} turns.`
            }
        }) 

        // 1. filter cardlist for matched value being false 
        // (i.e. cards that have not been matched with an identical one yet)
        // 2. get the total number of unmatched cards
        // 3. divide by 2 to get number of pairs left & return value
        const cardPairsLeft = computed(() => {
            const cardsLeft = cardList.value.filter(
                card => card.matched === false
            ).length / 2;

            return cardsLeft
        })

        // shuffle deck and reassign positions of cards
        const restartGame = () => {
            numberOfTurns = 0;
            cardList.value = _.shuffle(cardList.value);
            console.log(cardList.value);
            cardList.value = cardList.value.map((card, index) => {
                return {
                    ...card,
                    matched: false,
                    position: index,
                    visible: false
                }
            })
            console.log(cardList.value);
        }

        async function createDeck () {
        let cards = [];

        // fetch pokemon API
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        const data =  await fetch(url);
        const pokemon = await data.json();
        const listOfPokemon = pokemon.results;

        // extract random pokemon from the API and save them in the cards array
        for (let i = 0; i < 8; i++) {
            let randomIndex = Math.floor(Math.random() * 151); // generate random int (max 151)
            console.log(randomIndex);

            let cardName = listOfPokemon[randomIndex].name.toString();
            let pokemonIndex = randomIndex;

            cards.push({
                pokemon: cardName,
                indexInAPI: pokemonIndex
            });
        }
        console.log(cards);

        // generate pairs for each card
        cards.forEach(item => {

            let uid = Math.random() * 1000;
            console.log(uid);

            console.log(item);

            cardList.value.push({
                value: item.pokemon,
                uniqueID: uid,
                visible: false,
                position: null,
                matched: false,
                imgURL: item.indexInAPI
            })

            uid = Math.random() * 1000;
            console.log("new" + uid);

            cardList.value.push({
                value: item.pokemon,
                uniqueID: uid,
                visible: false,
                position: null,
                matched: false,
                imgURL: item.indexInAPI
            })
        })

        cardList.value = _.shuffle(cardList.value);
        cardList.value = cardList.value.map((card, index) => {
            return {
                ...card,
                position: index
            }
        })
        }
        createDeck()

        // on click, set visibility of clicked card to true
        const flipCard = (payload) => {
            cardList.value[payload.position].visible = true

            // save selected card's payload to the userSelection array
            if (userSelection.value[0]) { // if a card is already selected
                // prevent user from matching a card with itself
                if(userSelection.value[0].position === payload.position &&
                userSelection.value[0].faceValue === payload.faceValue) 
                {
                    return
                } else {
                    userSelection.value[1] = payload;                    
                }
                
            } else { // if no card is selected yet
                userSelection.value[0] = payload
            }
        }

        // watch for remaining pairs in case of win
        // watch(cardPairsLeft, (currentValue) => {
        //     if(currentValue === 0) {
        //         gamesWon++;
        //     }
        // })

        watch(userSelection, (currentValue) => {
            if (currentValue.length === 2) {
                const card1 = currentValue[0]
                const card2 = currentValue[1]

                // check if cards match
                if(card1.faceValue === card2.faceValue) {

                    // verify matching cards
                    cardList.value[card1.position].matched = true
                    cardList.value[card2.position].matched = true
                } else {
                    // wait 1.5 before flipping mismatched cards back over
                    setTimeout(() => {
                        // update visibility of selected mismatching cards
                        cardList.value[card1.position].visible = false
                        cardList.value[card2.position].visible = false
                    }, 1500)
                }
                numberOfTurns++;
                console.log('turns in watch userselection: ' + numberOfTurns);
                userSelection.value.length = 0;
            } 
        }, { deep: true }) // track deep value inside of selection array

        // return everything that should be passed to component
        return {
            cardList,
            flipCard,
            userSelection,
            status,
            cardPairsLeft,
            restartGame,
            createDeck,
        }
    }
}
</script>


<template>
        <h1 class="py-4 mt-12">Pokémon Memory</h1>
        <h2 class="font-bold text-xl">Gotta catch 'em all!</h2>

        <!-- use vue's animation API to animate shuffling the cards -->
        <transition-group tag="section" class="game-board" name="shuffle-card"> 
            <memory-card 
            v-for="(card) in cardList" 
            :key="`${card.value}-${card.uniqueID}`"
            :value="card.value"
            :visible="card.visible"
            :position="card.position"
            :matched="card.matched"
            :imgURL="card.imgURL"
            @select-card="flipCard"
            />
        </transition-group>

        <h2 class="mt-4 font-bold"> {{ status }} </h2>

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
        @click="restartGame">
        Restart Game
        </button>
</template>


<style>
    .game-board {
        display: grid;
        grid-template-columns: 130px 130px 130px 130px;
        grid-template-rows: 130px 130px 130px 130px;
        grid-column-gap: 24px;
        grid-row-gap: 24px;
        justify-content: center;
        margin-top: 24px;
    }

    .shuffle-card-move {
        transition: transform 0.8s ease-in;
    }
</style>