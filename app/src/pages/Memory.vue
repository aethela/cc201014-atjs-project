<script>
export default {
    data() {
        return {
            cards : [
                {
                    name: 'Bulbasaur',
                    img: 1,
                },

                {
                    name: 'Charmander',
                    img: 4,
                },

                {
                    name: 'Squirtle',
                    img: 7,
                },

                {
                    name: 'Caterpie',
                    img: 10,
                },

                {
                    name: 'Weedle',
                    img: 13,
                },

                {
                    name: 'Pidgey',
                    img: 16,
                },

                {
                    name: 'Rattata',
                    img: 19,
                },
            ]
        }
    },

    created() {
        this.cards.forEach((card) => {
           this['isFlipped'] = false;
        });
    },

    methods: {
        flipCard(card) {
            card.isFlipped = true;
        }
    }
}

</script>


<template>
        <h1 class="py-4">Memory Card Game</h1>
        <h2>Let's play!</h2>

        <div id="memory-game">
            <div class="card-row">
                <div class="columns-6 max-w-auto">
                    <div class ="flex justify-center mt-8">
                        <div v-for="card in cards" class="mr-4 flip-container" :class="{ 'flipped': card.isFlipped }" @click="flipCard(card)">
                            <div class="memory-card">
                                <div class="front shadow-md">
                                    <img width="100" height="100" src="@/assets/card_pattern.jpg"></div>
                                <div class="back shadow-md bg-blue-100">
                                    <img width="100" height="100" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.img}.png`"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<style>
.flip-container {
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    perspective: 1000;
    cursor: pointer;
    position: relative;
}
.front,
.back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 0.6s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -ms-transition: 0.6s;
    -ms-transform-style: preserve-3d;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
}
.back {
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    position: absolute;
}

.flip-container.flipped .back {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
}

.flip-container.flipped .front {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

</style>