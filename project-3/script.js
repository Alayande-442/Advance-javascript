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
let scores, currentScore, activePlayer, playing;
const init = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  playing = true;
  activePlayer = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.toggle('active--player');
  player1El.classList.toggle('active--player');
};

init();

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
  if (playing) {
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
  }
});

// COMMENT when Hold button is clicked //

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if total score is >=100
    if (scores[activePlayer] >= 10) {
      diceEl.classList.add('hidden');
      //   finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
  // add current score to total score

  //  switch player
});

// COMMENT Resetting the game

btnNew.addEventListener('click', init);
