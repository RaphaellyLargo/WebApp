function confetti(confettiCount) {
  const body = document.body;
  for (let i = 0; i < confettiCount; i++) {
    randomConfetti(body);
  }
}

function randomConfetti(body) {
  const position = 100 * Math.random();
  const delay = 3 * Math.random();

  const confettiContainer = document.createElement("div");
  confettiContainer.className = "confetti-container";
  confettiContainer.style = `left: ${position}%; animation-delay: ${delay}`;

  const confettiBody = document.createElement("div");
  confettiBody.className = "confetti-body";

  confettiContainer.appendChild(confettiBody);
  body.appendChild(confettiContainer);
}
