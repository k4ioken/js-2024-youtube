//forEach
const arrNames=["Jack","James","Jason","Joe"]
// function print(item){
//     // console.log(item);
// }
// arrNames.forEach(print);    //function reference passed.

//FUNCTION CAN BE DEFINED DIRECTLY IN FOREACH LOOP
// arrNames.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })
      //iterator and function is passed in forEach
const objarr=[{name1:"Jack",
    age1:19
},{name2:"James",age2:20}]

objarr.forEach((item)=>{
    for(key in item){
        console.log(key,":-",item[key]);  //remember to access keys from item instead of objarr
    }
})