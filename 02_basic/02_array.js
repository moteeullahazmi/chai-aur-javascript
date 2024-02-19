const marvel_heros = ["thor", "ironman", "batman"];
const dc_heros = ["superman", "splash", "hero"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros.splice(1,2));
// console.log(marvel_heros);

// concat
//  let con = marvel_heros.concat(dc_heros);
//  console.log(con);

// spread operator
let all_heros = [...dc_heros, ...dc_heros];
console.log(all_heros);

// flat array The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let subArray = [4,6,7,[9,4,5],[2,4,[5,6]]]
console.log(subArray.flat(Infinity));

// from The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

console.log(Array.isArray("Moteeullah Azmi"));
console.log(Array.from("Moteeullah Azmi"));
console.log(Array.from({key:"Moteeullah Azmi"})); //interesting [] empty 

// of The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
let score1= 100;
let score2 = 300;
let score3 = 499;
console.log(Array.of(score1,score2,score3));
