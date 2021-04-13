document.querySelector('button').addEventListener('click', function (e) {
    alert(e);
})

const input = document.querySelector('input')

input.addEventListener('keydown', function () {
    console.log('Keydown');
})
