// Get number limit from URL
//const params = new URLSearchParams(window.location.search);
const limit = parseInt(localStorage.getItem("cubeLimit"));

// Validate limit
if (!limit || limit < 1) {
    alert("Invalid number! Redirecting...");
    window.location.href = "index.html"; // Redirect to home if limit is invalid
}

// Get Elements
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

let usedNumbers = []; // Track used numbers

function generateQuestion() {
    // Check if all numbers are used
    if (usedNumbers.length === limit) {
        alert("🎉 Practice complete! Well done!");
        window.location.replace("cubes.html"); // Safe redirection
        return;
    }

    // Generate a unique number
    let number;
    do {
        number = Math.floor(Math.random() * limit) + 1;
    } while (usedNumbers.includes(number));

    usedNumbers.push(number);
    const correctAnswer = number ** 3;

    // Generate unique incorrect answers
    let incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3) {
        let incorrect = correctAnswer + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 20) + 1);
        if (incorrect !== correctAnswer && incorrect > 0) {
            incorrectAnswers.add(incorrect);
        }
    }

    // Shuffle all answers
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5);

    // Assign answers to buttons
    optionButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.onclick = () => checkAnswer(allAnswers[index], correctAnswer);
    });

    // Display the question
    questionEl.textContent = `${number}³ = ?`;
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("✅ Correct! Well done!");
    } else {
        alert("❌ Wrong! Try again.");
    }
    generateQuestion();
}

// Start the game
generateQuestion();
