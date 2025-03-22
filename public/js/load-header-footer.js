// Function to load external HTML content
function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load Header and Footer
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header-container", "/src/components/header.html");
    loadComponent("footer-container", "/src/components/footer.html");
});
