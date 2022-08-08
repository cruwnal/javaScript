// ans or operator 

let firstName = "kunal";
let age = 24;

// if (firstName[0]==="k"){
//     console.log("your name is start with age ");

// }
// if(age>18){
//     console.log("you can give the NDA exam ");
// }

if (firstName[0]==="k" && age>18){
    // console.log("yor name is starts with k and you can give the NDA exam");
    console.log("inside if");

}
else{
    // console.log("your name is not starting with k and you are not eigiable for NDA exam");
    console.log("inside else");
}

if(firstName[0]==="l" || age>18){
//  console.log(`one of these thing will be correct if either ${firstName} index[0] is l index or ${age}  must be greater than 18`)
console.log("inside if");
}
else{
    // console.log("both the condition is wrong ")
    console.log("inside else");
}

