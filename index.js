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




retry.addEventListener("click", restart) 


function timeReset(){
    time = 10
    StartTheGame();
    Timer()

}



// countDown
function Timer(){
   
    if (time <= 0 ) {
        countDown.innerText = "Time's up"
    }
    else{
        countDown.innerHTML = "Time: " + time
        time--;
    }
   
   
}

function restart(){
    point.innerText = GetScore = 0;
    time = 10;
    Timer()
    StartTheGame()
}

// function StopTime() {
//     if (time == 0) {
        
        
//     }
    
// }







