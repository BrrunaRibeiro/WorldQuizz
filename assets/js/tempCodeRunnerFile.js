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
    //qanda.classList.remove("hide");
    //input.classList.add("hide");
    showQuestion();