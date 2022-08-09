//for loop


console.log("loop by let i");

for(let i = 0;i<=9;i++){
    console.log(i);
}

//console.log(i);  Uncaught ReferenceError: let i is not defined
// the value of let i does not exist outside the loop.


console.log("loop by var i");
for(var i = 0;i<=20;i++){
    console.log(i);
}

console.log("the value of var i exist in outside the loop ",i)