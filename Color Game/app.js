const squares = document.querySelectorAll(".square");
const messageDisplay = document.querySelector('#message')
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const colorDisplay = document.getElementById("colorDisplay");
const modeButton = document.querySelectorAll(".mode")

let num = 6;
let colors = [];
let pickedColor = pickColor();

init();

function init() {

    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {
                num = 3;
            } else {
                num = 6;
            }

            resetGame();
        });
    }

    for (let i = 0; i < squares.length; i++) {

        squares[i].addEventListener('click', function () {
            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again"

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

    resetGame();
}
resetButton.addEventListener("click", resetGame)

function changeColors(color) {
    for (let square of squares) {
        square.style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let color = [];

    for (let i = 0; i < num; i++) {
        let randomColor = randomRGBColor();
        color.push(randomColor);
    }

    return color;

}

function randomRGBColor() {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();

    return `rgb(${r}, ${g}, ${b})`;
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function resetGame() {
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    changeColors(pickedColor);

    for (let i = 0; i < squares.length; i++) {

        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }

    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}