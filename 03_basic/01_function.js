// sum two number
function addNumber(num1,num2){
    return num1+num2;
}

console.log(addNumber(8,9));

// Rest and Spread Operator
function calculatorCartPrice(...num1){
    return num1;

}
console.log(calculatorCartPrice(84,39));

// rest operator used multi value assingned
function calculatorCartPrice(valu1,value2, ...num1){
    return num1;

}
console.log(calculatorCartPrice(84,34,3,43,2));


// use object in function
let user = {
    name: "azmi",
    prince: 380

}

function objectUser(anyObject){
    console.log( `username is ${anyObject.name} and the price is ${anyObject.prince} `);
}

objectUser(user);


