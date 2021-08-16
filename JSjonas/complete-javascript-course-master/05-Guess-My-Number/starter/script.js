'use strict';

const objects = {
  checkButton: document.querySelector('.check'),
  guessText: document.querySelector('.guess'),
  messageText: document.querySelector('.message'),
  scoreText: document.querySelector('.score'),
  highScoreText: document.querySelector('.highscore'),
  questionMark: document.querySelector('.number'),
  btnAgain: document.querySelector('.again'),
};

let score = 20;
let secretNumber = randomNumber();
let gameFlag = false;
let highScore = 0;

const displayHighScore = function () {
  highScore = Math.max(highScore, score);
  objects.highScoreText.textContent = highScore;
};

const displayMessage = function (message) {
  objects.messageText.textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  objects.questionMark.textContent = secretNumber;
};

const displayScore = function () {
  objects.scoreText.textContent = score;
};

const setBodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setQuestionWidth = function (size) {
  objects.questionMark.style.width = size;
};

init();

objects.checkButton.addEventListener('click', () => {
  if (gameFlag) {
    return;
  }
  const guessedNumber = Number(objects.guessText.value);

  if (guessedNumber) {
    if (guessedNumber === secretNumber) {
      winScenario();
    } else if (guessedNumber < secretNumber) {
      wrongGuessTemplate(false);
    } else {
      wrongGuessTemplate(true);
    }
  } else {
    displayMessage('🛑 No Number');
  }
});

objects.btnAgain.addEventListener('click', init);

const wrongGuessTemplate = high => {
  score--;

  if (high) displayMessage('📈 Too High!');
  else displayMessage('📉 Too Low!');

  displayScore();

  if (score === 0) gameFlag = true;

  if (gameFlag) {
    displayMessage('💥 You Lost the game!');
  }
};

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function winScenario() {
  displayHighScore();
  displayMessage('🎉 Correct Number');
  displaySecretNumber(secretNumber);
  setQuestionWidth('30rem');
  setBodyBackground('green');
  gameFlag = true;
}

function init() {
  secretNumber = randomNumber();
  score = 20;
  displayMessage('Start guessing...');
  displaySecretNumber('?');
  setQuestionWidth('15rem');
  setBodyBackground('black');
  displayScore();
  gameFlag = false;
}
