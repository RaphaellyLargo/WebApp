/*//test

let api = "https://api.agify.io?";
let firstName = `name=${nameInput}&`;
let countryID = `country_id=${countryInput}`;
let url = api + firstName + countryID;
*/

//api call

/*
function getAPI() {
  fetch("https://api.agify.io?name=michael&country_id=US")
    .then((response) => response.json())
    .then((data) => displayAge());
}



//add name and age
  async function createEmployee() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;


//try

function ageAsk() {
    let url = api + input.value(name) + input.value(country);
    loadJSON()
}
*/

async function submit() {
  let firstName = document.getElementById("nameInput").value;
  let countryId = document.getElementById("country").value;
  let api = "https://api.agify.io?";
  let name = `name=${firstName}&`;
  let country = `country_id=${countryId}`;
  let url = api + name + country;

  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  document.getElementById("display-age").innerText = data.age;
}
