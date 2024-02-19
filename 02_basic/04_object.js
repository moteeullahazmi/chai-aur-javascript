let azmia = {
    a:2,
    b:3
}
let imza = {
    c:2,
    d:3
}
let all= {...azmia , ...imza} //spread operator
console.log(all);

console.log(Object.keys(azmia)) //keys find

let course={
    name:"blockchain",
    price:2690

}

let {name:n,price} = course;
console.log(  );