function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const newColor = `rgb(${r}, ${g}, ${b})`;
    return newColor;
}

const button = document.querySelector("#changeColor");
const div = document.querySelector('#container')
button.addEventListener('click', (e) => {
    const color = randomColor();
    document.body.style.backgroundColor = color;
    e.stopPropagation();
})

div.addEventListener('click', function () {
    div.classList.toggle('hide');
})