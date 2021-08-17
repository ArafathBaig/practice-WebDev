"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

// if true - 1st player, if false 2nd player
let currentPlayer = true;
let score0 = 0,
  score1 = 0;
let currentScore0 = 0,
  currentScore1 = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const displayCurrentScore = function () {
  currentPlayer
    ? (current0El.textContent = currentScore0)
    : (current1El.textContent = currentScore1);
};

const incrementCurrentScore = function (score = 0) {
  currentPlayer ? (currentScore0 += score) : (currentScore1 += score);
  displayCurrentScore();
};

const displayTotalScore = function () {
  currentPlayer
    ? (score0El.textContent = score0)
    : (score1El.textContent = score1);
};

const incrementTotalScore = function () {
  currentPlayer ? (score0 += currentScore0) : (score1 += currentScore1);
  displayTotalScore();
};

const rollDice = function () {
  let randomRoll = Math.trunc(Math.random() * 6) + 1;
  let diceImg = `dice-${randomRoll}.png`;
  diceEl.classList.remove("hidden");
  diceEl.src = diceImg;
  return randomRoll;
};

const togglePlayer = function () {
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

const switchPlayer = function () {
  currentPlayer = !currentPlayer;
  togglePlayer();
};

const resetScore = function () {
  currentScore0 = 0;
  currentScore1 = 0;
  current0El.textContent = currentScore0;
  current1El.textContent = currentScore1;
};

btnRollDice.addEventListener("click", function () {
  let generatedNumber = Number(rollDice());

  if (generatedNumber === 1) {
    resetScore();
    switchPlayer();
  } else {
    incrementCurrentScore(generatedNumber);
  }
});

btnHold.addEventListener("click", function () {
  incrementTotalScore();
  resetScore();
  switchPlayer();
});
