// 1. Referenz zu HTML Elemente
const budgetInput = document.getElementById("budget");
const expenseInput = document.getElementById("expense");
const expenseAmountInput = document.getElementById("expense-amount");
const submitBudget = document.getElementById("submit-budget");
const submitExpense = document.getElementById("submit-expense");

//Variables für Werte

let budget = 0;
let expenses = [];
let sumOfExpenses = 0;
let balance = 0;
// 2. EventListener

submitBudget.addEventListener("click", saveBudget);
submitExpense.addEventListener("click", saveExpense);

// 3. Callback Funktionen
// a Budget Speichern

function saveBudget() {
  const budgetInputValue = parseInt(budgetInput.value);

  if (budgetInputValue) {
    budget = budgetInputValue;
    calculateBalance();
  }
}

// b. Ausgabe speichern

function saveExpense() {
  const expenseInputValue = expenseInput.value;
  const expenseAmountInputValue = parseInt(expenseAmountInput.value);

  if (expenseAmountInputValue && expenseInputValue) {
    const expenseObject = {
      title: expenseInputValue,
      amount: expenseAmountInputValue,
    };
    expenses.push(expenseObject);
    calculateSumOfExpenses();
    calculateBalance();
  }
}

// 4. Berechnen der Werte

// a. Funktion Ausgabesumme

function calculateSumOfExpenses() {
  let sum = 0;
  expenses.forEach((expense) => {
    sum += expense.amount;
  });
  sumOfExpenses = sum;
}

//Funktion Berechnen des Restbetrags

function calculateBalance() {
  balance = budget - sumOfExpenses;
}

// Aufrufen
