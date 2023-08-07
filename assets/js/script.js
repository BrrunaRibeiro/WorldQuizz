document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementsByTagName("button");
})

//Assign const variable to main elements for future use
const countdownTimer = document.getElementById("countdown-timer");
const tutorialButton = document.getElementById("tutorial")
    .addEventListener("click", startTutorial);
const startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);
// startButton.onclick = () => {
//     // qanda.classList.add('active');
//     // input.classList.remove('active');
// }
const nextButton = document.getElementById("next");
const answerButtons = document.getElementById("answer-buttons");
const btn = answerButtons.getElementsByClassName("btn");
const questionp = document.getElementById("questionp");
questionCount = 0;
let score = 0;

//Creates an array with all question objects with nested objects with answer options
const questions = [
    {
      "question": "Which city is famous for its historical connection to the Parthenon?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the longest river in Africa?",
      "options": {
        "optionA": "Nile River",
        "optionB": "Congo River",
        "optionC": "Zambezi River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "Which country is famous for its ancient ruins of Machu Picchu?",
      "options": {
        "optionA": "Peru",
        "optionB": "Mexico",
        "optionC": "Brazil"
      },
      "correctAnswer": "Peru"
    },
    {
      "question": "What is the official language spoken in France?",
      "options": {
        "optionA": "French",
        "optionB": "Spanish",
        "optionC": "German"
      },
      "correctAnswer": "French"
    },
    {
      "question": "Which desert is located in Africa?",
      "options": {
        "optionA": "Mojave Desert",
        "optionB": "Sahara Desert",
        "optionC": "Arabian Desert"
      },
      "correctAnswer": "Sahara Desert"
    },
    {
      "question": "What is the currency used in South Korea?",
      "options": {
        "optionA": "Yuan",
        "optionB": "Won",
        "optionC": "Peso"
      },
      "correctAnswer": "Won"
    },
    {
      "question": "Which city is famous for its iconic Red Square?",
      "options": {
        "optionA": "Moscow",
        "optionB": "St. Petersburg",
        "optionC": "Berlin"
      },
      "correctAnswer": "Moscow"
    },
    {
      "question": "What is the highest mountain in the world?",
      "options": {
        "optionA": "Mount Kilimanjaro",
        "optionB": "K2",
        "optionC": "Mount Everest"
      },
      "correctAnswer": "Mount Everest"
    },
    {
      "question": "Which country is known for its stunning Great Barrier Reef?",
      "options": {
        "optionA": "Australia",
        "optionB": "Philippines",
        "optionC": "Indonesia"
      },
      "correctAnswer": "Australia"
    },
    {
      "question": "What is the official language spoken in Russia?",
      "options": {
        "optionA": "Russian",
        "optionB": "Ukrainian",
        "optionC": "Polish"
      },
      "correctAnswer": "Russian"
    },
    {
      "question": "Which city is famous for its historical connection to the Roman Colosseum?",
      "options": {
        "optionA": "Athens",
        "optionB": "Rome",
        "optionC": "Cairo"
      },
      "correctAnswer": "Rome"
    },
    {
      "question": "What is the deepest lake in the world?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Lake Victoria",
        "optionC": "Lake Baikal"
      },
      "correctAnswer": "Lake Baikal"
    },
    {
      "question": "Which country is famous for the ancient city of Petra?",
      "options": {
        "optionA": "Egypt",
        "optionB": "Greece",
        "optionC": "Jordan"
      },
      "correctAnswer": "Jordan"
    },
    {
      "question": "What is the official language spoken in Spain?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Great Wall?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the largest lake in Africa?",
      "options": {
        "optionA": "Lake Victoria",
        "optionB": "Lake Tanganyika",
        "optionC": "Lake Malawi"
      },
      "correctAnswer": "Lake Victoria"
    },
    {
      "question": "Which country is famous for its stunning lavender fields?",
      "options": {
        "optionA": "Spain",
        "optionB": "France",
        "optionC": "Italy"
      },
      "correctAnswer": "France"
    },
    {
      "question": "What is the official language spoken in Argentina?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Berlin Wall?",
      "options": {
        "optionA": "Munich",
        "optionB": "Berlin",
        "optionC": "Frankfurt"
      },
      "correctAnswer": "Berlin"
    },
    {
      "question": "What is the largest coral reef system in the world?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Andros Barrier Reef"
      },
      "correctAnswer": "Great Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Cairo?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "In which country can you find the famous city of Venice?",
      "options": {
        "optionA": "Italy",
        "optionB": "Spain",
        "optionC": "Greece"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "Which country is famous for its beautiful Santorini island?",
      "options": {
        "optionA": "Greece",
        "optionB": "Italy",
        "optionC": "Croatia"
      },
      "correctAnswer": "Greece"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Acropolis?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the largest island in the Mediterranean Sea?",
      "options": {
        "optionA": "Sicily",
        "optionB": "Corsica",
        "optionC": "Sardinia"
      },
      "correctAnswer": "Sardinia"
    },
    {
      "question": "Which country is famous for its stunning cherry blossom festival?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "What is the official language spoken in Canada?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Spanish"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Forbidden City?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the world's largest coral atoll?",
      "options": {
        "optionA": "Bora Bora",
        "optionB": "Maldives",
        "optionC": "Great Chagos Bank"
      },
      "correctAnswer": "Great Chagos Bank"
    },
    {
      "question": "Which river is associated with the city of London?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Thames River"
    },
    {
      "question": "In which country can you visit the famous city of Barcelona?",
      "options": {
        "optionA": "Spain",
        "optionB": "Italy",
        "optionC": "Greece"
      },
      "correctAnswer": "Spain"
    },
    {
      "question": "Which country is famous for its beautiful Galápagos Islands?",
      "options": {
        "optionA": "Brazil",
        "optionB": "Ecuador",
        "optionC": "Argentina"
      },
      "correctAnswer": "Ecuador"
    },
    {
      "question": "What is the official language spoken in South Africa?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Afrikaans"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Alhambra?",
      "options": {
        "optionA": "Rome",
        "optionB": "Granada",
        "optionC": "Cairo"
      },
      "correctAnswer": "Granada"
    },
    {
      "question": "What is the largest freshwater lake in North America?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Great Slave Lake",
        "optionC": "Lake Michigan"
      },
      "correctAnswer": "Lake Superior"
    },
    {
      "question": "Which country is famous for its stunning Amalfi Coast?",
      "options": {
        "optionA": "Italy",
        "optionB": "Greece",
        "optionC": "Spain"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "What is the official language spoken in Egypt?",
      "options": {
        "optionA": "Arabic",
        "optionB": "Hebrew",
        "optionC": "Persian"
      },
      "correctAnswer": "Arabic"
    },
    {
      "question": "Which city is famous for its historical connection to the Tower of London?",
      "options": {
        "optionA": "London",
        "optionB": "Paris",
        "optionC": "Edinburgh"
      },
      "correctAnswer": "London"
    },
    {
      "question": "What is the largest coral reef system in the Atlantic Ocean?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Mesoamerican Barrier Reef"
      },
      "correctAnswer": "Mesoamerican Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Paris?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Seine River"
      },
      "correctAnswer": "Seine River"
    },
    {
      "question": "In which country can you visit the famous city of Rio de Janeiro?",
      "options": {
        "optionA": "Brazil",
        "optionB": "Argentina",
        "optionC": "Colombia"
      },
      "correctAnswer": "Brazil"
    },
    {
      "question": "Which country is famous for its stunning Scottish Highlands?",
      "options": {
        "optionA": "Ireland",
        "optionB": "Scotland",
        "optionC": "Wales"
      },
      "correctAnswer": "Scotland"
    },
    {
      "question": "What is the official language spoken in India?",
      "options": {
        "optionA": "Hindi",
        "optionB": "Bengali",
        "optionC": "Tamil"
      },
      "correctAnswer": "Hindi"
    },
    {
      "question": "Which city is famous for its historical connection to the Hermitage Museum?",
      "options": {
        "optionA": "Moscow",
        "optionB": "St. Petersburg",
        "optionC": "Kiev"
      },
      "correctAnswer": "St. Petersburg"
    },
    {
      "question": "What is the largest bay in the world?",
      "options": {
        "optionA": "San Francisco Bay",
        "optionB": "Hudson Bay",
        "optionC": "Bay of Bengal"
      },
      "correctAnswer": "Hudson Bay"
    },
    {
      "question": "Which river is associated with the city of New York City?",
      "options": {
        "optionA": "Hudson River",
        "optionB": "Thames River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Hudson River"
    },
    {
      "question": "In which country can you visit the famous city of Tokyo?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "Which country is famous for its stunning Victoria Falls?",
      "options": {
        "optionA": "South Africa",
        "optionB": "Zimbabwe",
        "optionC": "Botswana"
      },
      "correctAnswer": "Zimbabwe"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Parthenon?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the longest river in Africa?",
      "options": {
        "optionA": "Nile River",
        "optionB": "Congo River",
        "optionC": "Zambezi River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "Which country is famous for its ancient ruins of Machu Picchu?",
      "options": {
        "optionA": "Peru",
        "optionB": "Mexico",
        "optionC": "Brazil"
      },
      "correctAnswer": "Peru"
    },
    {
      "question": "What is the official language spoken in France?",
      "options": {
        "optionA": "French",
        "optionB": "Spanish",
        "optionC": "German"
      },
      "correctAnswer": "French"
    },
    {
      "question": "Which desert is located in Africa?",
      "options": {
        "optionA": "Mojave Desert",
        "optionB": "Sahara Desert",
        "optionC": "Arabian Desert"
      },
      "correctAnswer": "Sahara Desert"
    },
    {
      "question": "What is the currency used in South Korea?",
      "options": {
        "optionA": "Yuan",
        "optionB": "Won",
        "optionC": "Peso"
      },
      "correctAnswer": "Won"
    },
    {
      "question": "Which city is famous for its iconic Red Square?",
      "options": {
        "optionA": "Moscow",
        "optionB": "St. Petersburg",
        "optionC": "Berlin"
      },
      "correctAnswer": "Moscow"
    },
    {
      "question": "What is the highest mountain in the world?",
      "options": {
        "optionA": "Mount Kilimanjaro",
        "optionB": "K2",
        "optionC": "Mount Everest"
      },
      "correctAnswer": "Mount Everest"
    },
    {
      "question": "Which country is known for its stunning Great Barrier Reef?",
      "options": {
        "optionA": "Australia",
        "optionB": "Philippines",
        "optionC": "Indonesia"
      },
      "correctAnswer": "Australia"
    },
    {
      "question": "What is the official language spoken in Russia?",
      "options": {
        "optionA": "Russian",
        "optionB": "Ukrainian",
        "optionC": "Polish"
      },
      "correctAnswer": "Russian"
    },
    {
      "question": "Which city is famous for its historical connection to the Roman Colosseum?",
      "options": {
        "optionA": "Athens",
        "optionB": "Rome",
        "optionC": "Cairo"
      },
      "correctAnswer": "Rome"
    },
    {
      "question": "What is the deepest lake in the world?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Lake Victoria",
        "optionC": "Lake Baikal"
      },
      "correctAnswer": "Lake Baikal"
    },
    {
      "question": "Which country is famous for the ancient city of Petra?",
      "options": {
        "optionA": "Egypt",
        "optionB": "Greece",
        "optionC": "Jordan"
      },
      "correctAnswer": "Jordan"
    },
    {
      "question": "What is the official language spoken in Spain?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Great Wall?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the largest lake in Africa?",
      "options": {
        "optionA": "Lake Victoria",
        "optionB": "Lake Tanganyika",
        "optionC": "Lake Malawi"
      },
      "correctAnswer": "Lake Victoria"
    },
    {
      "question": "Which country is famous for its stunning lavender fields?",
      "options": {
        "optionA": "Spain",
        "optionB": "France",
        "optionC": "Italy"
      },
      "correctAnswer": "France"
    },
    {
      "question": "What is the official language spoken in Argentina?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Berlin Wall?",
      "options": {
        "optionA": "Munich",
        "optionB": "Berlin",
        "optionC": "Frankfurt"
      },
      "correctAnswer": "Berlin"
    },
    {
      "question": "What is the largest coral reef system in the world?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Andros Barrier Reef"
      },
      "correctAnswer": "Great Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Cairo?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "In which country can you find the famous city of Venice?",
      "options": {
        "optionA": "Italy",
        "optionB": "Spain",
        "optionC": "Greece"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "Which country is famous for its beautiful Santorini island?",
      "options": {
        "optionA": "Greece",
        "optionB": "Italy",
        "optionC": "Croatia"
      },
      "correctAnswer": "Greece"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Acropolis?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the largest island in the Mediterranean Sea?",
      "options": {
        "optionA": "Sicily",
        "optionB": "Corsica",
        "optionC": "Sardinia"
      },
      "correctAnswer": "Sardinia"
    },
    {
      "question": "Which country is famous for its stunning cherry blossom festival?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "What is the official language spoken in Canada?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Spanish"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Forbidden City?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the world's largest coral atoll?",
      "options": {
        "optionA": "Bora Bora",
        "optionB": "Maldives",
        "optionC": "Great Chagos Bank"
      },
      "correctAnswer": "Great Chagos Bank"
    },
    {
      "question": "Which river is associated with the city of London?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Thames River"
    },
    {
      "question": "In which country can you visit the famous city of Barcelona?",
      "options": {
        "optionA": "Spain",
        "optionB": "Italy",
        "optionC": "Greece"
      },
      "correctAnswer": "Spain"
    },
    {
      "question": "Which country is famous for its beautiful Galápagos Islands?",
      "options": {
        "optionA": "Brazil",
        "optionB": "Ecuador",
        "optionC": "Argentina"
      },
      "correctAnswer": "Ecuador"
    },
    {
      "question": "What is the official language spoken in South Africa?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Afrikaans"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Alhambra?",
      "options": {
        "optionA": "Rome",
        "optionB": "Granada",
        "optionC": "Cairo"
      },
      "correctAnswer": "Granada"
    },
    {
      "question": "What is the largest freshwater lake in North America?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Great Slave Lake",
        "optionC": "Lake Michigan"
      },
      "correctAnswer": "Lake Superior"
    },
    {
      "question": "Which country is famous for its stunning Amalfi Coast?",
      "options": {
        "optionA": "Italy",
        "optionB": "Greece",
        "optionC": "Spain"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "What is the official language spoken in Egypt?",
      "options": {
        "optionA": "Arabic",
        "optionB": "Hebrew",
        "optionC": "Persian"
      },
      "correctAnswer": "Arabic"
    },
    {
      "question": "Which city is famous for its historical connection to the Tower of London?",
      "options": {
        "optionA": "London",
        "optionB": "Paris",
        "optionC": "Edinburgh"
      },
      "correctAnswer": "London"
    },
    {
      "question": "What is the largest coral reef system in the Atlantic Ocean?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Mesoamerican Barrier Reef"
      },
      "correctAnswer": "Mesoamerican Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Paris?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Seine River"
      },
      "correctAnswer": "Seine River"
    },
    {
      "question": "In which country can you visit the famous city of Rio de Janeiro?",
      "options": {
        "optionA": "Brazil",
        "optionB": "Argentina",
        "optionC": "Colombia"
      },
      "correctAnswer": "Brazil"
    },
    {
      "question": "Which country is famous for its stunning Scottish Highlands?",
      "options": {
        "optionA": "Ireland",
        "optionB": "Scotland",
        "optionC": "Wales"
      },
      "correctAnswer": "Scotland"
    },
    {
      "question": "What is the official language spoken in India?",
      "options": {
        "optionA": "Hindi",
        "optionB": "Bengali",
        "optionC": "Tamil"
      },
      "correctAnswer": "Hindi"
    },
    {
      "question": "Which city is famous for its historical connection to the Hermitage Museum?",
      "options": {
        "optionA": "Moscow",
        "optionB": "St. Petersburg",
        "optionC": "Kiev"
      },
      "correctAnswer": "St. Petersburg"
    },
    {
      "question": "What is the largest bay in the world?",
      "options": {
        "optionA": "San Francisco Bay",
        "optionB": "Hudson Bay",
        "optionC": "Bay of Bengal"
      },
      "correctAnswer": "Hudson Bay"
    },
    {
      "question": "Which river is associated with the city of New York City?",
      "options": {
        "optionA": "Hudson River",
        "optionB": "Thames River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Hudson River"
    },
    {
      "question": "In which country can you visit the famous city of Tokyo?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "Which country is famous for its stunning Victoria Falls?",
      "options": {
        "optionA": "South Africa",
        "optionB": "Zimbabwe",
        "optionC": "Botswana"
      },
      "correctAnswer": "Zimbabwe"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Parthenon?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the longest river in Africa?",
      "options": {
        "optionA": "Nile River",
        "optionB": "Congo River",
        "optionC": "Zambezi River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "Which country is famous for its ancient ruins of Machu Picchu?",
      "options": {
        "optionA": "Peru",
        "optionB": "Mexico",
        "optionC": "Brazil"
      },
      "correctAnswer": "Peru"
    },
    {
      "question": "What is the official language spoken in France?",
      "options": {
        "optionA": "French",
        "optionB": "Spanish",
        "optionC": "German"
      },
      "correctAnswer": "French"
    },
    {
      "question": "Which desert is located in Africa?",
      "options": {
        "optionA": "Mojave Desert",
        "optionB": "Sahara Desert",
        "optionC": "Arabian Desert"
      },
      "correctAnswer": "Sahara Desert"
    },
    {
      "question": "What is the currency used in South Korea?",
      "options": {
        "optionA": "Yuan",
        "optionB": "Won",
        "optionC": "Peso"
      },
      "correctAnswer": "Won"
    },
    {
      "question": "Which city is famous for its iconic Red Square?",
      "options": {
        "optionA": "Moscow",
        "optionB": "St. Petersburg",
        "optionC": "Berlin"
      },
      "correctAnswer": "Moscow"
    },
    {
      "question": "What is the highest mountain in the world?",
      "options": {
        "optionA": "Mount Kilimanjaro",
        "optionB": "K2",
        "optionC": "Mount Everest"
      },
      "correctAnswer": "Mount Everest"
    },
    {
      "question": "Which country is known for its stunning Great Barrier Reef?",
      "options": {
        "optionA": "Australia",
        "optionB": "Philippines",
        "optionC": "Indonesia"
      },
      "correctAnswer": "Australia"
    },
    {
      "question": "What is the official language spoken in Russia?",
      "options": {
        "optionA": "Russian",
        "optionB": "Ukrainian",
        "optionC": "Polish"
      },
      "correctAnswer": "Russian"
    },
    {
      "question": "Which city is famous for its historical connection to the Roman Colosseum?",
      "options": {
        "optionA": "Athens",
        "optionB": "Rome",
        "optionC": "Cairo"
      },
      "correctAnswer": "Rome"
    },
    {
      "question": "What is the deepest lake in the world?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Lake Victoria",
        "optionC": "Lake Baikal"
      },
      "correctAnswer": "Lake Baikal"
    },
    {
      "question": "Which country is famous for the ancient city of Petra?",
      "options": {
        "optionA": "Egypt",
        "optionB": "Greece",
        "optionC": "Jordan"
      },
      "correctAnswer": "Jordan"
    },
    {
      "question": "What is the official language spoken in Spain?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Great Wall?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the largest lake in Africa?",
      "options": {
        "optionA": "Lake Victoria",
        "optionB": "Lake Tanganyika",
        "optionC": "Lake Malawi"
      },
      "correctAnswer": "Lake Victoria"
    },
    {
      "question": "Which country is famous for its stunning lavender fields?",
      "options": {
        "optionA": "Spain",
        "optionB": "France",
        "optionC": "Italy"
      },
      "correctAnswer": "France"
    },
    {
      "question": "What is the official language spoken in Argentina?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Berlin Wall?",
      "options": {
        "optionA": "Munich",
        "optionB": "Berlin",
        "optionC": "Frankfurt"
      },
      "correctAnswer": "Berlin"
    },
    {
      "question": "What is the largest coral reef system in the world?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Andros Barrier Reef"
      },
      "correctAnswer": "Great Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Cairo?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Nile River"
    },
    {
      "question": "In which country can you find the famous city of Venice?",
      "options": {
        "optionA": "Italy",
        "optionB": "Spain",
        "optionC": "Greece"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Acropolis?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the largest island in the Mediterranean Sea?",
      "options": {
        "optionA": "Sicily",
        "optionB": "Corsica",
        "optionC": "Sardinia"
      },
      "correctAnswer": "Sardinia"
    },
    {
      "question": "Which country is famous for its stunning cherry blossom festival?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "What is the official language spoken in Canada?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Spanish"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Forbidden City?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the world's largest coral atoll?",
      "options": {
        "optionA": "Bora Bora",
        "optionB": "Maldives",
        "optionC": "Great Chagos Bank"
      },
      "correctAnswer": "Great Chagos Bank"
    },
    {
      "question": "Which river is associated with the city of London?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Nile River"
      },
      "correctAnswer": "Thames River"
    },
    {
      "question": "In which country can you visit the famous city of Barcelona?",
      "options": {
        "optionA": "Spain",
        "optionB": "Italy",
        "optionC": "Greece"
      },
      "correctAnswer": "Spain"
    },
    {
      "question": "Which country is famous for its beautiful Galápagos Islands?",
      "options": {
        "optionA": "Brazil",
        "optionB": "Ecuador",
        "optionC": "Argentina"
      },
      "correctAnswer": "Ecuador"
    },
    {
      "question": "What is the official language spoken in South Africa?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Afrikaans"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Alhambra?",
      "options": {
        "optionA": "Rome",
        "optionB": "Granada",
        "optionC": "Cairo"
      },
      "correctAnswer": "Granada"
    },
    {
      "question": "What is the largest freshwater lake in North America?",
      "options": {
        "optionA": "Lake Superior",
        "optionB": "Great Slave Lake",
        "optionC": "Lake Michigan"
      },
      "correctAnswer": "Lake Superior"
    },
    {
      "question": "Which country is famous for its stunning Amalfi Coast?",
      "options": {
        "optionA": "Italy",
        "optionB": "Greece",
        "optionC": "Spain"
      },
      "correctAnswer": "Italy"
    },
    {
      "question": "What is the official language spoken in Egypt?",
      "options": {
        "optionA": "Arabic",
        "optionB": "Hebrew",
        "optionC": "Persian"
      },
      "correctAnswer": "Arabic"
    },
    {
      "question": "Which city is famous for its historical connection to the Tower of London?",
      "options": {
        "optionA": "London",
        "optionB": "Paris",
        "optionC": "Edinburgh"
      },
      "correctAnswer": "London"
    },
    {
      "question": "What is the largest coral reef system in the Atlantic Ocean?",
      "options": {
        "optionA": "Great Barrier Reef",
        "optionB": "Belize Barrier Reef",
        "optionC": "Mesoamerican Barrier Reef"
      },
      "correctAnswer": "Mesoamerican Barrier Reef"
    },
    {
      "question": "Which river is associated with the city of Paris?",
      "options": {
        "optionA": "Thames River",
        "optionB": "Tiber River",
        "optionC": "Seine River"
      },
      "correctAnswer": "Seine River"
    },
    {
      "question": "What is the official language spoken in Mexico?",
      "options": {
        "optionA": "Spanish",
        "optionB": "Portuguese",
        "optionC": "Italian"
      },
      "correctAnswer": "Spanish"
    },
    {
      "question": "Which city is famous for its historical connection to the Acropolis?",
      "options": {
        "optionA": "Rome",
        "optionB": "Athens",
        "optionC": "Cairo"
      },
      "correctAnswer": "Athens"
    },
    {
      "question": "What is the largest island in the Mediterranean Sea?",
      "options": {
        "optionA": "Sicily",
        "optionB": "Corsica",
        "optionC": "Sardinia"
      },
      "correctAnswer": "Sardinia"
    },
    {
      "question": "Which country is famous for its stunning cherry blossom festival?",
      "options": {
        "optionA": "China",
        "optionB": "Japan",
        "optionC": "South Korea"
      },
      "correctAnswer": "Japan"
    },
    {
      "question": "What is the official language spoken in Canada?",
      "options": {
        "optionA": "English",
        "optionB": "French",
        "optionC": "Spanish"
      },
      "correctAnswer": "English"
    },
    {
      "question": "Which city is famous for its historical connection to the Forbidden City?",
      "options": {
        "optionA": "Beijing",
        "optionB": "Shanghai",
        "optionC": "Hong Kong"
      },
      "correctAnswer": "Beijing"
    },
    {
      "question": "What is the world's largest coral atoll?",
      "options": {
        "optionA": "Bora Bora",
        "optionB": "Maldives",
        "optionC": "Great Chagos Bank"
      },
      "correctAnswer": "Great Chagos Bank"
    }
];

//Start Tutorial Function
function startTutorial(src, width, height) {
    var img = document.createElement(img);
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
    startTutorial('tutorial.webp', 750, 750);
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
            //what to do when its 0
        }
    }, 1000);
    if (count < "5") {
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





//Score update Function based on AsnweredCorrectly being True or False
function updateScore() {
    if (answeredCorrectly == True) {
        score++
    }
}

See previous question Funtion
function back() {

}

Exit game completely and go back to index.html page function
function exit() {

}


     checkAnswer();
     updateScore();
     next();
     reset();
*/
//When the "Next" button is clicked the questionCount(index) is incremented with the ++ operator, presnting the next question
function next() {
    nextButton.onclick = () => {
        questionCount++;
        showQuestion(questionCount);
    }
}

//Display question and asnwer options and calls the timer() function
function showQuestion(index) {
    qanda.classList.remove("hide");
    input.classList.add("hide");
    timer();

    questionp.textContent = `${questions[index].question}`;

    let optionTag = 
   `<div id="answer-buttons"><button id="optionA" class="options btn">${questions[index].options.optionA}</button></div>
    <div id="answer-buttons"><button id="optionA" class="options btn">${questions[index].options.optionB}</button></div>
    <div id="answer-buttons"><button id="optionA" class="options btn">${questions[index].options.optionC}</button></div>`;

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
    
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(0);
}

