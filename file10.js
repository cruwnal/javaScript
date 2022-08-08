"use strict"
// template string 
let age = 22;
let firstName = "kunal";

// "my name is kunal and my age is 24"

// let aboutMe = "my name is " + firstName+" and my age is "+ age;

// for template string method we have to use grave accent insted of single quote and double quote 


let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe);
