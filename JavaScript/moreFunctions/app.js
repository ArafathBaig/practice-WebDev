function multiply(numSides = 6) {
    return Math.floor(Math.random() * 6) + 1;
}

function greet(message, name = "Juaquin") {
    console.log(`${message} ${name}`);
}

let nums = [1, 2, 3, 4, 5, 6];

Math.max(...nums)

let dums = [84, 231, 231, 1, 1, 2, 44]

const allPets = [...nums, ...dums]

function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

const [gold, silver, bronze, ...everyoneElse] = nums;

const { birthYear: birth, dumpak: gimpak = 'N/A' } = user;
