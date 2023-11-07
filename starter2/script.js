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

// let myMath = (a, b) => {
//     return `the multiplication of ${a} and ${b} is ${2 * 5}`;

// }

// console.log(myMath(2,3));

// function calling another function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges) {
//     let cutApples = cutFruitPieces(apples);
//     let cutOranges = cutFruitPieces(oranges);
//     const juice = `fruit with ${cutApples} apples and ${cutOranges} oranges are good for the body`;
//     return juice;
// }

// let result = fruitProcessor(3, 4);
// console.log(result);


// drills of when a function is calling another function with if and else statement

// function promo (simcard) {
//     return simcard * 2
// }
// function accessoriesStore(iphone, samsung) {
//     let promoIphone = promo(iphone);
//     let promoSamsung = promo(samsung);

//     const sellers = `buy an Iphone 15 promax and Samsung galaxy from us and get ${promoIphone} charger and ${promoSamsung} Oraimo Airpod for free`;
//     return sellers;
// }

// let myStore = accessoriesStore(1,1);
// console.log(myStore);

// function that caculate age 

// function calAge (birthYear, name) {
//     // let age = 2023 - birthYear;
//     return (`${name} is ${2023 - birthYear} years old`);
//     // return age;
// }

// console.log(calAge(2002, "ola"));
// let ageResult = calAge(2002, "ola");
// console.log(ageResult);


/*
************
introduction to Arrays in javascript
************ 
*/

let myNames = ["jacob", "john", "bola", "bolu", "shina", "aina", "tayo", "shola", ["Olu", "taye", "Alaba"]]
console.log(myNames);
console.log(myNames[8][0]);
console.log(myNames.length);
console.log(myNames[myNames.length - 1]);
myNames[9] = "mary";
console.log(myNames);

const years = new Array(1991, 1992, 1993, 1994, "olumide");
console.log(years);


// Exercise
function calAge (birthYear) {
    return 2023 - birthYear

}

// const myYears = [1996, 1997, 1998, 1999, 2000];

// let calyears = calAge(myYears[0]);
// console.log(calyears);
// let ageCalulators = calAge(myYears[myYears.length - 1]);
// console.log(ageCalulators);

// let ages = [calAge(myYears[0]), calAge(myYears[myYears.length - 1])];
// console.log(ages);


// // Arrays operations or methods
// let programmingLanguages = ["Ruby", "Java", "Javascript", "python"];
// programmingLanguages.push("flutter");
// console.log(programmingLanguages);
// programmingLanguages.unshift("c#");
// console.log(programmingLanguages);

// console.log(programmingLanguages.shift());
// console.log(programmingLanguages);

// programmingLanguages.pop();
// console.log(programmingLanguages);

// console.log(programmingLanguages.indexOf("Javascript"));

// // using includes method

// console.log(programmingLanguages.includes("C++"));
// console.log(programmingLanguages.includes("Java"));

// drills

// function calTip (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15 //calculation of 15%
//     }else {
//         return bill * 0.20 // calculation of 20%
//     }

// }

// console.log(totals);

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]

// let totals = (bills + tips);
// console.log(bills,tips, totals);

// let myFullName = "Alayande olaoluwa";
// let myArrayFullName = ["Alayande olaoluwa", "Atobatele john", "Ayedade williams"]
// console.log(myArrayFullName);
// console.log(myFullName);


// *********** Object in javascript ***********

const myInfo = {
    firstName: "Olaoluwa",
    lastName: "Alayande",
    height: 1.65,
    birthYear:2000,
    skin: "dark",
    hobbies: ["swimming", "hockey", "skipping", "football"],
    isShort: true,
    calAge: function () {
        return 2023 - this.birthYear;
    },

    summary: function () {
        return `${this.firstName} is a very good learner and has a height of ${this.height}`;
    }
};
console.log(myInfo);

// How to retrieve data from an object using dot and bracket notation
console.log(myInfo.firstName);
console.log(myInfo.lastName);
console.log(myInfo["hobbies"]);

const nameKey = "Name";

console.log(myInfo["first" + nameKey]);
console.log(myInfo["last" + nameKey]);

let interestedIn = prompt("what do you wants to know abou ola? firstName, lastName, skin, hobbies")

// console.log(myInfo[interestedIn]);

if (myInfo[interestedIn]) {
    console.log(myInfo[interestedIn]);
}else {
    console.log("you have enter a wrong input");
}

myInfo.location = "Lagos";
myInfo["age"] = 20;
console.log(myInfo);

let drillObject = `${this.firstName} has ${myInfo.hobbies.length} hobbies and likes ${myInfo.hobbies[3]} most`;
console.log(drillObject);


// object method
console.log(myInfo.calAge(2000));
console.log(myInfo["calAge"](2001));

// console.log(this.summary());
console.log(myInfo.summary("olaoluwa"));


// drills

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return mark.bmi
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return mark.bmi
    }
}

console.log(mark.calBMI(), mark.calBMI());
console.log(john.calBMI());






