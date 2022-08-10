// arrray push pop

// array shift unshift 

let fruits = ["banana","orange","mango"];
console.log(fruits);
//if you needs to add one more fruits in  the last in this array 
//we use "push" for it.
//push method can change  the original array 

fruits.push("grapes");
console.log(fruits);


//pop method - in pop , it will remove the last element in the  array 
let singer = ["lata ji","sonu nigam","md rafi sab","sidhu moosewala"];
//console.log(singer.pop());
let poppedSinger = singer.pop();
//console.log(poppedSinger);
console.log(singer);
console.log(Array.isArray(singer));

console.log("popped singer is ",poppedSinger);



//with the help of pop method we have remove the sidhu moosewala from the end of the array now we store same element in somewhere else.


