//array shift unshift 


let fruits = ["banana","grapes","mango"];
console.log(fruits);

//if you want to add something in starting of array for this we have to use unshift 
//example

fruits.unshift("pomegrante","papaya");
console.log(fruits);

//Shift will remove element from  starting 

let removeFruit =  fruits.shift();
// fruits.shift();
console.log(fruits);
console.log("remove fruits is ",removeFruit);

//push and pop is faster than the shift and unshift 