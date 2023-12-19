'use strict';

// COMMENT how this key word works

const jonas = {
  name: 'jonas',
  year: '1990',

  calAge: function () {
    let cal = 2023 - this.year;
    return cal;
  },
  greet: () => {
    console.log(`hey ${this.name}`);
  },
};

console.log(this.greet);
let result = jonas.calAge();
console.log(result);

console.log(this);
