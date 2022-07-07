console.log("hi");
// to start with node - > write in Konsole: node recap.js!
const string = "hello world";
const templateString = `https://${string}.com`;
const integer = 500; // both are numbers
const decimal = 3.14; // both are numbers
const boolean = true;
const nullType = null;
const notDefined = undefined;
//scopes
{
  var global = "exists global";
  const localImmutable = "constant value (not changable";
  //localImmutable = "oh no";
  let localMutable = "changable value";
  localMutable = "changable value => changed";
} // scope ist ein Gültigkeitsbereich
console.log(global);
console.log(templateString, integer, decimal, boolean, nullType, notDefined);
//container
const stringArray = ["VW", "Kia", "Lindner", "Kawasaki", "Deutz", "Steyr"];
stringArray.push("Mercedes");
const itemAtIndex = stringArray[1];
const firstItemofArry = stringArray.shift();
const lastItemofArray = stringArray.pop();
console.log(stringArray);
console.log(itemAtIndex);
console.log(firstItemofArry);
console.log(lastItemofArray);
// LIFO last in -> first out --> STACK (Stapel)
// FIFO first in -> first out --> QUEUE (Warteschlange)
const object = {
  firstName: "Simon",
  secondName: "Rüdisser",
};
console.log(object.firstName);
console.log(object["firstName"]);
const map = new Map(); // maps zb für Sensorauslesung (speichert immer den letzten wert)
map.set("firstName", "Simon");
map.set("name", "test");
map.set("name", "daniel"); // erster Wert wird überschrieben -> aus test wird daniel!
console.log(map.get("name"));
//control structures
// conditional flow
let age = 50;
if (age > 100) {
  console.log("your older than 100");
} else if (age <= 100 && age > 50) {
  console.log("your old");
} else if (age <= 50 && age > 10) {
  console.log("your young");
} else {
  console.log("your youngster");
}
const value = Math.floor(Math.random() * 5);
switch (value) {
  case 0:
    console.log(`value is zero (value = ${value})`);
    break;
  case 1:
  case 2:
    console.log(`value is 1 or 2 (value = ${value})`);
    break;
  default:
    console.log(`value is VALUE (value = ${value})`);
}
// loops
/*
let condition = 1;
while (condition=1) {
    console.log("value is one");
    //break;                                Kopfgesteuert (automaten, steuerungen, spiele); ausserste schleife -> ist immer aktiv!
    condition = false;
    break;
}
do {
                                            Fussgesteuert (erster durchgang wird auf jeden fall durchgeführt)
} while (condition);
*/
// for    for-of  for-in
for (let index = 0; index < stringArray.length; index++) {
  console.log(stringArray[index]);
}
for (let index in stringArray) {
  if (index == 0) {
    // Erstes Element wird übersprungen
    continue;
  }
  console.log(stringArray[index]);
  if (index == "2") {
    // Beim dritten Element erfolgt break (schleife wird verlassen)
    break;
  }
}
for (let item of stringArray) {
  console.log(item);
}
// programmstructures
//functions
function myFunction(parameterOne, parameterTwo) {
  console.log(`parameters: ${parameterOne}, ${parameterTwo}`);
}
myFunction("winter", "sommer");
//classes
class Example {
  constructor(value) {
    this.value = value;
  }
  getValue = () => this.value;
}
const emp = new Example("simon");
console.log(emp.getValue());
// utils
Math.random();
Math.PI;
Number.parseInt("42");
Number.MAX_VALUE;
JSON.parse('{"hey":"ho"}');
Date.now();
new Date();
console.log(new Date());
// double exclamation mark
const firstName = "Simon";
const lastName = "";
const object = {};
const books = { title: "alpenpanoramen", isbn: 123214, autor: "ich" };
const arrayEmpty = [];
const array = ["vw", "audi", "bmw", "kia", "lindner"];
const number = 1.23;
const numberNull = 0;
const objectArray = [{}];
console.log(firstName);
console.log(lastName);
console.log(object);
console.log(books);
console.log(array);
if (!!numberNull && numberNull === 0) {
  console.log("True");
} else {
  console.log("false");
}
/* "!!" double exclamation mark : prüfen ob variablen werte enthalten! prüfung 0 ist false!!! zahlen können somit nicht validiert werden - wenn 0 erlaubt ist (zb temperatur) - zahlen in string umwandeln - für validierung
 */
