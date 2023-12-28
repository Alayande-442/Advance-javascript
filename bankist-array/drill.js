'use strict';
// COMMENT drill on closures
function callMyName() {
  let myName = 'olaoluwa';

  function displayMyName() {
    console.log(
      `my name is ${myName} and i'm passionate about javascript and it library`
    );
  }

  displayMyName();
}

callMyName();

if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
  console.log(x);
}

function addTwoNumber(x) {
  return function (y) {
    return x + y;
  };
}

const addX = addTwoNumber(5);
const addX2 = addTwoNumber(10);

console.log(addX(3));
console.log(addX2(10));

function outer() {
  const outerv = 'from outer';
  function inner() {
    const innerv = 'from inner';
    console.log(outerv);
    console.log(innerv);
  }
  inner();
}
outer();

// COMMENT Working with forEach
const ratings = [4, 5, 3, 4, 5, 6];
const copyRatings = [];

ratings.forEach(function (item) {
  copyRatings.push(item);
});

console.log(copyRatings);

// COMMENT Recap on forEach method

const movements = [200, 300, -500, 600, -400, 500];

movements.forEach(function (items, index, array) {
  if (items > 0) {
    console.log(`you deposited ${items}`);
  } else {
    console.log(`you were debited ${Math.abs(items)}`);
  }
});

// COMMENT forEach with map and set

const currencies = new Map([
  ['USD', 'United state of America'],
  ['EUR', 'Euro'],
  ['GBP', 'Pounds sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// COMMENT working set

const currencyTag = new Set(['EUR', 'GBP', 'NG', 'YEN']);

currencyTag.forEach(function (value, key, set) {
  console.log(`this is the value of the set: ${value}`);
});
