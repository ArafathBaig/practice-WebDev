"use strict";

const player0 = document.getElementById(".player--0");
const player1 = document.querySelector(".player--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
