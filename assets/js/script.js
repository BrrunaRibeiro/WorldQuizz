console.log("Hello!!");


document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "tutorial") {
                alert("You clicked tutorial!");
            } else let gameStart = this.getAttribute("data-type");
            alert(`You clicked ${gameStart}`);
        }
        
        )
    }
}
)


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


