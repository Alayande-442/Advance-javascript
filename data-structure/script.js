'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  pizzaDelivery: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// COMMENT test

const arr = [2, 4, 6, 8];

console.log(arr);
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [, , z] = arr;
console.log(z);

let studentName = ['john', 'paul', 'peter', 'ola'];

let [j, p1, p2] = studentName;
console.log(j, p1, p2);

let [firstElement, secondElement] = restaurant.categories;

console.log(firstElement, secondElement);

let temp = firstElement;
firstElement = secondElement;
secondElement = temp;
console.log(firstElement, secondElement);

[firstElement, secondElement] = [secondElement, firstElement];
console.log(firstElement, secondElement);

// working with object method
console.log(restaurant.order(1, 2));

let [, secondFood] = restaurant.order(1, 2);
console.log(secondFood);

// COMMENT Nested destructuring
let arrp = [2, 4, [3, 5]];
let [i, , [m, k]] = arrp;

console.log(i, m, k);

let newArrp = [].concat(arrp);
console.log(newArrp);
console.log(arrp[2][0]);

// COMMENT How to destructure an object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// const {
//   menu: [],
//   startMenuIndex: starter = [],
// } = restaurant;

// console.log(menu, starterMenuIndex);

// COMMENT spread ...operators

const numberArr = [6, 7, 8, 9];

const newArr = [1, 2, 3, 4, 5, ...numberArr];
console.log(newArr);

const addedMenu = [...restaurant.mainMenu, 'chickwiz', 'bouger'];
console.log(addedMenu);

const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenu);

// COMMENT simple drill
const studentName2 = ['ola', 'john', 'peter', 'mathew'];
const [, , , mathew] = studentName2;
console.log(mathew);

const objectdest = {
  name1: 'ola',
  age: '200',
  address: 'washing street',
};

const { name1, age, address } = objectdest;
console.log(name1, age, address);

// COMMENT spread operator drill
const fruits = ['cashew', 'mango', 'kola'];

const newFruit = ['pineapple', 'melon', ...fruits];
console.log(newFruit);

// COMMENT spread operators on object
const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);

restaurantCopy.name = 'olaoluwa';
console.log(restaurantCopy);
console.log(restaurant);

const [x, y, ...others] = [1, 2, 3, 4, 5, 6];
console.log(x, y, others);

// COMMENT rest pattern in object

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// COMMENT using pattern with function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(numbers);
  console.log(sum);
};

add(1, 2);
add(3, 4, 5, 6);
add(7, 8, 8, 10);

restaurant.pizzaDelivery('dodo', 'rice', 'beans', 'spaghetti');

// COMMENT short circuiting && and ||

console.log('----OR short circuiting -----');
console.log(3 || 'jonas');

console.log('' || 'ola');
console.log(undefined || null);

console.log('----AND short circuiting -----');

console.log(0 && 'ola');

// COMMENT For - of - loop COMMENT

for (const item of restaurant.mainMenu) console.log(item);

let myFruits = ['apple', 'mango', 'guava'];

for (let items of myFruits) console.log(items);
for (let items of myFruits.entries()) console.log(items);

const days = ['mon', 'tues', 'wed', 'thur', 'fri', 'sat', 'sun'];
for (let items of days) console.log(items);

// COMMENT using optional chaining with an arrays
const myInfo = [{ name: 'olaoluwa', email: 'alayandesteven@gmail.com' }];

console.log(myInfo[0].name ?? 'user array is empty');
console.log(myInfo[0].email ?? 'user array is empty');

// COMMENT looping through an object

const properties = Object.keys(openingHours);
console.log(properties);

console.log(`we open on ${properties.length} days`);
