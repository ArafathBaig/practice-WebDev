const btn = document.querySelector("#v2");

btn.onclick = function () {
    console.log("You clicked me!!");
}

btn.onmouseenter = () => {
    console.log("Screeeaaam")
}

const btn3 = document.querySelector("#third");
btn3.addEventListener('click', () => {
    alert("Final form aaaahhh");
});

function twist() {
    console.log("twist");
}

function shout() {
    console.log("shout");
}

btn3.addEventListener('click', twist, { once: true })
btn3.addEventListener('click', shout)