//constructor(singleton) method
const newobject=new Object()
// console.log(newobject);  //returns empty object
newobject.id=Symbol("123abc")
newobject.name="Jack"
newobject.isLoggedIn=false
// console.log(newobject);

const newuser={
    name:"James",
    age:19,
    fullname:{
        firstname:"James",
        lastname:"Smith"
    } //nesting objects
}
// console.log(newuser?.fullname?.lastname)     // "?" executes statements only if fullname is present ,otherwise returns undefined

const obj1={
   1:"a",
   2:"b",
   3:"c",
   4:"c" 
}
const obj2={
    5:"e",
    6:'f'
}
const obj3={obj1,obj2}  // console.log(obj3); //makes new object with 2 elemental objects obj1 and obj2 ,does not concatenate

// obj4= Object.assign({},obj1,obj2)     //concatenates all the objects into the first argument passed,it is preferred to use empty object as first argument to prevent alteration in obj1;if obj1 is passed as first argument then obj1 will be altered as well.

// console.log(obj4);

//better approach

// obj5={...obj1,...obj2}   //spread operator like arrays
// console.log(obj5);


//ARRAY OF OBJECTS
// const arrofobj=[{1:"a",name:"b"},{3:"c",4:"d"}]
// console.log(arrofobj[0].name);

const obj6={
    name:"James",
    age:19,
    id:"122345",
    isLoggedIn:true
}
// console.log(Object.keys(obj6)); //returns array of keys
// console.log(Object.values(obj6)); //array of values
// console.log(Object.entries(obj6)); //array of key-value pairs
console.log(obj6.hasOwnProperty("grade")); //checks if a specific property(key) is present in object,returns boolean