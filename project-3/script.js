'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// COMMENT Starting condition //
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// COMMENT re-useable function
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  currentScore = 0;
};

// COMMENT Dice rolling state //
btnRoll.addEventListener('click', function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  // display the dice rolled
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // add the dice to current score if not 1
  if (dice !== 1) {
    // add to current score
    currentScore = currentScore + dice;
    // current0El.textContent = currentScore;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //   else switch player
    switchPlayer();
  }
});

// COMMENT when Hold button is clicked //

btnHold.addEventListener('click', function () {
  // add current score to total score
  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  //check if total score is >=100
  if (scores[activePlayer] >= 100) {
    //   finish the game
  }

  //  switch player

  switchPlayer();
});
