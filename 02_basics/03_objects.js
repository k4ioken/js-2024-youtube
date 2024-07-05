//singleton ==> formed in constructor ==> Object.create
//object literal ==> no singleton formed
const id=Symbol("id")
const employee={
    name:"James",
    age:19,
    email:"James@xyz.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Friday"],
    [id]:"key1"

} 
// Object.freeze(employee) //freeezes-becomes immutable
employee.name="Jack" //this change wont be reflected as object is freezed
// console.log(employee);
  //object literals method

// console.log(employee.name);
//alternate way
// console.log(employee["name"]);
//unique syntax for symbol datatype
//----IMPORTANT------//
// const mySym=Symbol("key1");
// const newobject={
//     name:"Jack",
//     [mySym]:Symbol("mykey")
// }
// console.log(typeof newobject[mySym]);

employee.greeting=function(){
    console.log(`Welcome back,${this.name}`); //this keyword is used to reference the same object which is used in function definition
}  
console.log(employee.greeting); //function returnback
console.log(employee.greeting());   //works as a function    