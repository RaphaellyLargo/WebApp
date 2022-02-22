// ##### SPEICHERN DER EINGABEN #####

// 1. Referenz zu HTML Elemente

const budgetInput = document.getElementById("budget");
const expenseInput = document.getElementById("expense");
const expenseAmountInput = document.getElementById("expense-amount");

const submitBudget = document.getElementById("submit-budget");
const submitExpense = document.getElementById("submit-expense");

// Variablen für Werte
let budget = 0;
let expenses = [];

// 2. EventListener

submitBudget.addEventListener("click", saveBudget);
submitExpense.addEventListener("click", saveExpense);

// 3. Callback Funktionen
// a. Budget Speichern

function saveBudget() {
  const budgetInputValue = parseInt(budgetInput.value);

  if (budgetInputValue) {
    budget = budgetInputValue;
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
    console.log(expenses);
  }
}
