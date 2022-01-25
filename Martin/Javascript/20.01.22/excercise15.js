function rps(p1, p2) {
    let result;

if  (p1 == p2) {
        result = "Draw";

}
if (p1 == "rock" && p2 == "scissors") {
    result = "Player 1 won!";
}
if (p1 == "scissors" && p2 == "paper") {
    result = "Player 1 won!";
}
if (p1 == "paper" && p2 == "rock") {
    result = "Player 1 won!";
} else {
    result = "Player 2 won!";
}

console.log(result);
}

rps("rock", "rock");
 