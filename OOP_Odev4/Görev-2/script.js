class Employee {
  constructor(firstName, lastName, position, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.position = position;
    this.salary = salary;
  }
}
const employees = [];

document.getElementById("empForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const position = document.getElementById("position").value;
  const salary = parseFloat(document.getElementById("salary").value);

  const newEmployee = new Employee(firstName, lastName, position, salary);
  employees.push(newEmployee);

  updateTable();

  this.reset();
});

function updateTable() {
  const tbody = document.querySelector("#empTable tbody");
  tbody.innerHTML = "";

  employees.forEach((emp, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${emp.firstName}</td>
    <td>${emp.lastName}</td>
    <td>${emp.position}</td>
    <td>${emp.salary}</td>
    <td><button class="delete-btn" onclick="deleteEmployee(${index})">Sil</button></td>`;

    tbody.appendChild(row);
  });

  
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  updateTable();
}
