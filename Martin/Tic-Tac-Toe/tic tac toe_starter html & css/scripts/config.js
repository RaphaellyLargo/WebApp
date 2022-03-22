function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  enteredPlayername = formData.get("playername");

  const updatedPlayerNameElement = document.getElementById(
    "p" + editedPlayer + "name"
  );
  updatedPlayerNameElement.textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;
  console.log(players);
  closePlayerConfig();
}
