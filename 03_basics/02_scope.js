var c=900
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a); //error
// console.log(b); //error
// console.log(c); //displays (wrong as it does not follow block scope)
//also global scope variable changes if change is made in block scope for var
//-----GLOBAL SCOPE FOR BROWSER IS WINDOW--------

function one(){
    const a=10
    function two(){
        const b=20
        console.log(a);
    }
    // console.log(b); //==>out of scope
    two()
}
//one()
// two() //==>out of scope as two has one() as global scope
addOne()   //accessing before definition and declaration is allowed in functions
function addOne(num){
    return num+1
}   //function

// addTwo()   //throws error as in expressions,calling is not allowed before initialisation
const addTwo=function(num){
    return num+2
}   //expression

 
