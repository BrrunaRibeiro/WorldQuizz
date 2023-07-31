document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("data-type") === "tutorial") {
                alert("You clicked TUTORIAL!");
            } else {
                if(this.getAttribute("data-type") === "start") {
                    alert("You clicked Start");
                }
            }
            })
    }    
})

//Assign const var to main elements(Timer, Tutorial button and Start button)
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial");
const startButton = document.getElementById("start");

//Add event listeners
startButton.addEventListener("click", startGame);
tutorialButton.addEventListener("click", startTutorial);



function runGame() {

}

function runTutorial () {

}

function timer() {

}

function displayQandA() {

}

function selectAnswer () {

}

function submitAnswer() {

}

function checkAnswer () {

}

function updateScore () {

}

function back() {

}

function exit() {

}


