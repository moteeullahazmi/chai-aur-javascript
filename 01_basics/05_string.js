const name = "moteeullahazmi";
const repoCount = 50;

// console.log(name + repoCount + " Value");



// BackStick 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}` );


const gameName = new String('moteeullah');
console.log(gameName)

console.log(gameName[0]); //m

console.log(gameName.__proto__); // {} means object

console.log(gameName.length); //10

console.log(gameName.toUpperCase()); //MOTEEULLAH

console.log(gameName.charAt(2)) ; // which index the character show --- t -- (mot) 0123 

console.log(gameName.indexOf('t')); // which charecter the index 

const newString = gameName.substring(0,4); // start from 0 index and but 4 index  not include. --mote  not -ve value 
console.log(newString);//

const anotherString = gameName.slice(-8,8) // negative value include but start reverse  --
console.log(anotherString)

const newStringname = String('  Moteeullah    ');
console.log(newStringname);
console.log(newStringname.trim());  // starting space end space remove --moteeullah

const url = "https://azmi.com/moteeullah%20azmi"
console.log((url.replace('%20','-'))) // find %20 and replace the output is -- https://azmi.com/moteeullah-azmi

console.log(url.includes('za')) //find keyword only true and false answer

const basic = String("azmi-imza-iran-hyper");
console.log(basic.split('a')); //split means divide one the basis of - after show in array