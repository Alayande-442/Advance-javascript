"use strict"

/*
*** Array
*** function
*** object
*** if else statement
*** switch and case
*** 
 */
let fruits = ["apple", "cashew", "mango", "orange", "pineapple"];

// ****** Array methods ********
fruits[0] = "guava";
console.log(fruits);
// fruits.pop();
console.log(fruits);
fruits.push("apple");
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift("guava");
console.log(fruits);

// ************* functions ************
// let questions = prompt("What is your name?");

// if (questions == "olaoluwa") {
//     prompt(`we succesfully received your name ${names}`)

// }

function displayName (names, age, hobbies) {
    return `my name is ${names}, I'm ${age} years old, and I like playing ${hobbies}`;
}

let mydisplay = displayName("olaoluwa", 20, "football");
console.log(mydisplay);

// An expression function
let multiplicationTable = (a, b) => {
    return a * b;

}

let result = multiplicationTable(100, 100)
console.log(result);

// function that calculate the area of a triangle
let areaOfTriangle = (length, breath) => {
    return (length * breath) / 2;
}

let myAreaCalculation = areaOfTriangle(10, 10)
console.log(myAreaCalculation);

// function that convert age to days

let days = 365
let calcAge = (age) => {
    return `you have used ${age} years old on earth and is ${age * days} in days conversion`;

}

let myAgeCalculation = calcAge(20);
console.log(myAgeCalculation);

// function that joins another words

let wordConcatenation = (fixWord) => {
    return `${fixWord} comes from ${fixWord}`;

}

let concateResult = wordConcatenation("nothing");
console.log(concateResult);
