let colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");

let colorDisplay = document.getElementById("colorDisplay");
let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
const messageDisplay = document.querySelector('#message')
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function () {
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    changeColors(pickedColor);

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "#232323";
})

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

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