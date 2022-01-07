function writeToConsole(value) {
    console.log(value);
}

writeToConsole("Hello console");

document.getElementById("heading").innerHTML = "My New Calculator";
document.getElementById("heading").style = "color: green";

var name = 'Raphy';
var age = 28;
var height = 1.78;
var isStudent = true;
var diploma = undefined;
var project = null;
var myFirstFunction = writeToConsole;

var daniel = {
    firstName: name,
    age,
    height,
    isStudent,
    diploma,
    project,
    myFirstFunction
}

function calculate() {
    //load inpuzt values
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    if(isNaN(number1) == NaN || number2 ==NaN) {
        alert("Es sind nur Zahlen erlaubt.");
        return;
    }
    //calculate result
    var result = number1 + number2;

    // write result
    document.getElementById("result").value = result;
}