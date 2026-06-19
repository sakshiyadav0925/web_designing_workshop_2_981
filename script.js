let employees =[] ;
function addEmployee() {
    let emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value, 
        salary: Number(document.getElementById("salary").value),
        dept: document.getElementById("dept").value
    } ;
    employees.push(emp) ;
    alert("Employee Added!") ;

}
function displayEmployees() {
    let output = " " ;
 for(let emp of employees) {
    output += emp.name + "- rupees" +emp.salary +"<br>" ;

}
document.getElementById("output").innerHTML = output ;
 
function filterEmployees() {
    let result =employees.filter(emp => emp.salary>5000) ;
    let output=" " ;

}

function totalSalary() {
    let total =0 ;
    for(let emp of employees) {
        total += emp.salary ;
    }
    document.getElementById("output").innerHTML ="Total Salary : $" +total ;

}
function avgsalary() {
    let total = 0 ;
    document.getElementById("output").innerHTML ="Average salary : $" 
}