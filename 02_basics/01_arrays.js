const myArr=[1,2,3,4,5]
// console.log(myArr[2]);

//copy operations creates create shallow copies(copy with same reference as original array)
//deep copy==> does not share the same reference(completely independent copy)


//One way to make a deep copy of a JavaScript object, if it can be serialized, is to use JSON.stringify() to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:

const names=["James","John","Jack"]
// const myArr2=Array(1,2,3,4,5)
// myArr.push("James")
// myArr.pop()
// console.log(myArr);
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newarr=myArr.join() //converts array into string(comma separated)
// console.log(typeof newarr); //returns string

//---SLICE AND SPLICE----//
const arr=[1,4,6,8,9]
console.log(arr);
console.log(arr.slice(1,3)); //returns copy of subarray from start to end-1,original is unaffected
console.log(arr.splice(1,3)); //returns a subarray which is now deleted from the subarray,from start to 'n' units of index.,original array only has remaining undeleted elements left.
console.log(arr);
