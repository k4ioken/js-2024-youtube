function helloWorld(){
    console.log("Hello World");
}
// helloWorld() //function call
// helloWorld   //function reference

// function loginUserMessage(username="Jack"){
//     if(!username){
//         console.log("Please enter valid Username");
//         return
//     }
//     console.log(`Welcome,${username}`);
//     return
// }



function addTwoNumbers(...num1){
    return num1
}   //rest (...) operator takes dynamic number of input and returns it as array 


// const ansarr=addTwoNumbers(200,230,400,500)
// let sum=0
// for (let index = 0; index < ansarr.length; index++) {
//     sum+=ansarr[index]
    
// }
// console.log(sum);

//------OBJECT IN FUNCTION--------

const obj={
    name:"Jack",
    age:19,
    isLoggedIn:true
}
function handleObject(testobject){
    console.log(`name is: ${testobject.name}`);
    console.log(`age is: ${testobject.age}`);
    console.log(`Logged in status: ${testobject.isLoggedIn}`);
}
// handleObject(obj)
