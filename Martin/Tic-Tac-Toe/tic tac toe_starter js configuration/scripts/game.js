function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter Player names!");
    return;
  }

  gameAreaElement.style.display = "block";
}
function selectedGameField(event) {
  const selectedFields = event.target;
  selectedFields.textContent = players[activePlayer].symbol;
}
