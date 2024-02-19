// 2. filter:
// The filter function creates a new array with elements that pass a test implemented by the provided function.

const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter((x)=>x%2===0);

console.log(even);