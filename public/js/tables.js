
document.addEventListener("DOMContentLoaded", function () {
    // Check if tables were previously entered
    const savedTables = localStorage.getItem("tables");
    // if (savedTables) {
    //     generateTableLinks(parseInt(savedTables)); // Convert to number
    // }
});

function generateTableLinks() {
    const num = document.getElementById("tableInput").value;
    if (!num )
    {
        alert("Boss Number Enter to Karo Phle!");
        return;
    }
    else if (num < 1) {
        alert("Boss greater then 0 number Enter karo na!");
        return;
    }

    localStorage.setItem("tables", num); // Save value

    const tableLinksDiv = document.getElementById("table-links");
    tableLinksDiv.innerHTML = ""; // Clear previous links

    for (let i = 1; i <= num; i++) {
        const link = document.createElement("a");
        link.href = `/src/views/gen-table.html?num=${i}`;  // Use URL query parameter
        link.textContent = `Let's play with ${i}'s table`;
        link.classList.add("table-link");

        const listItem = document.createElement("li");
        listItem.appendChild(link);
        tableLinksDiv.appendChild(listItem);
    }
}
