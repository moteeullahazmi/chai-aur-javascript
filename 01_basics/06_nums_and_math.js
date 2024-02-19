// ++++++++++NUMBERS+++++++
const score =400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance) // [Number: 100]

console.log(balance.toString()); //100 but string

console.log(balance.toString()); //100 but string

console.log(balance.toString().length); // 3

console.log(balance.toFixed(2)); //100.00 but string e-commerse website

const otherNumber = 2563.81
console.log(otherNumber.toPrecision()) // 2563.81
console.log(otherNumber.toPrecision(1)) // 3e+3  means 3 exponential 3
console.log(otherNumber.toPrecision(2)) //  2.6e+3
console.log(otherNumber.toPrecision(3)) // 2.56e+3
console.log(otherNumber.toPrecision(4)) // 2564
console.log(otherNumber.toPrecision(5)) // 2563.8
console.log(otherNumber.toPrecision(6)) // 2563.81

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN')) // 10,00,000 indian system

// ++++++++ ++++++++++++MATHS+++++++++++++++

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); // only -ve value convert into positive

console.log(Math.round(4.3));  //round off 4 
console.log(Math.round(4.6));  // 5
console.log(Math.round(4.5));  //5 

console.log(Math.ceil(4.3)); // ceil meaning top 5

console.log(Math.floor(4.3)); 4  

console.log(Math.min(4,5,3,5));  //3

console.log(Math.max(4,5,3,5));  //5

console.log(Math.random())  // 0 to 1 only answer
console.log((Math.random()*10) + 1 )  // in case value o then add 1

console.log(Math.floor(Math.random()*10) + 1 ) 

const min = 10
const max =  20

console.log(Math.floor (Math.random() * (max-min + 1) ) +min)   //important