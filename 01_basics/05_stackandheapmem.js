let name="John"
let anothername=name
anothername="James"  //change in another name wont refect changes in original (name) as a copy of name variable is created
// console.log(name);
// console.log(anothername);  

let userOne={
    name:"John Marston",
    age:34
}
let userTwo=userOne    //this passes memory address (reference) to userTwo as objects (dictionaries) are stored in heap.
userTwo.age=77         //this will reflect changes in userOne aswell because userTwo has reference of userOne.
console.log(userOne);

let arr=[1,2,3,4,5]
let arr2=arr
arr2[1]=90            //this will update second element (2) to 90 in original array
console.log(arr);