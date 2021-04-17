const p1 ={
    score : 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1DisplayScore')
}

const p2 ={
    score : 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2DisplayScore')
}
const reset = document.querySelector("#reset");
const playToSelect = document.querySelector("#playto");

let p1Score = 0;
let p2Score = 0;

let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score++;

        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled= true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

let winningScore = 3;
p1Button.addEventListener('click', function(e){

    updateScores(p1,p2);
});

p2Button.addEventListener('click', function(e){

    updateScores(p2,p1);
});

playToSelect.addEventListener('change', function(e) {
    winningScore = parseInt(this.value);
    resetF();
})


reset.addEventListener('click', resetF)

function resetF(e){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = 0;
    p2.display.textContent = 0;
    p1.display.classList.remove("has-text-success","has-text-danger");
    p2.display.classList.remove("has-text-success","has-text-danger");
    p1.button.disabled = false;
    p2.button.disabled = false;
}