document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Generate Unique ID
    const uniqueId = 'CMR' + Math.random().toString(36).substr(2, 12).toUpperCase();

    // Collect form data
    const formData = new FormData(this);
    formData.append("uniqueId", uniqueId);

    // Show confirmation with all details
    let confirmationMessage = "Appointment Confirmed!\nYour Booking ID: " + uniqueId + "\n\n";
    formData.forEach((value, key) => {
        if (key !== "patientImage" && key !== "aadharImage") {
            confirmationMessage += `${key}: ${value}\n`;
        }
    });
    alert(confirmationMessage);

    // Send email to hospital (Simulated)
    sendEmailToHospital(formData);
});

function sendEmailToHospital(formData) {
    console.log("Email sent to hospital with the following details:");
    for (let [key, value] of formData.entries()) {
        if (key !== "patientImage" && key !== "aadharImage") {
            console.log(`${key}: ${value}`);
        }
    }
}
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Generate Unique ID
    const uniqueId = 'CMR' + Math.random().toString(36).substr(2, 12).toUpperCase();

    // Collect form data
    const formData = new FormData(this);
    formData.append("uniqueId", uniqueId);

    // Prepare data for storage
    const formObject = {};
    formData.forEach((value, key) => formObject[key] = value);
    sessionStorage.setItem("formData", JSON.stringify(formObject));

    // Redirect to print details page
    window.location.href = "print_details.html";
});
