function startCharNumberPractice() {
    const limit = document.getElementById("char-limit").value;
    if (limit > 0) {
        window.location.href = `generate-char-numbers.html?limit=${limit}`;
    } else {
        alert("Please enter a valid number greater than 0!");
    }
}
