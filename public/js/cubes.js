function startCubePractice() {
    const limit = document.getElementById("cube-limit").value;

    if (limit > 0) {
        localStorage.setItem("cubeLimit", limit);  // Store in localStorage
        window.location.href = "generate-cube.html";  // Redirect without query parameter
    } else {
        alert("Please enter a valid number greater than 0!");
    }
}
