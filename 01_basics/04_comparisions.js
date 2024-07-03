//returns bool
console.log(0==null); //returns false as null is not converted to number in ==(equality check)
console.log(0>=null); //returns true as in comparision operator null gets converted to number 
//strict check also checks datatype
console.log(1==true); //returns true
console.log(1===true); //returns false //checks value as well as data type