const employee={
    name:"Jack",
    age:19,
    isLoggedIn:true,
    welcomeMessage:function(){
        console.log(`welcome,${this.name}`);
        
    }
}
// employee.welcomeMessage()
// employee.name="James"
// employee.welcomeMessage()

// console.log(this);   //global object in node is empty object {}
//global object in browser is window

//--------ARROW FUNCTION-------
const addTwo=(num1,num2)=>{
    return num1+num2
}  //arrow function explicit return type
// console.log(addTwo(9,8));
//basic syntax of arrow: ()=>{}

const multtwo=(num1,num2)=>(num1*num2)   //implicit return type 
// console.log(multtwo(2,9));

 