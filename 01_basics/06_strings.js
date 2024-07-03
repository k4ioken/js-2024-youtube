const name="James"
const age="19"
//console.log(name+age+"hello"); //bad practice

//better pratice
// console.log(`Hello,this is ${"James"} this is my js practice session no. ${"7"}`);

const newstring= new String('James') //string is object,key based indexing can be seen in console
// console.log( typeof newstring); //returns object type

// console.table([newstring.length,newstring.toUpperCase(),newstring.toLowerCase(),newstring.charAt(2),newstring.indexOf("m")])  //different methods of string


const newnewstring=newstring.substring(0,4)
// console.log(newnewstring);
const newstringOne="    James    "
// console.log(newstringOne.trim());
//trimEnd and trimStart are also there

const url="https://www.xyz%20hello.com"
// console.log(url.replace("%20","-")); //replaces first with second

// console.log(url.includes("hello"));
 //==> checks occurence of substring,returns bool


