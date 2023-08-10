import { questions } from "./questionscontent.js";

document.addEventListener("DOMContentLoaded", (event) => {


    //Assign const variable to main elements for future use
    const countdownTimer = document.getElementById("countdown-timer");
    const tutorialButton = document.getElementById("tutorial")
    tutorialButton.addEventListener("click", startTutorial);
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", startGame);
    const nextButton = document.getElementById("next")
    nextButton.addEventListener("click", next);
    const option = document.getElementsByClassName("btn");
    const answerA = document.getElementById("optionA")
    const answerB = document.getElementById("optionB");
    const answerC = document.getElementById("optionC");
    const questionp = document.getElementById("questionp");

    let questionCount = 0;
    let questionNum = 0;
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
                resetTimer();
                next();
            }
        }, 1000);
    }

    //Reset the 10 second timer for the next question 
    function resetTimer() {
        clearInterval(countdownInterval);
        countdownTimer.innerText = 10;
    }

    function eraseCache() {
        window.location = window.location.href+'?eraseCache=true';
      }

    //Loop through the options and add Click Event listener that calls optionSelected function
    for (var i = 0; i < option.length; i++) {
        option[i].addEventListener("click", optionSelected);
    }


    //Funtion selects the asnwer, validates the asnwer and alerts the user if it is the correct one 
    function optionSelected(event) {
        const clickedItem = event.target.innerText;
        const correctOption = questions[questionCount].correctAnswer;
        if (correctOption === clickedItem) {
            console.log("Correct!");
            score++;
            alert('You answered Correctly! Score = ' + score + ' Click "Next"');
            next();
        } else {
            // User's answer is incorrect
            console.log("Incorrect!");
            alert('You chose the wrong Asnwer! Click "Next"');
            next();
        }
        if (questionNum >= "5") {
            qanda.classList.add("hide");
            input.classList.remove("hide");
            alert("Thank you for playing! You scored " +score+" out of 5!");
            eraseCache()
        }
    }

    //When the "Next" button is clicked the questionCount(index) is incremented with the ++ operator, presenting the next question
    function next() {
        questionCount++;
        questionNum++;
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
        return;
    }
});