function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    drawer.classList.toggle("open");

    // If drawer is open, listen for outside clicks
    if (drawer.classList.contains("open")) {
        document.addEventListener("click", closeDrawerOnOutsideClick);
    } else {
        document.removeEventListener("click", closeDrawerOnOutsideClick);
    }
}

function closeDrawerOnOutsideClick(event) {
    const drawer = document.getElementById("drawer");
    const menuIcon = document.querySelector(".menu-icon"); 

    // Check if the clicked element is NOT inside the drawer or the menu icon
    if (!drawer.contains(event.target) && !menuIcon.contains(event.target)) {
        drawer.classList.remove("open");
        document.removeEventListener("click", closeDrawerOnOutsideClick);
    }
}

function toggleTheme() {
    const body = document.body;
    const themeButton = document.getElementById("theme-button");
    const title = document.querySelector(".app-title"); 
    body.classList.toggle("dark-mode");

    // Toggle between moon and sun emojis
    themeButton.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
    title.style.color = body.classList.contains("dark-mode") ? "#f8d210" : "#333333";
    // Store theme preference
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

// Load Theme on Page Load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-button").textContent = "☀️";
    }
});

// undo redo controll
history.pushState(null, null, location.href);
history.replaceState(null, null, location.href);

// Detect when the user presses back and block it
window.addEventListener("popstate", function () {
    history.pushState(null, null, location.href);
    alert("You cannot go back to the previous page.");
});