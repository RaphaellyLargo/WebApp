//Exercise 1//

let h1Element = document.getElementById("h1Element");

//Excercise 2//
let h1Element = document.getElementById("h1Element").innerHTML;

//Excercise 3//

let h1Element = document.getElementById("h1Element").firstChild.nodeValue;

//Excercise 4//

let h1Element = document.getElementById("h1Element");

//Excercise 5//

let highlightedParagraph = document.querySelector('highlighted-paragraph');

//Excercise 6//

document.replaceChild(highlightedParagraph);

//Excercise 7//

firstParagraph.append(newAnchorElement);

//Excercise 8//

let title = document.querySelector('h1');
title.remove();

//Excercise 9//









//Excercise 13//

let inputElement = document.querySelector('input');

inputElement.addEventListener('input',retrieveUserInput);

function retrieveUserInput(){
    let enteredText = inputElement.value;
    console.log(enteredText);
}