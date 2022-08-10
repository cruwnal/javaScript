//primitive and reference data types 
//primitive type data types 

let num1 = 6;
let num2 = num1;
console.log("value of num1 is",num1);
console.log("value of num2 is", num2);
num1++;
console.log("after incrementing the value ");
console.log("value of num1 is",num1);
console.log("value of num2 is", num2);
//result after incrimenting 
//num1 = 7;
//num2 = 6;

//reference types 
//array 

let array1 = ["item1","item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after push an element in the last , let see the result ");
console.log("array1",array1);
console.log("array2",array2);
//result after the push an element in the last 
// array1 =["item1","item2","item3"];
// array2 =["item1","item2","item3"];