document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const responseMessage = document.getElementById("responseMessage") || document.getElementById("queryResponse");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name") || formData.get("queryName");
        const email = formData.get("email") || formData.get("queryEmail");
        const message = formData.get("message") || formData.get("queryText");

        const mailTo = "ankitmewada3577@gmail.com";
        const subject = encodeURIComponent("User Query from LogicBoost");
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

        window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;

        responseMessage.textContent = "Redirecting to your mail client...";
        responseMessage.style.color = "green";
    });
});
