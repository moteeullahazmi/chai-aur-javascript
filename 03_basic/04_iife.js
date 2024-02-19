// IMEMEDIATELY INVOKED FUNCTION EXPRESSION
(function azmi(){
    console.log("azmi india");
})();

(
function azmi(){
    // NAMED IIFE
    console.log("azmi india");
}
)();

// Arrow Function
(() =>{
    console.log("azmi");
})();
    
// PARAMETER IIFE
((AZMI) =>{
    console.log(`aZMI ${AZMI} PARAMETER`);
})();