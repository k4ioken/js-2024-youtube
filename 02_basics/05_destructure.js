const employee={
    name:"Jack",
    age:19,
    employeeid:Symbol("id"),
    isLoggedIn:true
}
const {name}=employee    //destructuring an object

const {employeeid:id}=employee    //alternate names to keys can be given while destructuring 
// console.log(id);

//---------JSON API-------//
//json is an object
// {
//    " name":"James",
//     "age":23,
//     "id":"123abc"
// }      
//----in a json keys are strings("" enclosed),APIs are returned in json format or array of objects---- 



