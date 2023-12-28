'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Alayande Olaoluwa',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Akinlawon Olakunle',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Alayande Opeoluwa Richard',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Salaudeen Sheriff',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// COMMENT start of the bankist task

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    // ternary operator
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value"> ₦ ${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
    // the afterbegin is used to display item based on the latest update
  });
};
// displayMovements(account1.movements);

const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, cur) {
    // console.log(`iteration ${i}: ${acc}`);
    return acc + cur;
  }, 0);
  labelBalance.textContent = ` ₦ ${acc.balance}`;
};

// displayBalance(account1.movements);

// COMMENT to calculate total income

const displayTotalIncome = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `₦ ${incomes}`;

  // COMMENT debit section

  const debit = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `₦ ${Math.abs(debit)}`;

  // COMMENT Interest section

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, mov) => acc + mov);
  labelSumInterest.textContent = `₦ ${interest}`;
};

// displayTotalIncome(account1.movements);

// COMMENT to calculate total debit funds

// const displayTotalDebit = function (movements) {

// };
// displayTotalDebit(account1.movements);

// COMMENT to calculate interest on deposit
// const displayInterestRate = function (movements) {};

// displayInterestRate(account1.movements);

// COMMENT create username section COMMENT
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name.at(0);
      })
      .join('');
  });
};

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // diplay balance

  displayBalance(acc);
  // display summary

  displayTotalIncome(acc);
};

createUsernames(accounts);

// COMMENT implementing login

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // prevent the form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // the question mark represent optional chaining
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log('LOGIN');

    // display UI and Message
    labelWelcome.textContent = `Welcome back: ${currentAccount.owner
      .split(' ')
      .at(0)}`;

    containerApp.style.opacity = 100;

    // COMMENT clear input field when user login
    inputLoginUsername.value = '';
    inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);

    // split is used to get certain letter from an string e.g ['alayande olaoluwa']
  }
});

// COMMENT transfer money section

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
  console.log(amount, receiverAcc);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    console.log('transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

// COMMENT Loan section

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  // meaning if one element in the movement of the array is true:
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // ADD movement
    currentAccount.movements.push(amount);

    // update UI

    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

// COMMENT close account section

btnClose.addEventListener('click', function (e) {
  e.preventDefault;

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value === currentAccount.pin)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // COMMENT we wants to splice i.e remove element from the array based on the index

    console.log(index);
    // Delete the accounts
    accounts.splice(index, 1);

    // Hide the UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

// COMMENT sorting section

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// COMMENT END of the bankist task COMMENT

// const user = 'Steven Thomas Williams'; //stw

// console.log(createUsername('Steven Thomas Williams'));
/////////////////////////////////////////////////

// COMMENT startter

const arr = [2, 4, 5, 7, 8, 9, 3, 4];

console.log(arr.slice(2));

console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

console.log(arr.slice());
console.log([...arr]);

console.log(arr.splice(2));
console.log(arr);

console.log(arr.reverse());

const arr2 = [10, 20, 30];

console.log(arr.concat(arr2));

console.log([...arr, ...arr2]);

console.log(arr.join(arr2));

// COMMENT using the at new method

const listOfNumbers = [10, 20, 30, 40];

console.log(listOfNumbers[1]);

console.log(listOfNumbers.at(3));

console.log(listOfNumbers.length);

// COMMENT getting the last element of sn array
console.log(listOfNumbers[listOfNumbers.length - 1]);
console.log(listOfNumbers.at(-1));

console.log('olaoluwa'.at(2));

// COMMENT working with the bankist app

let movements2 = [200, -200, 340, -300, -20, 50, 400, -460];
console.log(movements2);

// for (let items of movements2) {
//   if (items > 0) {
//     console.log(`you deposited ${Math.abs(items)}`);
//   } else {
//     console.log(`you withdraw ${Math.abs(items)}`);
//   }
// }

// COMMENT using forEach method to achieve the same result

movements2.forEach(movements => {
  if (movements > 0) {
    console.log(`you deposited ${Math.abs(movements)}`);
  } else {
    console.log(`you withdraw ${Math.abs(movements)}`);
  }
});

// COMMENT using forEach with map

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// console.log(containerMovements.textContent);

// COMMENT Challenge question

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   console.log(dogsJuliaCorrected);
// };

// checkDogs([3, 5, 212, 7], [4, 1, 15, 8, 8]);

// COMMENT Data transformation: map filter and reduce

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;

const movementUsd = movements.map(function (mov) {
  return mov * euroToUsd;
});

// COMMENT using arrow function
const arrow = movements.map(mov => mov * euroToUsd);

console.log(movementUsd);

// COMMENT working with filter
const testDeposit = movements.filter(function (check) {
  return check > 0;
});

// let test = testFilter();
console.log(testDeposit);

// COMMENT test withdrawal

const testWithdrawal = movements.filter(function (withd) {
  return withd < 0;
});

console.log(testWithdrawal);

// COMMENT using push method

const pushToArray = [];
for (let items of movements) {
  if (items > 0) {
    pushToArray.push(items);
  }
}

console.log(pushToArray);

// COMMENT using the Reduce method

console.log(movements);

/**
 * COMMENT The acc stands for accumulation of the amount
 * cur stands for current value or number
 * i stands for iteration
 * arr stands for the array of the values
 */

const balance = movements.reduce(function (acc, curr, i, arr) {
  return acc + curr;
}, 0);

console.log(balance);

// Using for loop in getting the same result
let balance2 = 0;

for (let mv of movements) {
  balance2 = balance2 + mv;
}

console.log(balance2);

const moneyList = [200, 400, 500, 800, 200];

const multiplier = 2;

const emptymoneyList = [];

for (let money of moneyList) {
  emptymoneyList.push(money * multiplier);
}

console.log(emptymoneyList);

// COMMENT chaining all Data transformation method COMMENT

const euroUsd = 1.1;

// PIPELINE OR CHAINING
const depositInUsd = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(depositInUsd);

/** COMMENT
 The FIND method is used to retrieve data from an array bases on some/ given condition

 */

const displayFirstwithDrawala = movements.find(mov => mov < 0);
console.log(movements);
console.log(displayFirstwithDrawala);

const accountFilter = accounts.find(acc => acc.owner === 'Alayande Olaoluwa');
console.log(accountFilter);

// COMMENT some AND every method

console.log(movements);
console.log(movements.includes(-5000));

console.log(movements.some(mov => mov === -130));

// some method
console.log(movements.every(mov => mov > 0));
console.log(account2.movements.every(mov => mov > 0));

// using separate callback method

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
console.log(movements.reduce(deposit));

// COMMENT flat and flatmap method
const arrCheck = [1, 2, 3, [4, 5, 6, 7], [7, 8, 9]];

console.log(arrCheck.flat());

// Deep flat array

const deepArray = [[[1, 2], 3], [4, 5], 6, 7, 8, 9];

console.log(deepArray.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accounts);

// // console.log(accountMovements.flat());
// const allAccounts = accountMovements.flat();
// console.log(allAccounts);

// const overallBalance = allAccounts.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// COMMENT using flat and map to solve the commented code above
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// COMMENT flat map method, the noly diff between flat and flatmap is that flatmap does not go tow lwvwl deep

const overallBalance2 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance2);

// COMMENT sorting arrays

const owners = [
  'oaoluwa',
  'adam',
  'ayo',
  'bola',
  'collins',
  'daniel',
  'emmanuel',
];

console.log(owners.sort());

console.log(owners);

// for numbers

// console.log(movements.sort());

// for ascesending order
movements.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});

console.log(movements);

// for descending order

movements.sort(function (a, b) {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});

console.log(movements);

// COMMENT creating and filling up an array

// empty array and fill method
const arrFill = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const x = new Array(7);
console.log(x);

x.fill(2, 4);

console.log(x);

arrFill.fill(77, 4, 8);
console.log(arrFill);

// Array.from method

// const y = Array.from({ length: 7 }, function () {
//   return 2;
// });
const y = Array.from({ length: 7 }, () => 2);
console.log(y);

const z = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(z);
