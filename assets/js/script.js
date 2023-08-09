import {questions} from "./questionscontent.js";

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementsByTagName("button");
})

//Assign const variable to main elements for future use
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial")
tutorialButton.addEventListener("click", startTutorial);
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
const nextButton = document.getElementById("next")
nextButton.addEventListener("click", next);
const options = document.querySelector(".options");
const answerButtons = document.getElementById("answer-buttons")
answerButtons.addEventListener("click", selectAnswer)
answerButtons.addEventListener("click", checkAnswer);

const questionp = document.getElementById("questionp");
let questionCount = 0;
let score = 0;
let countdownInterval = 10;

//Start Tutorial Function
function startTutorial() {
    var img = document.createElement('img');
    img.src = "../assets/images/tutorial.webp";
    img.width = 750;
    img.height = 750;
    document.body.appendChild(img);
    input.classList.add("hide");
}

//Timer countdown Function
function timer() {
    let count = 10;
    countdownTimer.innerText = count;
    const countdownInterval = setInterval(() => {
        count--;
        countdownTimer.innerText = count;
        if (count === 0) {
            clearInterval(countdownInterval);
            console.log("Time's up!");
            next();
        }
    }, 1000);
    if (count < "5") {
        countdownTimer.classList.add("5left");
    } else {
        countdownTimer.classList.remove("5left");
    }
}

function selectAnswer() {
    options.classList.add("answer-active");
    checkAnswer();
}

//Check if awnwer selected is the correct answer Function
function checkAnswer() {
    for (var i = 0; i < answerButtons.length; i++) {
            answerButtons[i].addEventListener("click", function() {
                var selectedAnswer = document.getElementsByClassName("answer-active");
        
                // If there's no active class
                if (current.length > 0) {
                    current[0].className = current[0].className.replace(" answer-active", "");
                }
        
                // Add the active class to the current/clicked button
                this.className += " answer-active";
            });
        }
    // if (selectedAnswerTOBECREATED === correctAnswer.value) {
    //     answeredCorrectly = True;
    //     //selectedAnswerTOBECREATED becomes Green;
    //     // If confirming button will be used: button.addEventListener("click", submitAnswer);
    // } else {
    //     answeredCorrectly = False;
    //     //selectedAnswerTOBECREATED becomes Red;
    //     //correctAsnwer becomes green;
    // }
}


// Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btn.length; i++) {
//     answerButtons[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");

//         // If there's no active class
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" active", "");
//         }

//         // Add the active class to the current/clicked button
//         this.className += " active";
//     });
// }




/*
//Score update Function based on AsnweredCorrectly being True or False
function updateScore() {
    if (answeredCorrectly == True) {
        score++
    }
}

See previous question Funtion
function back() {

}


     updateScore();
    finalScreen();
*/
//Reset the 10 second timer for the next question 
function resetTimer() {
    clearInterval(countdownInterval);
    countdownTimer.innerText = 10; 
}

//When the "Next" button is clicked the questionCount(index) is incremented with the ++ operator, presenting the next question
function next() {
        questionCount++;
        showQuestion(questionCount);
}

//Display question and asnwer options and calls the timer() function
function showQuestion(index) {
    qanda.classList.remove("hide");
    input.classList.add("hide");
    resetTimer();
    timer();

    questionp.textContent = `${questions[index].question}`;
    let optionTag =
        `<div id="answer-buttons"><button id="optionA" class="options btn">${questions[index].options.optionA}</button></div>
    <div id="answer-buttons"><button id="optionB" class="options btn">${questions[index].options.optionB}</button></div>
    <div id="answer-buttons"><button id="optionC" class="options btn">${questions[index].options.optionC}</button></div>`;
    answerButtons.innerHTML = optionTag;
}


//Start game fuction validates if inputs Name and Age are provided and calls the showQuestion() function
function startGame() {
    let userName = document.getElementById("name").value;
    let userAge = document.getElementById("age").value;
    if (!userName && !userAge) {
        alert("Please enter your Name and Age.");
        return;
    } else if (userName && userAge) {
        console.log("Name:", userName);
        console.log("Age:", userAge);
    };

    questionCount = 0;
    score = 0;
    showQuestion(0);
}

