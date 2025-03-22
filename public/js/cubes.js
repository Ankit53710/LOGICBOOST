function startCubePractice() {
    const limit = document.getElementById("cube-limit").value;
    if (limit > 0) {
        window.location.href = `generate-cube.html?limit=${limit}`;
    } else {
        alert("Please enter a valid number greater than 0!");
    }
}
