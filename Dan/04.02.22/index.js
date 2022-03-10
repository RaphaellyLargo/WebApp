/*onst cars = ["Tesla", "BMW", "Skoda", "VW", "Porsche"];

for (let i = 0; i < cars.length; i++) {
  if (cars[i] == "Tesla") {
    alert("I <3 Tesla");
  }
}
*/

/*let cars = new Array();
cars["I love"] = "Tesla";
cars["I love"] = "BMW";
cars["I love"] = "Ferarri";
cars["I love"] = "Porsche";

for (const key in cars) {
  let value = cars[key];
  console.log(key, value);
  document.querySelector("#result").textContent += key + " " + value + "\n";
}
*/
/*
const Person = {
  name: "Raphaelly Largo",
  age: 29,
  size: 178,
  gender: "male",
  color: "black",
  shoesize: 42.5,
  hobbys: "existing",
  birthday: "December 12th 1992",
  eyecolor: "brown",
  citizenship: "switzerland",
  likes: "breathing",
};

console.log(Object.values(Person));
*/

const chips = {
  brand: "Funny Frisch",
  weight: 100,
  price: 2,
  img: "yourmom.jpg",
};

function getBrandName(product) {
  const titletag = document.createElement("h1");
  titletag.textContent = product.brand;
  return titletag;
}

document.body.appendChild(getBrandName(chips));

//destructuring
