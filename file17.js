"use strict"
// nested if else 


// winning number 19
// 19 - your guess is right 
// 17 too low
// 20 too high 

let winningNumber = 19;
//how we can take user input 
//we can use prompt function which will take user input from your browser 

//prompt will take input only in "String"
// we are using +in front prompt function to conver string into number
let userGuess = +prompt("guess a number");

console.log(typeof userGuess,userGuess);

if(userGuess===winningNumber){
    console.log("your guess is right ");
}
else{
    if(userGuess<winningNumber){
        console.log("Too low!!!");
    }
    else{
        console.log("Too high");
    }
}
// else if(userGuess<winningNumber){
//     console.log("too low");

// }
// else{
//     console.log("too high");
// }

