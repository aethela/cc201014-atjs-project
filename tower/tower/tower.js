const height = process.argv[2] || 10;

// get the last layer and the highest amount of stones to calculate the air
const bottomLayer = height * 2 - 1;

for(let layer = 1; layer <= height; layer++) {

    const stones = layer * 2 - 1;
    const air = (bottomLayer - stones) / 2;
    console.log(' '.repeat(air) + '#'.repeat(stones + ' '.repeat(air)));
}


//console.log('Hello CLI', height);

// formula: x * 2 - 1

// print process.argv
// argv.forEach((val) => {
//     console.log(val * 2 - 1);
//   });

// console.log('  *  '); // 1 * 2 - 1
// console.log(' *** '); // 2 * 2 +1
// console.log('*****'); // 3 * 2 -1