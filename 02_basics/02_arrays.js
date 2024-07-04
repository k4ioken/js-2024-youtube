const arr1=[1,2,3]
const arr2=[4,5,6]
//arr1.push(arr2); //inserts arr2 as last element of arr1,returns new length of array if console logged

// console.log(arr1[3][1]);
// arr2.pop()
// console.log(arr1);

// console.log(arr1.concat(arr2)); //joins both arrays,returns a new array with both the arrays unaffected

//better approach than concat()==>spread 
// const arrA=[1,2,3]
// const arrB=[5,6,7]

// let arrC=[...arrA,...arrB] //breaks down (spreads) both array by using ...
// console.log(arrC);
// const newarr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const newbetterarr=newarr.flat(Infinity)  //.flat un-nests all subarrays and concatenates them
// console.log(newbetterarr);

// const name="James"
// console.log(Array.isArray(name));
// console.log(Array.from(name));

// const name2="John"
// const name3="Jack"
// console.log(Array.of(name,name2,name3));
// namearr=[name,name2,name3]
// console.log(namearr)