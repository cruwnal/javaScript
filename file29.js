// how to clone array ---> means seprate copy 


//how to concatenate two array 

// let array1 = ["item1","item2"];
// let array2 = array1;
// console.log(array1===array2);



let array1 = ["item1","item2"];
// let array2 = ["item1","item2"];
//slice method for cloning  is a fastest way of cloning 
//let array2 = array1.slice(0);//in .silce(0) ---> it will gona start from zeroth index in will goes upto last index.

//one way of clone is by using the slicing method 
// let array2 = [].concat(array1);//[].concat(array1) method to create copy of the array 

//new way 
//spread operator //best way to clone array [...array1] is called spread operator 

let array2 =[...array1];

array1.push("item3"); // just uncomment this line and you will gona see the proof that both the array is deferent 

console.log(array1===array2);
console.log(array1);
console.log(array2);

// concat 

let arr1 = ["item1","item2"];
let oneMoraArray = ["Delhi","Mumbai","Kolkata","bangalore"];
// let arr2 = arr1.slice(0).concat(array1,["item3","item4"]);
let arr2 =[...arr1,...oneMoraArray,"kunal","nagwnashi"]
console.log(arr1===arr2);
console.log(arr1);
console.log(arr2);