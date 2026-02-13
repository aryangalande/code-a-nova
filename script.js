// Initialize EmailJS
(function() {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
      alert("Message sent successfully!");
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    });
});