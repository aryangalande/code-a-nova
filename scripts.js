// Doctor Details
function showDoctorDetails(details) {
  document.getElementById("doctor-detail").innerText = details;
}

// Toggle Specialities
function toggleSpeciality(id) {
  const element = document.getElementById(id);
  element.classList.toggle("hidden");
}

// Appointment Form Validation + EmailJS
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("patientName").value;
  const email = document.getElementById("patientEmail").value;
  const date = document.getElementById("appointmentDate").value;

  if(name && email && date) {
    alert("Appointment booked successfully!");
    // EmailJS integration
    emailjs.send("service_id","template_id",{
      patient_name: name,
      patient_email: email,
      appointment_date: date
    });
  }
});

// Contact Form Validation + EmailJS
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  if(name && email && message) {
    alert("Message sent successfully!");
    // EmailJS integration
    emailjs.send("service_id","template_id",{
      contact_name: name,
      contact_email: email,
      contact_message: message
    });
  }
});