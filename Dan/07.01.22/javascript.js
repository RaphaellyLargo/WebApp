//string
let board = "Surf board";
let amount = 50;
let boats = 40;
let redBoats = "Red Boats";
let blueBoats = "Blue Boats";
let t = "test";
let f = "test";
const textEx =
  "Bob has " + amount + board + "available" + "and" + boats + redBoats;
console.log(textEx);

//Template Strings

const textTemp = `Bob has ${redBoats}`;
console.log(textTemp);

// numbers

let number1 = 1;
let number2 = 1 + 1;
let number0 = 1 - 1;

//if/else

let bossmustsayok = true;
let hotelbooked = true;
let enoughmoney = false;
let enoughtime = true;

if (bossmustsayok && hotelbooked && enoughmoney && enoughtime) {
  document.write("Welcome to Vacation");
} else {
  document.write("go home and cry");
}

// car

letPatricklikesRed = false;
const car = {
  color: letPatricklikesRed ? "red" : "yellow",
  wheels: 4,
  make: "chevy",
  model: "corvette",
};
console.log(car.color);
