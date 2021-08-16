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
init();

objects.checkButton.addEventListener('click', () => {
  if (gameFlag) {
    return;
  }
  const guessedNumber = Number(objects.guessText.value);

  if (guessedNumber) {
    if (guessedNumber === secretNumber) {
      highScore = Math.max(highScore, score);
      objects.highScoreText.textContent = highScore;
      objects.messageText.textContent = '🎉 Correct Number';
      gameFlag = true;
    } else if (guessedNumber < secretNumber) {
      wrongGuessTemplate(false);
    } else {
      wrongGuessTemplate(true);
    }
  } else {
    objects.messageText.textContent = '🛑 No Number';
  }
});

objects.btnAgain.addEventListener('click', init);

const wrongGuessTemplate = high => {
  score--;

  if (high) objects.messageText.textContent = '📈 Too High!';
  else objects.messageText.textContent = '📉 Too Low!';

  objects.scoreText.textContent = score;

  if (score === 0) gameFlag = true;

  if (gameFlag) {
    objects.messageText.textContent = 'You Lost';
  }
};

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function init() {
  secretNumber = randomNumber();
  objects.questionMark.textContent = secretNumber;
  score = 20;
  objects.messageText.textContent = 'Start guessing...';
  objects.scoreText.textContent = 20;
  gameFlag = false;
}
