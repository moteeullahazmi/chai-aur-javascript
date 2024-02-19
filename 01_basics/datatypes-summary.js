// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Symbol
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id===anotherId);  false

// Reference ( Non primitive)

// Array [], Objects {}, Functions()


// javascript is dynamic language 



const heros = ["azmi", "adil", "emad", "saif"]  //array

let myObj= {
    name:"azmi",
    age:23
}

function azmi(){
    
        console.log("azmi")
    }
const myFunction = function (){
    console.log("Hello World");
}

// // datatype check typeof()
// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof heros);
// console.log(typeof azmi);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), copy
//  heap (Non-Primitive) refrence  

let myYoutubeName = "moteeullahazmi";
let anotherName = myYoutubeName;
anotherName ="gymaurcode"


console.log(myYoutubeName);
console.log(anotherName);
console.log(Boolean(-5));
