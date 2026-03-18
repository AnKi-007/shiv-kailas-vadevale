"use strict";

/* ---------- VARIABLES ---------- */
const shopName = "Shiv Kailas Vadevale";
let todaysSpecial = "Hot Vada Pav";

/* ---------- DOM SELECTION ---------- */
const feedbackButton = document.getElementById("feedbackBtn");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");

/* ---------- FUNCTIONS ---------- */

// Normal function
function validateFeedback() {
  try {
    if (nameInput.value === "" || messageInput.value === "") {
      alert("Please fill all fields");
      return;
    }

    alert(`Thank you ${nameInput.value}! Your feedback is received.`);
  } catch (error) {
    console.error("Feedback error:", error);
  }
}

/* ---------- EVENT LISTENER ---------- */
if (feedbackButton) {
  feedbackButton.addEventListener("click", validateFeedback);
}
