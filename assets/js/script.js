import { questions } from "./questionscontent.js";

document.addEventListener("DOMContentLoaded", () => {


    //Assign const variable to main elements for future use
    const countdownTimer = document.getElementById("countdown-timer");
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", startGame);
    const nextButton1 = document.getElementById("next-correct");
    const nextButton2 = document.getElementById("next-wrong");
    nextButton1.addEventListener("click", next);
    nextButton2.addEventListener("click", next);
    const option = document.getElementsByClassName("option");
    const answerA = document.getElementById("optionA");
    const answerB = document.getElementById("optionB");
    const answerC = document.getElementById("optionC");
    const questionp = document.getElementById("questionp");
    const closeRestart = document.getElementById("close-restart");
    closeRestart.addEventListener("click", eraseCache);
    const modalCorrect = document.getElementById("answered-correctly-modal");
    const modalWrong = document.getElementById("answered-wrong-modal");
    const modalEndGame = document.getElementById("end-game-modal");

    let questionCount;
    let questionNum = 0;
    let score = 0;
    let countdownInterval;


    // Timer countdown Function
    function timer() {
        let count = 10;
        countdownTimer.innerText = count;
        countdownInterval = setInterval(() => {
            count--;
            countdownTimer.innerText = count;
            if (count === 0) {
                clearInterval(countdownInterval);
                next();
            }
        }, 1000);
    }

    //Reset the 10 second timer for the next question 
    function resetTimer() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
    }

    function eraseCache() {
        // Append the eraseCache parameter to the URL
        var url = new URL(window.location.href);
        url.searchParams.set('eraseCache', 'true');
        
        // Reload the page with the new URL
        window.location.href = url.toString();
    }
    
    // Check if the URL contains the eraseCache parameter
    if (window.location.search.includes('eraseCache=true')) {
        // Clear the cache (implementation depends on what you mean by "cache")
        // For example, you might want to clear localStorage or sessionStorage
        // localStorage.clear();
        // sessionStorage.clear();
    
        // Remove the eraseCache parameter from the URL
        var url = new URL(window.location.href);
        url.searchParams.delete('eraseCache');
        window.history.replaceState({}, document.title, url.toString());
    }

    //Loop through the options and add Click Event listener that calls optionSelected function
    for (var i = 0; i < option.length; i++) {
        option[i].addEventListener("click", optionSelected);
    }

    // function closeModal() {
    //     modal.style.display = "none";
    // }

    function handleModalClick(event, modal, action) {
        if (event.target === modal) {
            action();
            $(modal).modal("hide");
        }
    }

    window.addEventListener("click", function(event) {
        handleModalClick(event, modalCorrect, next);
        handleModalClick(event, modalWrong, next);
        handleModalClick(event, modalEndGame, eraseCache);
    });


    //Validates the selected answer and alerts the user if it is the correct one or not
    function optionSelected(event) {
        resetTimer();
        const clickedItem = event.target.innerText;
        const correctOption = questions[questionCount].correctAnswer;
        if (correctOption === clickedItem) {
            score++;
            $("#answered-correctly-modal").modal("show");
        } else {
            $("#answered-wrong-modal").modal("show");
        }
    }

    //The questionCount(index) is incremented with the ++ operator
    //Presents the next question
    //If the questionNum reaches 5, the game is over and the score is displayed
    function next() {
        questionCount++;
        questionNum++;
        if (questionNum >= 5) {
            $("#end-game-modal").modal("show");
            $("#modal-body-endgame").append("<p>You got " + score + " out of 5 questions correct!</p>");
            qanda.classList.add("hide");
            input.classList.remove("hide");
        } else {
            showQuestion(questionCount);
        }
    }

    //Display question and answer options and calls the timer() function
    function showQuestion(index) {
        qanda.classList.remove("hide");
        input.classList.add("hide");
        resetTimer();
        timer();

        questionp.textContent = `${questions[index].question}`;
        let optionTag1 = `<span id="optionA" class="option optionA">${questions[index].options.optionA}</span>`;
        let optionTag2 = `<span id="optionB" class="option optionB">${questions[index].options.optionB}</span>`;
        let optionTag3 = `<span id="optionC" class="option optionC">${questions[index].options.optionC}</span>`;

        answerA.innerHTML = optionTag1;
        answerB.innerHTML = optionTag2;
        answerC.innerHTML = optionTag3;

        // Re-attach event listeners to new option elements
        document.getElementById("optionA").addEventListener("click", optionSelected);
        document.getElementById("optionB").addEventListener("click", optionSelected);
        document.getElementById("optionC").addEventListener("click", optionSelected);
    }

    //Randomize the order of the questions using Fisher-Yates Shuffle Algorithm
    function randomizeQuestions(array) {
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    //Validates if inputs Name and Age are provided
    //Calls functions to randomize the questions
    //Calls the showQuestion() function
    //Game starts
    function startGame() {
        let userName = document.getElementById("name").value;
        let userAge = document.getElementById("age").value;
        if (!userAge) {
            alert("Please enter your Age.");
            return;
        } else if (!userName) {
            alert("Please enter your Name.");
            return;
        } else if (!userName || !userAge) {
            alert("Please enter your Name and Age.");
            return;
        } else if (userName && userAge) {
            questionCount = 0;
            questionNum = 0;
            score = 0;
            randomizeQuestions(questions);
            showQuestion(0);
        }
    }
});