let colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");

let colorDisplay = document.getElementById("colorDisplay");
let pickedColor = pickColor();
colorDisplay.textContent = colors[1];
const messageDisplay = document.querySelector('#message')

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
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
    let random = Math.floor(Math.random() * colors.length) + 1;
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