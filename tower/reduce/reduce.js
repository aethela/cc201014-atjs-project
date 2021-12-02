const dataset = [
    'red',
    'blue',
    'black',
    'red',
    'red',
    'black',
    'black',
    'red',
    'black',
    'red',
    'red',
    'red',
    'red',
    'black',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'red',
    'blue',
    'red',
    'blue',
    'red',
    'red',
    'red',
    'blue',
    'red',
    'purple',
    'red',
    'red',
  ];

  const reducer = (acc, currentValue) => { // acc = accumulator, gets returned from one function and then passed on to the next
    
    
    if(acc[currentValue]) {
        acc[currentValue]++
    } else {
        acc[currentValue] = 1
    }
    return acc; // IMPORTANT: RETURN VALUE FROM REDUCER
  }

  const result = dataset.reduce(reducer, {});
  console.log(result);