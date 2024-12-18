// JavaScript for greeting message based on time of day
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const currentTime = new Date().getHours();
    let greetingMessage = "";

    if (currentTime < 12) {
        greetingMessage = "Good Morning! Have a great day ahead!";
    } else if (currentTime < 18) {
        greetingMessage = "Good Afternoon! Hope you're having a productive day!";
    } else {
        greetingMessage = "Good Evening! Relax and unwind, you've earned it!";
    }

    greetingElement.textContent = greetingMessage;
}
; 
