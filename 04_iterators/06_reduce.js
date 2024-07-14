const arr=[1,2,3,4,5,6,7,8]
//reduce is used usually to perform operations like sum of all or product of all

let value=arr.reduce((acc,currval)=>acc+currval,)
// console.log(value); 
//acc+currval denotes operation to be performed and value after "," denotes initial value

//other syntax
const value2=arr.reduce(function(acc,currval){
    return acc+currval;
},0)
// console.log(value2);

//initial value can be anything
//if initial value is not passed ,then array's first element is passed as initial value in reduce method

const objarr=[{name:"Jack",age:19,pay:10000},
    {name:"James",age:29,pay:20000},
    {name:"Jake",age:39,pay:30000},
    {name:"Jason",age:49,pay:40000}
]

const totalpay=objarr.reduce((acc,item)=>(acc+item.pay),0)
console.log(totalpay);