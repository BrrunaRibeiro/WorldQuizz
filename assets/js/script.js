import { questions } from "./questionscontent.js";

//Assign const variable to main elements for future use
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial")
tutorialButton.addEventListener("click", startTutorial);
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
const nextButton = document.getElementById("next")
nextButton.addEventListener("click", next);
//const options = document.querySelector("#options");
const option = document.getElementsByClassName("btn");
const answerA = document.getElementById("optionA")

const answerB = document.getElementById("optionB");
const answerC = document.getElementById("optionC");
const questionp = document.getElementById("questionp");



let questionCount = 0;
let score = 0;
let countdownInterval = 10;
let selectedAnswer;

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
}

//Reset the 10 second timer for the next question 
function resetTimer() {
    clearInterval(countdownInterval);
    countdownTimer.innerText = 10;
}

function optionSelected(event) {
	const clickedItem = event.target;
	const correctOption = questions[questionCount].correctAnswer;
	if (correctOption === clickedItem.text) {
        console.log("Correct!");
         score++; // Increase the score or perform any other actions
    }  else {
    // User's answer is incorrect
            console.log("Incorrect!");
            }
}

// function selectAnswer() {

//     answerA.onclick = () => {
//         answerA.classList.toggle("optionSelected(this)");
//         optionSelected();
//     }
//     answerB.onclick = () => {
//         answerB.classList.toggle("optionSelected(this)");
//         optionSelected();
//     }
//     answerC.onclick = () => {
//         answerB.classList.toggle("optionSelected(this)");
//         // optionSelected();
//         // answerC.setAttribute('onclick', 'optionSelected(this)');
//         // optionSelected();
//         checkAnswer();
//     }
// }

//Check if awnwer selected is the correct answer Function
// function checkAnswer {
//     //let selectedAnswer = event.target
//     const correctOption = questions[questionCount].correctAnswer;
//     if (selectedAnswer === correctOption) {
//         // User's answer is correct
//         console.log("Correct!");
//         score++; // Increase the score or perform any other actions
//     } else {
//         // User's answer is incorrect
//         console.log("Incorrect!");
//     }
// }
// for (var i = 0; i < option.length; i++) {
//     const button = option[i];
// // Check if the button has the "answer-active" class
// if (button.classList.contains("answer-active")) {
//     let selectedAnswer = button.classList.contains("answer-active").id;
//         console.log(selectedAnswer);
// }
// }

//                 // Add the active class to the current/clicked button
//                 this.className += " answer-active";
//             });
//         }
// if (selectedAnswer.innerHTML === correctAnswer.value) {
//     answeredCorrectly = True;
//     //selectedAnswerTOBECREATED becomes Green;
// } else {
//     answeredCorrectly = False;
//     //selectedAnswerTOBECREATED becomes Red;
//     //correctAsnwer becomes green;
// }
// function selectAnswer(selectedOption) {
//     console.log("You did it");
// const correctOption = questions[questionCount].correctOption; // Replace with how you store the correct answer in your questions array
// if (selectedOption === correctOption) {
//     // User's answer is correct
//     console.log("Correct!");
//     score++; // Increase the score or perform any other actions
// } else {
//     // User's answer is incorrect
//     console.log("Incorrect!");
//}



//finalScreen();

//Score update Function based on AsnweredCorrectly being True or False
function updateScore() {
    if (answeredCorrectly == True) {
        score++
    }
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
    let optionTag1 = `<span id="optionA" class="btn optionA">${questions[index].options.optionA}</span>`;
    let optionTag2 = `<span id="optionB" class="btn optionB">${questions[index].options.optionB}</span>`;
    let optionTag3 = `<span id="optionC" class="btn optionC">${questions[index].options.optionC}</span>`;

    answerA.innerHTML = optionTag1;
    answerB.innerHTML = optionTag2;
    answerC.innerHTML = optionTag3;
}


// let userAnswer = option[i].onclick;
// let correct = questions[questionCount].correctAnswer;
// for (let i = 0; i < option.length; i++) {
//     option[i].setAttribute('correct', alert("You did ut"));
//     if (userAnswer == correctAnswer) {
//         console.log('Answer is correct');
//         answer.classList.add("correct");
//     } else {
//         console.log('Answer is WRONG');
// }
// }

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