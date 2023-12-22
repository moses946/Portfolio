function submitForm(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform basic form validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return;
    }

    document.getElementById("contactForm").reset();

    alert("Thank you for contacting Elon Musk! Your message has been sent.");
}
