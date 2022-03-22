//container
const array = ["one", "two", "three"];
array.push("four");
const itemAtIndex = array[1];
const firstItem = array.shift(); //two
const lastItem = array.pop(); //one
console.log(array); //four

const object = {
  string: "hello",
  number: 89,
};
console.log(object);

const map = new Map();
map.set("key", "value");
map.set("name", "test");
console.log(map.get("name"));
map.set("name", "daniel");
console.log(map.get("name")); //für den letzten wert abzurufen

//control structures

if (true) {
  console.log("if");
} else if (true) {
  console.log("elseif");
} else {
  console.log("else");
}

const value = Math.floor(Math.random() * 5);
switch (value) {
  case 0:
    console.log("value is zero");
    break;
  case 1:
  case 2:
    console.log("value is 1 or 2");
    break; // Die break Anweisung füht dazu, dass das Programm die switch Anweisung verlässt und mit der ersten Anweisung weitermacht, die dem Ende der switch Anweisung folgt.
  default:
    console.log(`value is ${value} `);
}
