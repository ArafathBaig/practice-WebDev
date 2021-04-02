function callTwice(func) {
    func();
    func();
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);

function makeMysteryFunc() {

    const rand = Math.random();

    if (rand > 0.5) {
        return function () {
            console.log("Congrats, I am good funtion");
            console.log("You win a million dollars")
        }
    } else {
        return function () {
            alert("Something")
        }
    }
}


function makeBetweenFunc(min, max) {

    return function (num) {
        return num >= min && num <= max;
    }
}
const isChild = makeBetweenFunc(10, 50);
isChild(15);


// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }
