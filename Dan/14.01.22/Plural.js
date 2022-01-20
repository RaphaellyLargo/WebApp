const maybePluralize = (count, noun, suffix = "s") =>
  `${count} ${noun}${count !== 1 ? suffix : ""}`;

maybePluralize(0, "turtle"); // 0 turtles
maybePluralize(1, "turtle"); // 1 turtle
maybePluralize(2, "turtle"); // 2 turtles
maybePluralize(3, "fox", "es"); // 3 lampen

const endWithE = [];
const endWithER = [];
const endWithS = [];
let wordTest = "Lampe";
let wordTest2 = "Auto";

function germanPluralizer(singularWord) {
  if (singularWord[singularWord.lenght - 1].includes("e")) {
    singularWord += "n";
  } else if (singularWord[singularWord.lenght - 1].includes("o")) {
    return (singularWord += "s");
  }
  return singularWord;
}
console.log(germanPluralizer(WordTest));
