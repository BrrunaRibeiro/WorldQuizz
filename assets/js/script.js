document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementsByTagName("div");

})
//Assign const var to main elements(Timer, Tutorial button, Start button and Next button)
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial")
    .addEventListener("click", startTutorial);
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
const next = document.getElementById("next")
    .addEventListener("click", next);


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

questionElement = document.getElementById("question")= questions[0].question;
answerButtons = document.getElementById("answer-buttons");
console.log(questions[0].question);

let currentQuestion = 0;
let score = 0;

//Start Tutorial Function
function startTutorial() {
    //Add image/photo with instructions
    //Add Start button to start the quiz from the tutorial as well
}

//Display question and asnwer options Funtion
/*function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNumber + ". " currentQuestion.question;

    currentQuestion.options.forEach(options => {
        const button = document.createElement("button");
        button.innerHTML = options.value; //NOT SURE HOW TO GET EACH OPTION'S VALUE
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}*/

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
            reset();//TO BE CREATED
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
    if (selectedAnswerTOBECREATED === correctAnswer.value) {
        answeredCorrectly = True;
        //selectedAnswerTOBECREATED becomes Green;
        // If confirming button will be used: button.addEventListener("click", submitAnswer);
    } else {
        answeredCorrectly = False;
        //selectedAnswerTOBECREATED becomes Red;
        //correctAsnwer becomes green;
    }
}




//Submit selected answer Funtion IF IT WILL BE USED OR ONLY NEXT
function submitAnswer() {
    document.addEventListener("click", document.getElementById("confirm")); { 
        checkAnswer();
    }
}
*/

// Get all buttons with class="btn" inside the container
var btns = answerButtons.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btn.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

function next() {

}



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
    };

    qanda.classList.remove("hide");
    input.classList.add("hide");
    showQuestion();
    timer();
    checkAnswer();
    updateScore();
    next();
    reset();
}

