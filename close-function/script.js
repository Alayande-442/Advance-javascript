'use strict';

// const bookings = [];

// const createbooking = function (
//   flightNumber,
//   numPassenger = 2,
//   price = 299 * numPassenger
// ) {
// COMMENT using logical short circuiting ES5 ways
//   numPassenger = numPassenger || 1;
//   price = price || 500;

//   const booking = {
//     flightNumber,
//     numPassenger,
//     price,
//   };
//   console.log(booking);

//   console.log(bookings.push(booking));
// };

// createbooking('LH342');
// createbooking('BH2002', 2);
// createbooking('BH2002', 3);

// const flight = 'LH212';
// const ola = {
//   name: 'olaoluwa',
//   passport: 1235664566,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH222';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 1235664566) {
//     alert('check in successful');
//   } else {
//     alert('wrong booking passport');
//   }
// };

// checkIn(flight, ola);
// console.log(ola);

//

const sayHello = function () {
  console.log('hello');
};

document.body.addEventListener('click', sayHello);

['ola', 'john', 'matha', 'binta'].forEach(sayHello);

// COMMENT from chatGPT COMMENT working with callback function.

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('javascript is the best programming language', upperFirstWord);
transformer('javascript is the best programming language', oneWord);

// COMMENT function returning another function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name} ${greeting}`);
  };
};

const greetingHey = greet('hey');

greetingHey('olaoluwa');
greetingHey('john');

// COMMENT conversion of the top function to arrow function
const greetArrow = greeting => {
  return naming => {
    console.log(`${greeting} ${naming}`);
  };
};

const greetingArrowHey = greetArrow('hello');

greetingArrowHey('oyetola');
greetingArrowHey('stephen');

// COMMENT How to use the call and apply method in function

const arikAir = {
  airline: 'ArikAir',
  iataCode: 'NG',
  bookings: [],
  book: function (flightNum, passenger) {
    console.log(
      `${passenger} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );

    this.bookings.push(`${this.airline} flight ${this.iataCode} ${flightNum}`);
  },
};

arikAir.book(234, 'Alayande olaoluwa');
arikAir.book(234, ' Adeyeye peter');

console.log(arikAir);

const ukAirLine = {
  airline: 'ukAirLine',
  iataCode: 'UK',
  bookings: [],
};

const book = arikAir.book;

// COMMENT call method
book.call(ukAirLine, 423, 'Mr Abba shitu');
console.log(ukAirLine);

book.call(arikAir, 233, 'olajide ariyo');
console.log(arikAir);

const portugalAir = {
  airline: 'portugalAir',
  iataCode: 'POR',
  bookings: [],
};

book.call(portugalAir, 410, 'Alarape Taiwo');
console.log(portugalAir);

// COMMENT Apply method
const flightData = [239, 'Sholanke Taoreed'];

book.apply(portugalAir, flightData);
console.log(portugalAir);

book.call(portugalAir, ...flightData);
console.log(portugalAir);

// COMMENT Bind method COMMENT Not clear enough to code anything

// COMMENT Immediately involking a function expression IIFE

(function () {
  console.log('this function is immediately involked');
})();

// COMMENT we can also do that for arrow function

(() => console.log('this is an IIFE with arrow function'))();

// COMMENT closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// COMMENT Another Example of closure from chatGPT

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // Outputs: 1
counter(); // Outputs: 2

// COMMENT Another Example of closure from chatGPT COMMENT with EventListener

// function setupClickListener() {
//   let message = 'Button clicked!';

//   document.getElementById('myButton').addEventListener('click', function () {
//     alert(message);
//   });
// }

// setupClickListener();

// COMMENT cracky head twist
const multiplyTwoNumber = function () {
  let firstNumber = 5;

  return function () {
    let result = firstNumber * 2;
    console.log(result);
    return result;
  };
};

let resultCal = multiplyTwoNumber();

resultCal();

setTimeout(function () {
  console.log('hello world');
}, 5000);
