function openDialog() {
    document.getElementById("square-dialog").style.display = "block";
}

function closeDialog() {
    document.getElementById("square-dialog").style.display = "none";
}

function startPractice() {
    let num = document.getElementById("square-limit").value;
    if (num > 0) {
        window.location.href = `/src/views/generate-square.html?limit=${num}`;
    } else {
        alert("Please enter a valid number greater than 0.");
    }
}
