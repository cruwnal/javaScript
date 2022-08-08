//trim() - this method is used for removing the space in front of the string and in back of the string.
//toUpperCase() - to 
//toLowerCase()


let firstName = "           kuNal nagwanshi         ";
console.log(firstName.length);

firstName.trim();
let newString = firstName.trim(); //"kunal"
console.log(newString,newString.length);

let uprCase = firstName.toUpperCase().trim();
let lwrCase = firstName.toLowerCase().trim();
console.log(uprCase);
console.log(lwrCase);

//slice()
// start index 
// end index

let lastName = lwrCase.slice(-10);
console.log(lastName);