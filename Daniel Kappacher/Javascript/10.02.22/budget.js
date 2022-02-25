// 1. Referenz zu HTML Elemente
const budgetInput = document.getElementById("budget");
const expenseInput = document.getElementById("expense");
const expenseAmountInput = document.getElementById("expense-amount");
const submitBudget = document.getElementById("submit-budget");
const submitExpense = document.getElementById("submit-expense");
const budgetForm = document.getElementById("budget-form");
const expenseForm = document.getElementById("expense-form");

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
  if (isNaN(budgetInputValue)) {
    alert("Bitte geben Sie einen Wert ein");
    budgetInput.classList.add("invalid-input");
    return;
  }

  if (budgetInputValue < 0) {
    alert("Bitte geben Sie einen positiven Wert ein");
    budgetInput.classList.add("invalid-input");
    return;
  }

  /* if (budgetInputValue < 1000) {
    alert('Bitte geben Sie einen positiven Wert ein');
    return;
  }*/
  if (budgetInputValue) {
    budget = budgetInputValue;
    updateBalance();
    budgetForm.reset();
    budgetInput.classList.remove("invalid-input");
  }
}

// b. Ausgabe speichern

function saveExpense() {
  const expenseInputValue = expenseInput.value;
  const expenseAmountInputValue = parseInt(expenseAmountInput.value);

  if (!expenseInputValue) {
    alert("Bite geben Sie eine Beschreibung ein");
    expenseInput.classList.add("invalid-input");
    expenseAmountInput.classList.add("invalid-input");
    return;
  }

  if (isNaN(expenseAmountInputValue)) {
    alert("Bitte geben Sie einen Wert ein");
    expenseInput.classList.add("invalid-input");
    expenseAmountInput.classList.add("invalid-input");
    return;
  }

  if (expenseAmountInputValue < 0) {
    alert("Bite geben Sie einen positiven Wert ein");
    expenseInput.classList.add("invalid-input");
    expenseAmountInput.classList.add("invalid-input");
    return;
  }
  if (expenseAmountInputValue && expenseInputValue) {
    const expenseObject = {
      title: expenseInputValue,
      amount: expenseAmountInputValue,
    };
    expenses.push(expenseObject);
    updateSumOfExpenses();
    updateBalance();
    expensesForm.reset();
    expenseInput.classList.remove("invalid-input");
    expenseAmountInput.classList.remove("invalid-input");
  }
}

// 4. Berechnen der Werte

// a. Funktion Ausgabesumme

function updateSumOfExpenses() {
  let sum = 0;
  expenses.forEach((expense) => {
    sum += expense.amount;
  });
  sumOfExpenses = sum;
  updateUI();
}

// 2. Funktion zum Berechnen des Restbetrags
function updateBalance() {
  balance = budget - sumOfExpenses;
  updateUI();
}

// ##### UI #####

function updateUI() {
  displayValues();
  displayExpenses();
}

function displayValues() {
  const budgetOutput = document.getElementById("budget-output");
  const expensesOutput = document.getElementById("expenses-output");
  const balanceOutput = document.getElementById("balance-output");

  budgetOutput.innerHTML = budget;
  expensesOutput.innerHTML = sumOfExpenses;
  balanceOutput.innerHTML = balance;
}

function displayExpenses() {
  const expensesList = document.getElementById("expenses-list");
  expensesList.innerHTML = "";

  expenses.forEach((expense) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${expense.title}: ${expense.amount} €`;
    expensesList.append(listItem);
  });
}
