// Get number limit from URL
const params = new URLSearchParams(window.location.search);
const limit = parseInt(params.get("limit"), 10);

// Elements
const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");

let usedNumbers = []; // Track used numbers

function generateQuestion() {
    if (usedNumbers.length === limit) {
        alert("Practice complete! 🎉");
        window.location.href = "cubes.html"; // Redirect back
        return;
    }

    let number;
    do {
        number = Math.floor(Math.random() * limit) + 1;
    } while (usedNumbers.includes(number));

    usedNumbers.push(number);
    const correctAnswer = number ** 3;

    questionEl.textContent = `${number}³ = ?`;

    let incorrectAnswers = new Set();
    while (incorrectAnswers.size < 3) {
        let incorrect = correctAnswer + (Math.random() < 0.5 ? -1 : 1) * Math.floor(Math.random() * 20) + 1;
        if (incorrect !== correctAnswer && incorrect > 0) {
            incorrectAnswers.add(incorrect);
        }
    }

    const allAnswers = [correctAnswer, ...incorrectAnswers];
    allAnswers.sort(() => Math.random() - 0.5); // Shuffle

    optionButtons.forEach((btn, index) => {
        btn.textContent = allAnswers[index];
        btn.onclick = () => checkAnswer(allAnswers[index], correctAnswer);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert("✅ Correct! Well done!");
    } else {
        alert("❌ Wrong! Try again.");
    }
    generateQuestion();
}

generateQuestion();
