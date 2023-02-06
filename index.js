let keyword = document.getElementById('word')
let point = document.getElementById('score')
let countDown = document.getElementById('timer')
let typeWord = document.getElementById('input')
let retry  = document.getElementById('btn')


randomWord = ['ability', 'across', 'assume', 'how', 'much', 'is', 'your', 'what', 'where', 'some'];
let random = randomWord[Math.floor(Math.random() * randomWord.length)];
let TIME = setInterval(Timer, 1000);

keyword.innerHTML = random

let GetScore = 0
let time = 10

function StartTheGame() {
    point.innerHTML = "score: " + GetScore
    random = randomWord[Math.floor(Math.random() * randomWord.length)];
    keyword.innerHTML = random;
    typeWord.value = ""        
}

typeWord.addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        if (typeWord.value === random) {
            GetScore ++;
            point.innerText = GetScore
            StartTheGame()
        } 

        else{
            GetScore --
            point.innerText = GetScore
            StartTheGame()
        }                           
    } 
});

retry.addEventListener("click", (event) =>{
    if(event === "click")
    {        
        timeReset();
    }
});


retry.addEventListener("click", restart);

function timeReset(){
    countDown.innerHTML = 10;
    point.innerHTML = GetScore = 0
    StartTheGame();
}

function Timer(){
    countDown.innerHTML = "Time " + time
    time--;
    if (time <= 0) {
        restart();
    }
}

function restart(){
    point = 0;
    time = 10;
    StartTheGame()
}








