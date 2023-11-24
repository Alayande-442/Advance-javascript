'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'my Content 😍';

console.log(document.querySelector('.message').textContent);

document.querySelector('.score').textContent = 100;

document.querySelector('.highscore').textContent = 50;

document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 30;
console.log(document.querySelector('.guess').value);

// ***** COMMENT An EventListener is something that happen on the web page *** //

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number';
  }
});
