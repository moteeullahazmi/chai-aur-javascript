//JavaScript Date objects represent a single moment in time in a platform-independent format. represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

let now = new Date();
console.log(now.getTime()); //1706761198037 milisecond to convert in second to divide 1000.
console.log(Math.floor(now.getTime()/1000));

// Date.now()
let nowDate = Date.now();
console.log(nowDate);

