let employees = [];
const form = document.getElementById("employeeForm");
const nameInput = document.getElementById("name");
const professionInput = document.getElementById("profession");
const ageInput = document.getElementById("age");
const message = document.getElementById("message");
const employeeList = document.getElementById("employeeList");
const count = document.getElementById("count");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name=nameInput.value.trim();
    const profession=professionInput.value.trim();
    const age=ageInput.value.trim();
    if(name==""||profession==""||age==""){
        message.textContent="Error: Please fill in all fields.";
        message.className="error";
        return;
    }
    if(Number(age)<=0||!Number.isInteger(Number(age))){
        message.textContent="Error: Please enter a valid age.";
        message.className="error";
        return;
    }
    const employee ={
        name: name,
        profession: profession,
        age: Number(age)
    };
    employees.push(employee);
    displayEmployees();
    message.textContent="Employee added successfully!";
    message.className="success";
    form.reset();
});
function displayEmployees(){
    employeeList.innerHTML = "";
    count.textContent = employees.length;
    if (employees.length===0){
        employeeList.innerHTML =
            '<p id="emptyMessage">You have 0 employees.</p>';
        return;
    }
    employees.forEach(function(employee){
        const div=document.createElement("div");
        div.className="employee";
        const details=document.createElement("div");
        details.className="employee-details";
        const name=document.createElement("p");
        name.textContent = "Name: " + employee.name;
        const profession = document.createElement("p");
        profession.textContent = "Profession: " + employee.profession;
        const age = document.createElement("p");
        age.textContent = "Age: " + employee.age;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete User";
        deleteButton.className = "delete-btn";
        deleteButton.addEventListener("click", function () {
            employees = employees.filter(function (item) {
                return item.id !== employee.id;
            });
            displayEmployees();
            message.textContent="Employee deleted successfully!";
            message.className="success";
        });
        details.append(name,profession,age);
        div.append(details,deleteButton);
        employeeList.appendChild(div);
    });
}