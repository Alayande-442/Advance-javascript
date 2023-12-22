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
