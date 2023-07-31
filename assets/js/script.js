document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
})

//Assign const var to main elements(Timer, Tutorial button and Start button)
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial");
const startButton = document.getElementById("start");
const div = getElementsByTagName("div");

//Add object with all questions and answers
const question = [
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
      }
    ]

//Add event listeners
startButton.addEventListener("click", startGame);
tutorialButton.addEventListener("click", startTutorial);

//User's inputs
var userName = document.getElementById("name").value;
var userAge = document.getElementById("age").value;


//Start Tutorial Function
function startTutorial () {
 //Add image/photo with instructions
 //Add Start button to start the quiz from the tutorial as well
}

//Display question and asnwer options Funtion
function showQuestion() {
    document.getElementById("question").innerText = question[0].question;
    document.getElementById("optionA").innerText = questionData.options.optionA;
    console.log(question[0].question);
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
}

// Check if awnwer selected is the correct answer Function
function checkAnswer() {
    if (options === correctAnswer) {
            answeredCorrectly = True;
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

//Score update Funtion based on AsnweredCorrectly being True or False Funtion
function updateScore() {
    if (answeredCorrectly == True) {
        score++
    }
}

//See previous question Funtion
function back() {
    
}

//Exit game completely and go back to index.html page function
function exit() {
    //
}


//Start game
function startGame() {
    if (userName || userAge) {
        div.classList.remove("hide");
        showQuestion();        
        } else (!userName || !userAge); {
        alert("Please enter your Name and Age.");
        return;
        }
}