let images = [
  "dice-01.svg",
  "dice-02.svg",
  "dice-03.svg",
  "dice-04.svg",
  "dice-05.svg",
  "dice-06.svg",
];
let dice = document.querySelectorAll("img");

let iRollDice;

function roll() {
  dice.forEach(function (die) {
    die.classList.add("shake");
  });
  setTimeout(function () {
    dice.forEach(function (die) {
      die.classList.remove("shake");
    });

    

    let iRollDice;
    iRollDice = prompt("Wie oft Würfeln?",10);
    for (i=1; i<=iRollDice; i++
      ){
        iRandomNumber = Math.ceil(Math.random()*6);
        console.log(iRandomNumber);
      }

    
    

    console.log(iRandomNumber);
    document.querySelector("#die-1").setAttribute("src", images[iRandomNumber]);
    document.querySelector("#total").innerHTML =
      "Your roll is " + (iRandomNumber + 1);
  }, 1000);
}

