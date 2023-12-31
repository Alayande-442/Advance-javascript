'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Alayande Olaoluwa',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2023-11-01T13:15:33.035Z',
    '2023-11-30T09:48:16.867Z',
    '2023-12-25T06:04:23.907Z',
    '2023-01-25T14:18:46.235Z',
    '2023-02-05T16:33:06.386Z',
    '2023-04-10T14:43:26.374Z',
    '2023-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// COMMENT start of logout timer section
// set time to 5 min

let time = 10;
const timer = setInterval(function () {
  const min = String(Math.trunc(time / 60)).padStart(2, '0');
  const sec = String(Math.trunc(time % 60)).padStart(2, '0');
  labelTimer.textContent = `${min}: ${sec}`;

  // decrease 1s
  time -= 1;
}, 1000);

if (time === 0) {
  clearInterval(timer);
  containerApp.style.opacity = 0;

  labelWelcome.textContent = `Login to get started`;
}
// call the timer every section
// each call, print the remain time to the UI
// when at 0 logout the user
// COMMENT end of logout timer section

///////////////////////////////////////
// Event handlers

// Fake login
let currentAccount;

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

const nowd = new Date();

const options = {
  hour: 'numeric',
  minute: 'numeric',
  long: 'long', //long, 2-digits
  year: 'numeric',
  weekday: 'long',
};

const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options, locale).format(
  nowd
);

// COMMENT this was actually replaced with COMMENT the one at thwe top

// const day = `${nowd.getDate()}`.padStart(2, '0');
// const month = `${nowd.getMonth() + 1}`.padStart(2, '0');
// const year = nowd.getFullYear();
// const hour = nowd.getHours();
// const min = nowd.getMinutes();
// const sec = nowd.getSeconds();

// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}:${sec}`;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
console.log(10 === 10.0);

// base 10 = 0 to 9;

// binary 2 = 0 - 1

// COMMENT conversion of sting to number
console.log(Number('23'));
console.log(23 + +'23');

// COMMENT Parsing
console.log(Number.parseInt('35px', 10));

console.log(Number.parseFloat(' 20.1rem '));
console.log(parseFloat(' 27.3rem '));

console.log(Number.isNaN(+'23rem'));
console.log(Number.isNaN(23));
console.log(Number.isFinite(25));
console.log(Number.isInteger(25));

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

console.log(randomInt(10, 20));

console.log(Math.trunc(23.5));
console.log(Math.trunc(Math.round(23.5)));
console.log(Math.trunc(Math.ceil(23.3)));

console.log(Math.floor(23.5));
console.log(Math.trunc(23.5));

// COMMENT Rounding decimal

console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));

// COMMENT Remainder %

console.log(8 / 3);
console.log(Math.floor(8 / 3));
console.log(Math.round(8 / 3));

// const isEVen = n => {
//   if (n % 2 === 0) {
//     console.log('yes');
//   } else {
//     console.log('No');
//   }
// };

// isEVen(8);
// isEVen(3);
// isEVen(200);

const isEVen = n => n % 2 === 0;
console.log(isEVen(20));
console.log(isEVen(3));
console.log(isEVen(400));

console.log(Math.trunc(Math.random() * 6) + 1);

console.log('hello');
console.log(23);
// console.log(2.452).toFixed(2);
const test = (2.452).toFixed(2);
console.log(Number(test));

// COMMENT

const isEven = function (n) {
  if (n % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

let check = isEven(20);
let check2 = isEven(5);
let check3 = isEven(7);
let check4 = isEven(3);
console.log(check);
console.log(check2);
console.log(check3);
console.log(check4);

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) {
      row.style.backgroundColor = 'orangered';
    }
  });
});

// COMMENT working with numeric separator

const diameter = 287_670_000_000;
// same as 287,760,000,000
console.log(diameter);

// COMMENT working with BigInt

//COMMENT the highest number javascript can work with is = 9007199254740991

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

// COMMENT working with date and time COMMENT

/* 
  dates in javascript works in four different ways
  1.using the new constructor

*/

const now = new Date();
console.log(now);

console.log(new Date('December 25, 2024'));

console.log(new Date(account2.movementsDates.at(1)));
const datetest = new Date(2024, 7, 2, 8, 3, 6);

console.log(datetest.getFullYear());
console.log(datetest.getMonth());
console.log(datetest.getDay());
console.log(datetest.toISOString());

console.log(Date.now());

console.log(datetest.setFullYear(2024));

// COMMENT wotking with SETTIMEOUT COMMENT

setTimeout(
  (ing1, ing2) => console.log(`hello world i like ${ing1} and ${ing2}`),
  10000,
  'pasta',
  'chickwizz'
);

console.log('waiting....');

// COMMENT working with setInterval

// setInterval(function () {
//   const now = new Date();
//   console.log(now.getFullYear());
//   console.log(now.getMonth());
//   console.log(now.getDay());
//   console.log(now);
// }, 1000);
