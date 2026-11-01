// WAIT FOR THE PAGE TO LOAD
document.addEventListener("DOMContentLoaded", function () {

    // LEARN MORE BUTTON
    const learnMore = document.querySelector(".learn-btn");

    if (learnMore) {
        learnMore.addEventListener("click", function () {
            console.log("Welcome to Tricia's Portfolio!");
        });
    }

    // NAVIGATION BUTTONS
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            console.log("Opening " + link.textContent);
        });

    });

});

const welcomeBtn = document.getElementById("welcomeBtn");
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
        welcomeMessage.textContent =
            "Welcome to my personal portfolio! Thank you for visiting!";
    });
}