// ✅ Get number from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = parseInt(urlParams.get("num")); // Extract the number

// ✅ Validate number
if (isNaN(tableNumber) || tableNumber < 1) {
    alert("Invalid number! Redirecting...");
    window.location.href = "/index.html"; // Redirect if invalid
}

// ✅ Elements
const heading = document.getElementById("table-heading");
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

// ✅ Set heading
heading.textContent = `Let's Play with ${tableNumber}'s Table`;

// ✅ Store used numbers for the current cycle (1-10)
let usedNumbers = [];

// ✅ Generate new question
function generateQuestion() {
    if (usedNumbers.length === 10) usedNumbers = []; // Reset after 1-10 cycle

    let multiplier;
    do {
        multiplier = Math.floor(Math.random() * 10) + 1;
    } while (usedNumbers.includes(multiplier));

    usedNumbers.push(multiplier);

    // ✅ Generate correct answer
    const correctAnswer = tableNumber * multiplier;
    questionEl.textContent = `${tableNumber} × ${multiplier} = ?`;

    // ✅ Generate incorrect answers close to correct
    let incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3) {
        let incorrect = correctAnswer + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 5) + 1;
        if (incorrect !== correctAnswer && incorrect > 0) {
            incorrectAnswers.add(incorrect);
        }
    }

    // ✅ Shuffle answers
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5);

    // ✅ Set button values
    optionButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.onclick = () => checkAnswer(allAnswers[index], correctAnswer);
    });
}

// ✅ Check answer
function checkAnswer(selected, correct) {
    alert(selected === correct ? "✅ Correct! Well done!" : "❌ Wrong! Try again.");
    generateQuestion(); // Next question
}

// ✅ Initialize first question
generateQuestion();
