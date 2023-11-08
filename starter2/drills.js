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
