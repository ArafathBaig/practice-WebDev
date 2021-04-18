let colors = ["aaaa", "bbb", "ccc"];

const squares = document.querySelectorAll(".square");

let pickedColor = colors[1];
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = colors[1];

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function () {
        let clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            alert("Correct");
        } else {
            alert("Wrong");
        }
    })
}