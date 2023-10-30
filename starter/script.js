// variable in javascript
/* 
this is my multi-line comment
*/

let myName = "olaoluwa";
console.log(typeof(myName));

let myNewName;
console.log(myNewName);
console.log(typeof(myNewName));


let myNumber = null;
console.log(typeof(myNumber));

let myJob = "programmer"
myJob = "devOps"
console.log(myJob);

let ageMe = 2037 - 1992;

console.log(ageMe);

// let firstName = "olaoluwa";
// let lastName = "Alayande";

// console.log(firstName + " " + lastName);

/*
types of operators in javascript
1. assignment operators =, +=, *=, /=, -=
arithmetic operators 2 + 2, 3 - 2
comparison operators >,>= , <, <=
logical operators 
*/

// drill

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBmi = (markMass) / (markHeight) ** 2;
let johnBmi = (johnMass) / (johnHeight) ** 2;

let higherBmiChecker = markBmi > johnBmi;
console.log(higherBmiChecker);

console.log(markBmi);
console.log(johnBmi);

if (markBmi > johnBmi) {
    console.log(`Mark ${markBmi} is higher than John ${johnBmi}`);
    
}else {
    console.log(`john ${johnBmi} is greater than Mark ${markBmi}`);
}

// Template literals

let firstName = "olaoluwa";
let lastName = "Alayande";
let age = "20";

// let information = "my name is " + firstName + " " + lastName + " and i'm " + age + " years old";
// console.log(information);

let information = `my name is ${firstName} ${lastName} and i'm ${age} years old`;
console.log(information);

/*
if / else statement in javascript is used to check the condition of a statement

*/

let myAge = 15;
let isOldEnough = myAge >= 18;

if (isOldEnough) {
    console.log("my statement is true ✔");
    
}else {
    console.log("my statement is false 🤷‍♂️");
}

let assumption = (String(23));

console.log(typeof(assumption));













