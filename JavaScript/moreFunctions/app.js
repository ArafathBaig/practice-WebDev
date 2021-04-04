const number = [18, 29, 22, 11, 10];

function print(element) {
    console.log(element);
}

number.forEach(function (el) {
    console.log(el);
});

movie.forEach(function (el) {
    console.log(el.title);
});

let nums2 = number.map(function (num) {
    return num * 2;
});

const add = (x, y) => {
    return x + y;
}

const square = (x) => {
    x ** 2;
}

const cube = () => (
    y ** 3
)