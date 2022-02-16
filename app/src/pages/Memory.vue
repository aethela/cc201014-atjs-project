<script>
export default {

}

</script>


<template>
        <h1 class="py-4">Memory Card Game</h1>
        <h2>Let's play Pokémon memory!</h2>

        <section class="game-board">
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
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