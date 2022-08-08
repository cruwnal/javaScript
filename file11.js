"use strict"
// // undefined 
// //null


let firstName;
console.log(firstName);
//ans - undefined

firstName = "kunal nagwanshi";

console.log(typeof firstName,firstName);
//______________________________________________________________________

let myVariable = null; 

console.log(typeof null);//it will gives you the object as an answer but its a bug you need to remember this things 

console.log(myVariable,typeof myVariable);

myVariable = "kunal nagwanshi";
console.log(typeof myVariable,myVariable);


//BigInt

let myNumber = BigInt(1265657657668768686886865756464646575756565657646564463);
let myNumber2 = 1212132323221321432456534516546435546546567256426n; //this is also the way to save the BigInt
console.log(typeof myNumber,myNumber);
console.log(typeof myNumber2,myNumber2);
console.log(myNumber+myNumber2);

//note you cant add,substraction, addition etc  BigInt data type with anyother data type 

console.log(Number.MAX_SAFE_INTEGER);
