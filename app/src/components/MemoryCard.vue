<script>
import { computed } from 'vue';
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        // define visibility status as a prop for keeping track of visible cards
        visible: {
            type: Boolean,
            default: false
        },
        position: {
            type: Number,
            required: true
        },
        matched: {
            type: Boolean,
            default: false
        },
        imgURL: {
            type: Number,
            required: true
        }
    },

    setup(props, context) {

        // for adding a flipped class to a currently front-facing card for CSS animation
        const flippedStyles = computed(() => {
            if(props.visible) {
                return 'is-flipped'
            }
        })

        const selectCard = () => {
            context.emit('select-card', {
                position: props.position,
                faceValue: props.value 
            })
        }

        return {
            flippedStyles,
            selectCard
        }
    }


}
</script>


<template>
<div class="card" :class="flippedStyles" @click="selectCard">
    <div class="
    card-face front
    bg-blue-100">
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgURL + 1}.png`" :alt="value">
    </div>
    <div class="card-face back">
    </div>
    <p> {{ imgURL }} </p>
</div>
    
</template>


<style>
    .card {
        position: relative; /* important for making back and front overlap */
        cursor: pointer;
        transition: 0.5s transform ease-in;
        transform-style: preserve-3d;
    }

    .card.is-flipped {
        transform: rotateY(180deg);
    }

    .card-face {
        width: 100%;
        height: 100%;
        position: absolute; /* important for making back and front overlap */
        backface-visibility: hidden;
    }

    .card-face.front {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        border-radius: 100px;
        transform: rotateY(180deg);
    }

    .card-face.back {
        background-image: url('../assets/pokeball.png');
        background-position: center;
        background-size: cover;
        border-radius: 100px;
        color: white;
    }
</style>