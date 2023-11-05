"use strict";

let hasDriversLicence = false;
let passTest = false;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can Drive");

function identity () {
    console.log("my name is olaoluwa");
    console.log("I'm an ICT instructor");
}

identity();
identity();

// function fruitProcessor (apples, oranges) {
//     const juice = `fruit with ${apples} apples and ${oranges} oranges are good for the body`;
//     return juice;
// }

// let result = fruitProcessor(3, 4);
// console.log(result);
// console.log(fruitProcessor(10, 20));


// calculating users age with function

// function declaration
// this type of function can be hoisted

function ageCalulator (birthYear) {
    let ageResult = 2023 - birthYear;
    return ageResult;
    // we can also return our operation directly
    // return 2023 - birthYear;

}
console.log(ageCalulator(2005));

// Example of an expression function or annonymous function
let myCalculation = function (a, b) {
    return a * b;
}
console.log(myCalculation(5, 5));

// this can't be Hoist
// console.log(myName);
// let myName  = "ola";

// Arrow function

let myMath = (a, b) => {
    return `the multiplication of ${a} and ${b} is ${2 * 5}`;

}

console.log(myMath(2,3));

// function calling another function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    let cutApples = cutFruitPieces(apples);
    let cutOranges = cutFruitPieces(oranges);
    const juice = `fruit with ${cutApples} apples and ${cutOranges} oranges are good for the body`;
    return juice;
}

let result = fruitProcessor(3, 4);
console.log(result);


// drills of when a function is calling another function with if and else statement

function promo (simcard) {
    return simcard * 2
}
function accessoriesStore(iphone, samsung) {
    let promoIphone = promo(iphone);
    let promoSamsung = promo(samsung);

    const sellers = `buy an Iphone 15 promax and Samsung galaxy from us and get ${promoIphone} charger and ${promoSamsung} Oraimo Airpod for free`;
    return sellers;
}

let myStore = accessoriesStore(1,1);
console.log(myStore);

// function that caculate age 

function calAge (birthYear, name) {
    // let age = 2023 - birthYear;
    return (`${name} is ${2023 - birthYear} years old`);
    // return age;
}

// console.log(calAge(2002, "ola"));
let ageResult = calAge(2002, "ola");
console.log(ageResult);


/*
************
introduction to Arrays in javascript


************ 
*/