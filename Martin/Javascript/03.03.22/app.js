document.addEventListener("DOMContentLoaded", getCocktails);

function getCocktails() {
  fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  )
    .then((response) => response.json())
    .then((data) => displayCocktailData(data.drinks));
}

function displayCocktailData(drinks) {
  console.log(drinks);

  drinks.forEach((drink) => {
    //console.log(drink);
    createCocktailHTMLElement(drink);
  });
  //für jeden Drink im Array eine Card im DOM-Baum erstellen
}

const DRINK_LIST_ELEMENT = document.getElementById("drink-list");

function createCocktailHTMLElement(drink) {
  //console.log(drink);
  //für jeden Drink im Array eine Card im DOM-Baum erstellen
  const drinkElement = document.createElement("div");
  //Klasse zu Div hinzufügen für style
  drinkElement.classList.add("card");
  //id von drink zu div hinzufügen
  drinkElement.id = drink.idDrink;
  // drin

  drinkElement.addEventListener("click", openDrinkDetail);

  drinkElement.innerText = drink.strDrink;
  DRINK_LIST_ELEMENT.appendChild(drinkElement);
}

function openDrinkDetail(event) {
  //console.log(event.target);
  const drinkId = event.target.id;
  console.log(drinkId);

  const requestURL =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;
  console.log(requestURL);

  //get details for drink with "drinkId" from API

  fetch(requestURL)
    .then((response) => response.json())
    .then((data) => setDrinkDetailData(data.drinks[0]));

  //console.log(data.drinks[0]);
}

function setDrinkDetailData(drink) {
  console.log(drink);

  document.getElementById("drink-titel").innerText = drink.strDrink;
  document.getElementById("drink-alcoholic").innerText = drink.strAlcoholic;
  document.getElementById("drink-image").src = drink.strDrinkThumb;
  document.getElementById("drink-ingredients").innerText = drink.strIngredient1;
  document.getElementById("drink-instructions").innerText =
    drink.strInstructions;

  const ingredients = getIngredients(drink);

  ingredients.forEach((ingredient) => {
    let ingredientItem = document.createElement("li");
    ingredientItem.innerText = ingredient;
  });
}

function getIngredients(drink) {
  Object.keys(drink).forEach((key) => {
    if (key.startsWith("strIngredient") && drink[key] != null) {
      //console.log(key);
      getIngredients.push(drink[key]);
    }
  });
}

console.log;
