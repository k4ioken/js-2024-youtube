const myobj={
    name:"Jack",
    age:19,
    isLoggedIn:true,
    id:Symbol("1234abc")
}
for(key in myobj){
    myobj[key]="NO"
    // console.log(key,":-",myobj[key]);
}  //always use obj[key] instead of obj.key as it treats "key" as new key in objects in latter

