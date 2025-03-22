// Get number limit from URL
//const urlParams = new URLSearchParams(window.location.search);
const limit = parseInt(localStorage.getItem("Slimit"));

if (!limit || limit <= 0) {
    alert("Invalid number! Redirecting to home...");
    window.location.href = "/src/views/squares.html";
}

// Elements
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

// Store used numbers for current cycle
let usedNumbers = [];

// Generate new question
function generateQuestion() {
    // Reset if all numbers 1 to 'limit' are used
    if (usedNumbers.length === limit) usedNumbers = [];

    // Pick a unique random number from 1 to 'limit'
    let number;
    do {
        number = Math.floor(Math.random() * limit) + 1;
    } while (usedNumbers.includes(number));

    usedNumbers.push(number);

    // Generate correct answer
    const correctAnswer = number * number;
    questionEl.textContent = `What is ${number}² ?`;

    // Generate incorrect answers close to the correct answer
    let incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3) {
        let incorrect = correctAnswer + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 1);
        if (incorrect !== correctAnswer && incorrect > 0) {
            incorrectAnswers.add(incorrect);
        }
    }

    // Assign answers randomly
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5); // Shuffle

    // Set button values
    optionButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.onclick = () => checkAnswer(allAnswers[index], correctAnswer);
    });
}

// Check answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("✅ Correct! Well done!");
    } else {
        alert("❌ Wrong! Try again.");
    }
    generateQuestion(); // Continue with next question
}

// Initialize first question
generateQuestion();
