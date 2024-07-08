//Immediately Invoked Function Expressions (IIFE)

// (function helloWorld(){
//     console.log("Hello World");
// }
// )()

// basic syntax: (function funcname(){
// body})()

(function one(num1){
    console.log(num1);
})(90);  //named IIFE
//remember to terminate first IIFE with ";" to execute second IIFE

((num2)=>{
    console.log(num2);
})(76);   //unnnamed IIFE (arrow)

