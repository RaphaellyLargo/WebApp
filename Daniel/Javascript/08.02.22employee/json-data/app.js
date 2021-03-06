class Employee {
  constructor(firstName, lastName, key, dateOfBirth, image) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.key = key;
    this.dateOfBirth = new Date(dateOfBirth);
    this.image = image;
  }

  /**
   * Calculate
   * @returns the age of the employee in years (number)
   */
  getAge() {
    const now = new Date();
    const age = now.getFullYear() - this.dateOfBirth.getFullYear();
    return age;
  }
  /**
   *
   * @returns full name of the employee (firstName lastName)
   */

  getFullName() {
    return `${employee.firstName} ${employee.lastName}`;
  }
}

const { Agent } = require("http");
const { isAsyncFunction } = require("util/types");

async function startApp() {
  console.log("--- Employee Management ---");
  await loadEmployeelist();
}

async function loadEmployeelist() {
  const listElement = document.getElementById("list");
  listElement.innerHTML = null;
  const employees = await loadEmployeesAsync();
  renderEmployeeList(employees);
}

async function loadEmployeesAsync() {
  const response = await fetch("http://localhost:3000/employees");
  const jsonData = await response.json();
  const employees = jsonData.map(
    (data) =>
      new Employee(
        data.firstName,
        data.lastName,
        data.key,
        data.dateOfBirth,
        data.image
      )
  );
  return employees;
}

function renderEmployeeList(employees) {
  const listElement = document.getElementById("list");
  for (const employee of employees) {
    const listItem = document.createElement("div");
    listItem.className = "list-item";
    listItem.addEventListener("click", () => renderDetail(employee));

    const keyItem = document.createElement("div");
    keyItem.className = "list-item-key";
    keyItem.innerText = employee.key;
    listItem.appendChild(keyItem);
    const nameItem = document.createElement("div");
    nameItem.className = "list-item-name";
    nameItem.innerText = `${employee.firstName} ${employee.lastName}`;
    listItem.appendChild(nameItem);

    listElement.appendChild(listItem);
  }
}

function renderDetail(employee) {
  document.getElementById("avatar").src = employee.image;
  document.getElementById("key").innerHTML = employee.key;
  document.getElementById(
    "name"
  ).innerHTML = `${employee.firstName} ${employee.lastName}`;
  const dateOfBirth = new Date(employee.dateOfBirth);
  document.getElementById("birthday").innerHTML =
    dateOfBirth.toLocaleDateString("de-AT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  document.getElementById("age").innerHTML = `Age: ${employee.getAge()}`;
  document.getElementById("delete").onclick = () =>
    deleteEmployee(employee.key);
}

async function createEmployee() {
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;
  const key = document.getElementById("keyInput").value;
  const dateOfBirth = document.getElementById("dateOfBirthInput").value;

  await fetch("http://localhost:3000/employees", {
    method: "POST",
    body: JSON.stringify({
      firstName,
      lastName,
      key,
      dateOfBirth,
      image: "placeholder.gif",
    }),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
  loadEmployeelist();
}

async function deleteEmployee(employeeKey) {
  const request = new Request(
    `http://localhost:3000/employees?key=${employeeKey}`,
    {
      method: "DELETE",
      mode: "cors",
    }
  );
  await fetch(request);

  await loadEmployeelist();
}
