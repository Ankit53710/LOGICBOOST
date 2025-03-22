// Get number limit from URL
const params = new URLSearchParams(window.location.search);
const limit = parseInt(params.get("limit"), 10) || 26; // Default to 26 if limit is not provided

// Elements
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

let usedChars = new Set(); // Track used characters

// Generate a random uppercase character
function generateRandomChar() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let char;
    do {
        char = letters[Math.floor(Math.random() * letters.length)];
    } while (usedChars.has(char)); // Ensure unique selection

    usedChars.add(char);
    return char;
}

// Get numerical value (A=1, B=2, ..., Z=26)
function getCharValue(char) {
    return char.charCodeAt(0) - 64;
}

function generateQuestion() {
    if (usedChars.size === limit) {
        alert("🎉 Practice complete! Redirecting...");
        window.location.href = "charNumbers.html"; // Redirect back
        return;
    }

    const char = generateRandomChar();
    const correctAnswer = getCharValue(char);

    questionEl.textContent = `What is the numerical value of '${char}'?`;

    let incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3) {
        let incorrect = correctAnswer + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);
        if (incorrect !== correctAnswer && incorrect >= 1 && incorrect <= 26) {
            incorrectAnswers.add(incorrect);
        }
    }

    // Shuffle and assign answers
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5);

    optionButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.onclick = () => checkAnswer(allAnswers[index], correctAnswer);
    });
}

function checkAnswer(selected, correct) {
    alert(selected === correct ? "✅ Correct! Well done!" : "❌ Wrong! Try again.");
    generateQuestion();
}

// Start the first question
generateQuestion();
