const id = setInterval(() => {
    console.log(Math.random());
}, 2000)

const nums = [9, 8, 7, 6, 5, , 4, 3, 2, 1]
nums.filter(n => {
    return n === 4;
});

nums.reduce((a, b) => a + b);