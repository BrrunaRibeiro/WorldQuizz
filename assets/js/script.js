document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementsByTagName("div");

})
//Assign const var to main elements(Timer, Tutorial button and Start button)
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial")
    .addEventListener("click", startTutorial);
const startButton = document.getElementById("start")
    .addEventListener("click", startGame);



//Add object with all questions and answers
const questions = [
    {
        question: "Which country is famous for the ancient pyramids?",
        options: {
            optionA: "Greece",
            optionB: "Egypt",
            optionC: "Mexico"
        },
        correctAnswer: "Egypt"
    },
    {
        question: "In which city is the iconic Eiffel Tower located?",
        options: {
            optionA: "Barcelona",
            optionB: "Rome",
            optionC: "Paris"
        },
        correctAnswer: "Paris"
    },

]

questionElement = document.getElementById("question").innerText = questions[0].question;
answerButtons = document.getElementById("answer-buttons");
nextButton = document.getElementById("next");
console.log(questions[0].question);

let currentQuestion = 0;
let score = 0;

//User's inputs(it will be the name will be shown in the Final Score screen)
function storeInputs() {
    let userName = document.getElementById("name").value;
    console.log(userName);

    let userAge = document.getElementById("age").value;
    console.log(userAge);
}


//Start Tutorial Function
function startTutorial() {
    //Add image/photo with instructions
    //Add Start button to start the quiz from the tutorial as well
}

//Display question and asnwer options Funtion
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNumber + ". " currentQuestion.question;

    currentQuestion.options.forEach(options => {
        const button = document.createElement("button");
        button.innerHTML = options.value;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        });
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
            //Go to next question
        }
    }, 1000);
    if (count < 5) {
        countdownTimer.classList.add("5left");
    } else {
        countdownTimer.classList.remove("5left");
    }
}

// Check if awnwer selected is the correct answer Function

/*function checkAnswer() {
    let answerButton
    if (options.value === correctAnswer.value) {
        answeredCorrectly = True;
        button.addEventListener("click", submitAnswer);
    } else {
        answeredCorrectly = False;
    }
}

//Submit selected answer Funtion
function submitAnswer() {
    document.addEventListener("click", document.getElementById("confirm")); {
        checkAnswer();
    }
}
*/

//Score update Funtion based on AsnweredCorrectly being True or False Funtion
function updateScore() {
    if (answeredCorrectly == True) {
        score++
    }
}

//See previous question Funtion
//function back() {
//
//}

//Exit game completely and go back to index.html page function
//function exit() {
//
//}



//Start game
function startGame() {
    var userName = document.getElementById("name").value;
    var userAge = document.getElementById("age").value;
    if (!userName && !userAge) {
        alert("Please enter your Name and Age.");
        return;
    } else if (userName && userAge) {
        console.log("Name:", userName);
        console.log("Age:", userAge);
    }
    qanda.classList.remove("hide");
    input.classList.add("hide");
    showQuestion();
    timer();

}

