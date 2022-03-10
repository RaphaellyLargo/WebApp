//Operatoren

//Arithmetic

// Modulus
/*console.log(5 % 3); // division, gibt 2 aus weil 2 rest. */

//Increment

/*let count = 4;

count++

console.log(count) // adds 1 value to the count */

//Decrement

/*let count = 20

count--

console.log(count) // adds 1 value negative to the count */

/*/Unary Negation
let x = 4

console.log(-x) // just makes the value negative */

//Unary Plus

/*let y = '4'

console.log(y) // if you put a + on a string it changes to a number */

//Exponential
/*let z = 4;

console.log(z ** 2); // to the power of 2 */

//comparison Operators
//let x = 20;

//Equal
//console.log(x =='20') //outputs true because 20 equals 20

//Not Equal
//console.log(x != 2) //outputs true because 2 is not equal 20

//Deeply Equal
//console.log(x === 20) // outputs true because 20 is deeply equal 20, in string it outputs false, needs to be the same type as well

//Strict not Equal
//console.log(x !== '20') // outputs true because 20 is a string, if 20 as number it outputs false

//Greater than
//console.log(x > 5); //compares the number

//Greater or equal
//console.log(x >= 20); // gives out true because 20 is equal 20 one of the 2 possibilities must be true

// Less than
//console.log(x < 20); // compares the number

// less than or equal
//console.log(x <= 20); // gives out true because it is equal

//Logical Operators
/*const fruit = ["apple", "baana", "grape"];

// AND
if (fruit.includes("apple") && fruit.includes("banana")) {
  //beide müssen existieren im array um auszugeben

  console.log("both fruits exist");
}

// OR
if (fruit.includes("coconut") || fruit.includes("apple")) {
  //mindestens einer muss existieren um auszugeben
  console.log("atleast one fruit exists");
}

// NOT
if (!fruit.includes("cherry")) {
  //cherry darf nicht im array sein um auszugeben
  console.log("cherry is missing");
}
*/

//Ternary Operators
/*let isGameOver = false

if (isGameOver == true) {
    console.log('Sorry you lost!')
} else {
    console.log('Carry on playing')
}

isGameOver ? console.log('Sorry you lost!') : console.log('Carry on playing')
// ernary Operators können mehrere Zeilen Code in eine setzen is the game over? sorry you lost sonst carry on playing
*/

/* Fizz buzz

let num = 0;

if (num % 15 === 0) {
  console.log("fizz buzz");
} else if (num % 5 === 0) {
  console.log("buzz");
} else if (num % 3 === 0) {
  console.log("fizz");
} else {
  console.log(num);
}
*/

//for loops

//for(let i = 0; i < 10; i++) {
//  //code
//  console.log(i)
//}

//for loop with fizzbuzz

//for (let num = 1; num < 101; num++) {
//  //code
//  if (num % 15 === 0) {
//    console.log("fizzbuzz");
//  } else if(num % 5 === 0) {
//    console.log("buzz");
//  } else if(num % 3 === 0) {
//    console.log("fizz");
//  } else {
//    console.log(num)
//  }
//}

//arrays
//console.log(books.length) // outputs items in the array

//let books = ["Moby Dick", "Life of Pi", "Sapiens", "test1", "test2", "test3"];
//
//let count = 0;
//for (let i = 0; i < books.length; i++) {
//  console.log(books[i])
//  if (books[i] === "Sapiens") {
//    count = count + 1
//    console.log(count)
//  }
//}
//

//objects

//const user = {
//  name: 'Raphy',
//  lastName: 'Largo',
//  pets: false
//}
//
//console.log(user) // with user.name u can output only the name

// Functions

//function sendText(name, time) {
//  console.log('Hey ' + name + ' do you want to hang out at ' + time + '?')
// }
//
// sendText('Bobby', 10)
// sendText('Danny', 8)
// sendText('Amy', 5)
// sendText('Farooq', 1)

//function sendReminder(name, time) {
//  console.log('Dear ' + name + ' your meeting is at ' + time)
// }
//
// sendReminder('Farooq', 4)
// sendReminder('Bobby', 10)
// sendReminder('Danny', 8)
// sendReminder('Amy', 5)

//let name = 'Raphy'
//let count = 1
//
//function showAlert() {
//  console.log('Hey ' + name + ', wake up! This is alarm number ' + count + '!')
//  count += 1
//}
//
//showAlert()
//showAlert()
//showAlert()
