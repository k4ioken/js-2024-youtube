const accountId=7821;  //const cannot be changed once declared
let accountEmail="kunal@github.com";
var accountName="kunal";
Password="123456";
let accountState  //assigns an undefined let
                    //you cant declare const as undefined,there has to be some constant value in const as the name suggests

// declaring anything without type results in var declaration,avoid using it
//ex: accountName="kunal" ==> declares var

console.table([accountId,accountName,Password,accountEmail,accountState]); //saves time instead of using log

/* var should not be used as it does not follow block scope and functional scope,let is an improved version of var.
*/