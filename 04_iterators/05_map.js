const nums=[1,2,3,4,5,6,7,8,9,10]
// const value=nums.map((item)=>{
//     return item+10;
// })  //map returns values unlike forEach
// console.log(value);

const value=nums.map((item)=>(item*5)).map((item)=>(item+10)).filter((item)=>(item>=30)).map((item)=>(item+10))     //chaining of map and filter
console.log(value);