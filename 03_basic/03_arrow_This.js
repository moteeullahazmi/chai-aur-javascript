// this keyword current context show
let dataInfo = {
    username:"azmi",
    price : 932,
    Message: function(){
        console.log(`my username is ${this.username} and price is ${this.price}`);
    }
}
console.log(dataInfo);
console.log(this);

// Arrow Function

var azmi = (num1,num2)=>(num1+num2)
console.log(azmi(23,33));

