const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");

const p1Display = document.querySelector("#p1DisplayScore");
const p2Display = document.querySelector("#p2DisplayScore");

const playToSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let isGameOver = false;

let winningScore = 5;
p1Button.addEventListener('click', function(e){

    if(!isGameOver){
        p1Score++;

        if(p1Score === winningScore){
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function(e){

    if(!isGameOver){
        p2Score++;

        if(p2Score === winningScore){
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

playToSelect.addEventListener('change', function(e) {
    winningScore = parseInt(this.value);
    resetF();
})


reset.addEventListener('click', resetF)

function resetF(e){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}