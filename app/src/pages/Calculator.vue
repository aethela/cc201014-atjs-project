<template>
  <div>
    <h1 class="">Calculator</h1>

    <div id="output-fields">
        <div>
        <strong>Calculation</strong>
        <p class="display-calculation">{{ lastNumber }} {{ operation }} {{ currentNumber }}</p>
        </div>

        <div>
        <strong>Result</strong>
        <p class="display-result">{{ result }} </p>
        </div>
    </div>

    <br />

        <button class="clear-button
    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-l"
    @click="clearOutput">C</button>

    <button class="operation-button
    bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5 " 
    @click="addNumber('+')">+</button>

    <button class="operation-button
    bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5" 
    @click="addNumber('-')">-</button>

    <button class="operation-button
    bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5" 
    @click="addNumber('*')">*</button>
    
    <button class="operation-button
    bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-5" 
    @click="addNumber('/')">/</button>
    <!-- Room for other operations -->

    <button class="result-button
    bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-r"
    @click="showResult">=</button>

    <br/> <br/>

    <div class="digit-button-container
    grid grid-cols-3
    gap-x-4
    gap-y-6">
        <button
        v-for="number in numberKeys"
        @click="pushNumber(number)"
        :key="number"
        class="digit-button
        bg-white hover:bg-gray-100 
        text-gray-800 font-semibold 
        py-2 px-4
        border border-gray-400 
        rounded shadow
        ">
        {{ number }}
        </button>
    </div>

    <br />

  </div>
</template>

<script>
const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

export default {
  data() {
    return {
      lastNumber: 0,
      currentNumberArray: [],
      numberKeys,
      operation: '',
      result: 0
    };
  },

  computed: {
        currentNumber() {
            // We turn the array into a number so we don't need to convert
            // any other istance of the currentNumber
            return parseInt(this.currentNumberArray.join(""), 10) || 0;
        },
  },

  methods: {
    pushNumber(numberStr) {
        // Just add the last number to the array
        this.currentNumberArray.push(numberStr);
    },

    addNumber(operation) {
        // Store the currentNumber in memory of the lastNumber
        this.lastNumber = this.currentNumber;
        this.currentNumberArray = [];

        if(operation === '+') {
            this.operation = '+';

        } else if (operation === '-') {
            this.operation = '-';

        } else if (operation === '*') {
            this.operation = '*';

        } else if (operation === '/') {
            this.operation = '/';
        }
    },

    showResult() {
        
        if(this.operation === '+') {
            this.result = this.lastNumber + this.currentNumber;
        } else if (this.operation === '-') {
            this.result = this.lastNumber - this.currentNumber;
        } else if (this.operation === '*') {
            this.result = this.lastNumber * this.currentNumber;
        } else if (this.operation === '/') {
            this.result = this.lastNumber / this.currentNumber;
        } else {
            this.result = 0;
        }

        this.currentNumberArray = [...String(this.result)];
    },

    clearOutput() {
        this.lastNumber = 0;
        this.currentNumberArray = [];
        this.result = 0;
    },

    // concatOutput() {
    //     let operationString = '';

    //     if(operation === 'addition') {
    //         operationString = this.lastNumber.toString() + '+' + this.currentNumber.toString();

    //     } else if (operation === '-') {
    //         operationString = this.lastNumber.toString() + '-' + this.currentNumber.toString();

    //     } else if (operation === '*') {
    //         operationString = this.lastNumber.toString() + '*' + this.currentNumber.toString();

    //     } else if (operation === '/') {
    //         operationString = this.lastNumber.toString() + '/' + this.currentNumber.toString();
    //     } else {
    //         operationString = this.currentNumber.toString();
    //     }

    //     return operationString;
    // }

  },
};
</script>

<style>
.displayNumber {
    font-family: monospace;
}

.digit-button-container {
    max-width: 300px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

.display-calculation, .display-result {
    font-size: 24px;
    display: inline-block;
    margin-left: 24px;
}

</style>