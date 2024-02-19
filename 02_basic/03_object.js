let Symbolew = Symbol("MyName")
let myObj={
    "name" : "Moteeullah Azmi",
    roll: 45,
    [Symbolew]:"azmi",
    city   : "Azamgarh"

}
// console.log(myObj["name"]);
// myObj.name ="Azmi Enough";

// console.log(myObj);
console.log(typeof(myObj[Symbolew]));