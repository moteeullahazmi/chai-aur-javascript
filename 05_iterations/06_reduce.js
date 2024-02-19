const arr = [1,2,3,4,5,]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc:$(acc) and currval : ${currval}`);
//     return acc+currval
// },0)

const myTotal = arr.reduce ( (acc,curr) => acc*curr,1)

console.log(myTotal);



